import React from "react";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast"
import Swal from 'sweetalert2'

const ManageDocctors = () => {
  const {
    isLoading,
    error,
    refetch,
    data = [],
  } = useQuery({
    queryKey: ["doctors"],
    queryFn: () =>
      fetch("http://localhost:5000/doctors").then((res) => res.json()),
  });
  console.log(data);

  if (isLoading) return "Loading...";

  const handleDeleteDoctor=id=>{
    
    Swal.fire({
        title: 'Are you sure?',
        text: "You wont to delete doctor?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
            fetch(`http://localhost:5000/doctors/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          Swal.fire(
            'Deleted!',
            'Doctor has been deleted.',
            'success'
          )
          refetch()
        });
        }
      })



    
  }



  return (
    <div className="md:p-6 p-2">
      <div className="text-3xl font-bold text-left md:my-6 ">
        <h1 className="font-serif">
          Manage Doctors : <span>{data?.length}</span>
        </h1>
      </div>
      {
        data.length > 0 ? <div className="overflow-x-auto w-full shadow-xl rounded-lg">
        <table className="table w-full rounded-md">
          {/*  <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>AVATAR</th>
              <th>NAME</th>
              <th>SPECIALITY</th>
              <th>ACTION</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data?.map((doctor,i) => (
              <tr key={doctor._id}>
                <th>{i+1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={doctor.image}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                {doctor.name}
                </td>
                <td>{doctor.specialty}</td>
                <th>
                  <button onClick={()=>handleDeleteDoctor(doctor._id)} className="btn bg-red-700 border-none">Delete</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div> : <div className="text-4xl font-mono font-bold text-red-600">No Doctor Available</div>
      }
    </div>
  );
};

export default ManageDocctors;
