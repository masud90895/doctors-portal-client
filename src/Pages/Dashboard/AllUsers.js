import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

const AllUsers = () => {
  const { data = [],refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("https://doctors-portal-server-seven-xi.vercel.app/allusers");
      const data = res.json();
      return data;
    },
  });

  const handleMakeAdmin = (id) => {
    console.log(id);
    fetch(`https://doctors-portal-server-seven-xi.vercel.app/allusers/admin/${id}`, {
      method: "PUT",
      headers : {
        authorization : `bearer ${localStorage.getItem('accessToken')}`
      }
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.modifiedCount > 0){
            toast.success("admin added successfully")
            refetch()
        }
      });
  };
  return (
    <div className="p-4">
      <div className="text-left text-3xl font-bold my-6 ">
        <h1 className="font-serif">All User</h1>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full ">
          {/* <!-- head --> */}
          <thead>
            <tr  className="bg-gray-500">
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Admin</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((data, i) => (
              <tr key={data?._id} className="hover">
                <th>{i + 1}</th>
                <td>{data?.name}</td>
                <td>{data.email}</td>
                <td>
                  {data?.role !== "admin" && (
                    <button
                      onClick={() => handleMakeAdmin(data?._id)}
                      className="btn btn-xs bg-[#0FCFEC] hover:text-white text-black border-none"
                    >
                      Make Admin
                    </button>
                  )}
                </td>
                <td>
                  <button className="btn btn-xs btn-error hover:text-white text-black border-none">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
