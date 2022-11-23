import React, { useContext} from "react";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { user } = useContext(AuthContext);

    const { data = [] } = useQuery({
    queryKey: ["bookings",user?.email],
    queryFn: async () => {
     const res= await fetch(`https://doctors-portal-server-seven-xi.vercel.app/bookings?email=${user?.email}`,{
      headers :{
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
     });
     const data= await res.json();
      return data
    },
  });
  console.log(data);


  return (
    <section className="mt-[50px] px-3 md:px-8">
      <div className="flex justify-between mb-5">
        <h1 className="text-2xl font-serif">My Appointment</h1>
        <div>Date</div>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>SERVICE</th>
              <th>TIME</th>
              <th>Payment</th>

            </tr>
          </thead>
          <tbody>
            {data?.map((data, i) => (
              <tr key={data?._id} className="hover">
                <th>{i + 1}</th>
                <td>{data.patientName}</td>
                <td>{data.name}</td>
                <td>{data.slot}</td>
                <td>{
                  data.price && !data.paid && <Link to={`/dashboard/payment/${data._id}`}><button className="btn border-none bg-[#19D3AE] btn-sm">Pay</button></Link>

                  
                  
                  }
                  
                  {
                    data.price && data.paid && <span className="text-green-500">Paid</span>
                  }
                  </td>
                
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Dashboard;
