import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom";

const AddADoctor = () => {
  const [error, setError] = useState("");
  /* const imgHostKey =process.env.REACT_APP_imgKey; */
  const imgHostKey ="25b08f5eaf567ebb996f971a9098c761";
  const navigate = useNavigate()

  const { data = [] } = useQuery({
    queryKey: ["appinmentEpecialty"],
    queryFn: () =>
      fetch("http://localhost:5000/appinmentEpecialty").then((res) =>
        res.json()
      ),
  });

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm();

  const handleSubmitData = (data) => {
      const image = data.image[0];
      const formData = new FormData();
      formData.append("image", image);

    fetch(`https://api.imgbb.com/1/upload?key=${imgHostKey}`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {

        if(result.success){
            const doctorInfo={
                name: data.name,
                email: data.email,
                specialty : data.epecialty,
                image : result.data.url


            }
            fetch("http://localhost:5000/doctors", {
                method: "POST",
                headers: {
                  "content-type": "application/json",
                },
                body: JSON.stringify(doctorInfo),
              })
                .then((res) => res.json())
                .then((result) => {
                  console.log(result);
                  toast.success(`${data.name} is added successfully`)
                  navigate('/dashboard/managedoctors')
                }); 
        }
      });
  };

  return (
    <div>
      <div className="text-left text-3xl font-bold my-6 md:pl-8">
        <h1 className="font-serif">Add a doctors</h1>
      </div>
      <form
        className="md:w-[50%] w-[96%] mx-auto md:mx-8 mt-5 shadow-2xl p-6 rounded-xl"
        onSubmit={handleSubmit(handleSubmitData)}
      >
        <label className="label">
          <span className="text-md text-black">Name</span>
        </label>
        <input
          type="text"
          className="input input-bordered w-full "
          {...register("name", { required: "name is required" })}
        />
        {errors.name && (
          <p className="text-red-600 text-start">{errors.name?.message}</p>
        )}
        <label className="label">
          <span className="text-md text-black">Email</span>
        </label>
        <input
          type="email"
          className="input input-bordered w-full "
          {...register("email", {
            required: "email is required",
          })}
        />
        {errors.email && (
          <p className="text-red-600 text-start">{errors.email?.message}</p>
        )}
        <label className="label">
          <span className="text-md text-black">Specialty</span>
        </label>
        <select
          {...register("epecialty", {
            required: "Specialty is required",
          })}
          className="select select-bordered w-full"
        >
          {data?.map((name) => (
            <option value={name.name} key={name._id}>
              {name.name}
            </option>
          ))}
        </select>
        {errors.epecialty && (
          <p className="text-red-600 text-start">{errors.epecialty?.message}</p>
        )}

        <label className="label">
          <span className="text-md text-black">Upload image</span>
        </label>
        <input
          type="file"
          className="input  w-full "
          {...register("image", { required: "image is required" })}
        />
        {errors.image && (
          <p className="text-red-600 text-start">{errors.image?.message}</p>
        )}

        {error && <p className="text-red-600 text-start">{error}</p>}
        <input className="btn w-full mt-3" type="submit" value="Add a Doctor" />
      </form>
    </div>
  );
};

export default AddADoctor;
