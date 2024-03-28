import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function App() {
  const [columns, setColumns] = useState([]);
  const [records, setRecords] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios.get("http://localhost:3000/users").then((res) => {
      setColumns(Object.keys(res.data[0]));
      setRecords(res.data);
    });
  });
  return (
    <div className="container  mt-5 flex flex-col p-10">
      <div className="text-end">
        <Link
          to="/create"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add +
        </Link>
      </div>
      <table className="table-auto border-spacing-0	">
        <thead>
          <tr>
            {columns.map((c, i) => (
              <th key={i}>{(c=="id")?"ID":c}</th>
            ))}
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {records.map((d, i) => (
            <tr key={i} className="border-y	 ">
              <td className="px-4 py-4 ">{d.Name}</td>
              <td className="px-4 py-4 ">{d.Email}</td>
              <td className="px-4 py-4 ">{d.id}</td>

              <td>
                <Link className="mr-6 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" to={`/update/${d.id}`}>
                  Update
                </Link>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => handelDelete(d.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  function handelDelete(id) {
    const conf = window.confirm("Do you want to delete this item");
    if (conf) {
      axios.delete("http://localhost:3000/users/" + id)
        .then((res) => {
          alert("Item has deleted");
          navigate("/");
          
        })
        .catch((err) => console.log(err));
    }
  }
}

export default App;
