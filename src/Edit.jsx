import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/users/" + id)
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  function handelSubmit(e) {
    e.preventDefault();
    axios
      .put("http://localhost:3000/users/" + id, data)
      .then((res) => {
        alert("Data update SuccessFully");
        navigate("/");
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className="flex max-w-full	 h-screen	 justify-center items-center	 justify-items-center">
      <div className="w-1/2	border bg-slate-50	p-5">
        <form onSubmit={handelSubmit}>
          <div>
            <label htmlFor="id">ID </label>
            <input
              type="text"
              name="id"
              disabled
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
              
              disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none mb-4
             "
              value={data.id}
            />
          </div>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              className="mt-1 inline w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 mb-4"
              value={data.Name}
              onChange={(e) => setData({ ...data, Name: e.target.value })}
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
              value={data.Email}
              onChange={(e) => setData({ ...data, Email: e.target.value })}
            />
          </div>
          <br />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Edit;
