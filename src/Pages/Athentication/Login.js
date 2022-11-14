import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Login = () => {
  const [error, setError] = useState("");
  const { googleLogin, logInUser } = useContext(AuthContext);
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
          <p className="text-start my-3">Forgot Password ?</p>
          <input className="btn w-full" type="submit" value="Login" />
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
