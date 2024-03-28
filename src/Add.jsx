import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const [inputData, setInputData] = useState({ Name: "",Email: "" });
  const navigate=useNavigate();
  function handelSubmit(e) {
    e.preventDefault();
    axios.post("http://localhost:3000/users", inputData).then((res) => {
      alert("The data added successfully");
      navigate('/');
    }).catch(err=>console.log("error"+err));
  }
  return (
    <div className=" flex max-w-full	 h-screen	 justify-center items-center	 justify-items-center	">
      <div className="w-1/2	border bg-slate-50	p-5">
        <form onSubmit={handelSubmit}>
          <div >
            
            <label htmlFor="name" className="text-sm font-medium text-slate-700 ">Name</label>
            <input
              type="text"
              name="name"
              className="mt-1 inline w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 mb-4"
              onChange={(e) =>
                setInputData({ ...inputData, Name: e.target.value })
              }
            />
          </div>
          <div className="">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
              disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
              invalid:border-pink-500 invalid:text-pink-600
              focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
              onChange={(e) =>
                setInputData({ ...inputData, Email: e.target.value })
              }
              required
            />
          </div>
          <br />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Add;
