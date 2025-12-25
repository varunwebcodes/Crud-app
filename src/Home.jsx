import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


const Home = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/users") 
      .then((res) => {
        setUsers(res.data); 
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this user?");
    if (confirmDelete) {
      axios.delete("http://localhost:3001/users/" + id)
      .then(res =>{
        location.reload();
      }).catch(err => console.log(err));
    }
  }

  return (
    <div className="overflow-x-auto p-6">
      <h1 className="font-bold text-3xl mb-2 text-center font-mono">
        List of Users
      </h1>
        <div className="flex justify-end">
            <button className="px-4 py-2 mb-3 bg-blue-500 text-white rounded font-semibold hover:bg-blue-600 ml-5">
                <Link to="/create" className="" >Add User</Link>
            </button>
        </div>
      <table className="min-w-full border border-gray-200 rounded-lg">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-3 border-b">ID</th>
            <th className="px-6 py-3 border-b">Name</th>
            <th className="px-6 py-3 border-b">Email</th>
            <th className="px-6 py-3 border-b">Action</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 border-b">{user.id}</td>
              <td className="px-6 py-4 border-b">{user.name}</td>
              <td className="px-6 py-4 border-b">{user.email}</td>
              <td className="px-6 py-4 border-b text-center">
                 <button
                  className="px-4 py-2 bg-blue-400 text-white rounded hover:bg-blue-500"
                  onClick={() => navigate(`/read/${user.id}`)}
                >
                  View
                </button>
                <button
                  className="px-4 py-2 bg-red-500 text-white rounded ml-5 hover:bg-red-600"
                   onClick={() => handleDelete(user.id)}
                >
                  Delete
                </button>
                <button
                  className="px-4 py-2 bg-green-500 ml-5 text-white rounded hover:bg-green-600"
                   onClick={() => navigate(`/update/${user.id}`)}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
