import react, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const Read = () => {
  const [user, setUser] = useState(null);
  const {id} = useParams();
  const navigate = useNavigate();


  useEffect(() => {
    axios
      .get("http://localhost:3001/users/" + id) 
      .then((res) => {
        setUser(res.data); 
      })
      .catch((err) => console.log(err));
  }, [id]);

   if (!user) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  

  return (
       <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6 text-center">
        User Details
      </h2>

      <div className="space-y-3">
        <p>
          <span className="font-semibold">ID:</span> {user.id}
        </p>
        <p>
          <span className="font-semibold">Name:</span> {user.name}
        </p>
        <p>
          <span className="font-semibold">Email:</span> {user.email}
        </p>
      </div>

      <button
        onClick={() => navigate("/")}
        className="mt-6 w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Back to Users
      </button>
      <button
        onClick={() => navigate(`/update/${user.id}`)}
        className="mt-6 w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Update User
      </button>
    </div>
  );
}

export default Read;
