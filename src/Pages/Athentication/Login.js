import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Login = () => {
  const [error, setError] = useState("");
  const [forget, setForget] = useState("");
  const { googleLogin, logInUser, resetPass } = useContext(AuthContext);
  const nagivate = useNavigate();

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm();

  const handleSubmitData = (data) => {
    console.log(data);
    logInUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Account Create Successfully");
        nagivate("/");
      })
      .catch((err) => {
        setError(err.message);
        console.log(err);
      });
  };
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Account Create Successfully");
        nagivate("/");
      })
      .catch((err) => {
        setError(err.message);
        console.log(err);
      });
  };

  const passwordForget = () => {
    resetPass(forget)
      .then((result) => {
        toast.success("Password Reset Success..Check your Email Address");
      })
      .catch((err) => {
        setError(err.message);
        console.log(err);
      });
  };

  return (
    <div className=" h-screen flex justify-center items-center my-[100px] lg:my-0 w-[96%] mx-auto">
      <div className="w-[385px] h-[550px] border border-gray-400 shadow-2xl rounded-lg p-[29px]">
        <form onSubmit={handleSubmit(handleSubmitData)}>
          <h1 className="mb-[20px] text-2xl font-bold font-serif">Login</h1>
          <label className="label">
            <span className="text-md text-black">Email</span>
          </label>
          <input
            type="email"
            className="input input-bordered w-full max-w-xs"
            {...register("email", { required: "Email Address is required" })}
          />
          {errors.email && (
            <p className="text-red-600 text-start">{errors.email?.message}</p>
          )}
          <label className="label">
            <span className="text-md text-black">Password</span>
          </label>
          <input
            type="password"
            className="input input-bordered w-full max-w-xs"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password need must 6 corrector or longer",
              },
            })}
          />
          {errors.password && (
            <p className="text-red-600 text-start">
              {errors.password?.message}
            </p>
          )}
          {error && <p className="text-red-600 text-start">{error}</p>}
          <label
            htmlFor="my-modal"
            className="mr-[160px] md:mr-[190px] cursor-pointer"
          >
            Forgot Password ?
          </label>
          {/* modal */}
          <div>
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal text-start">
              <div className="modal-box">
                <h3 className="font-bold text-lg">Reset Password!</h3>
                <input
                  onChange={(e) => setForget(e.target.value)}
                  type="text"
                  className="py-4 mt-4 input input-bordered input-accent w-full"
                  name="forget"
                  id=""
                  placeholder="Email...."
                />
                <div onClick={passwordForget} className="modal-action">
                  <label htmlFor="my-modal" className="btn">
                    forget
                  </label>
                </div>
              </div>
            </div>
          </div>
          <input className="btn w-full mt-3" type="submit" value="Login" />
        </form>
        <div className="flex gap-2 mt-4">
          <p>New to Doctors Portal?</p>
          <Link to="../register" className="text-[#19D3AE] hover:underline">
            Create new account
          </Link>
        </div>
        <div className="divider">OR</div>
        <button
          onClick={handleGoogleLogin}
          className="btn w-full mt-[20px] btn-outline"
        >
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default Login;
