import React ,{ useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const Update = () => {

  const [user, setUser] = useState([]);
  const {id} = useParams();
  const navigate = useNavigate();

   const [value, setValue] = useState({
    name:"",
    email:"",

  });

  useEffect(() => {
    axios
      .get("http://localhost:3001/users/" + id) 
      .then(res => {
        setValue(res.data)
      })
      .catch((err) => console.log(err));
  }, [id]);

   if (!user) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  const handleUpdate = (e)=>{
    e.preventDefault();
     axios
      .put("http://localhost:3001/users/" + id, value) 
      .then(res => {
        console.log(res);
        navigate('/') 
      })
      .catch(err => console.log(err));
}

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-md mx-auto mt-12 bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold text-center mb-6">Update User</h2>
        <form className="space-y-4" onSubmit={handleUpdate}>
          {/* ID (readonly) */}
          <div>
            <label className="block text-sm font-medium mb-1">User ID</label>
            <input
              type="text"
              defaultValue={value.id}
              readOnly
              className="w-full px-3 py-2 border rounded bg-gray-100 cursor-not-allowed"
            />
          </div>
          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              defaultValue={value.name}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter name"
              onChange={e=>setValue({...value,name:e.target.value})}
            />
          </div>
          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              defaultValue={value.email}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter email"
               onChange={e=>setValue({...value,email:e.target.value})}
            />
          </div>
          {/* Buttons */}
          <div className="flex gap-3 pt-4">
            <button
              type="submit"
              className="w-full py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
            >
              Update User
            </button>
            <button
              type="button"
              className="w-full py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};


export default Update;
