import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { UseToken } from "../../Hooks/UseToken";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Register = () => {
  const { createUser, googleLogin, updateName } = useContext(AuthContext);
  const [createUserEmail, setCreateUserEmail] = useState("");
  const [token] = UseToken(createUserEmail);
  const [error, setError] = useState("");
  const nagivate = useNavigate();
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm();

  if (token) {
    nagivate("/");
  }

  const handleRegister = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        updateName(data.name)
          .then(() => {})
          .catch((err) => {
            setError(err.message);
            console.log(err);
          });
        toast.success("Account Create Successfully");
        handleSaveUser(data.name, data.email);
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

  const handleSaveUser = (name, email) => {
    const user = { name, email };
    fetch("https://doctors-portal-server-seven-xi.vercel.app/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        setCreateUserEmail(email);
        console.log(data);
      });
  };

  /*  const getUserToken=email=>{
    fetch(`https://doctors-portal-server-seven-xi.vercel.app/jwt?email=${email}`)
    .then(res=>res.json())
    .then(data=>{
      if(data.accessToken){
        localStorage.setItem('accessToken', data.accessToken)
        nagivate("/")
      }
    })
  } */

  return (
    <div className=" h-screen flex justify-center items-center my-[100px] lg:my-0 w-[96%] mx-auto">
      <div className="w-[385px] h-[650px] border border-gray-400 shadow-2xl rounded-lg p-[29px]">
        <form onSubmit={handleSubmit(handleRegister)}>
          <h1 className="mb-[20px] text-2xl font-bold font-serif">Register</h1>
          <label className="label">
            <span className="text-md text-black">Name</span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full max-w-xs"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <p className="text-red-600 text-start">{errors.name?.message}</p>
          )}
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
              pattern: {
                value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                message:
                  "Your password should be number,special corrector & upper case",
              },
            })}
          />
          {errors.password && (
            <p className="text-red-600 text-start">
              {errors.password?.message}
            </p>
          )}
          {error && <p className="text-red-600 text-start">{error}</p>}
          <input className="btn w-full mt-5" type="submit" value="Register" />
        </form>
        <div className="flex gap-2 mt-4">
          <p>Already have account?</p>
          <Link to="/login">
            <button className="text-[#19D3AE] hover:underline">Login</button>
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

export default Register;
