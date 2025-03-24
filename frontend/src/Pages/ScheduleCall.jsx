import { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button } from "../Components/Button";
import { useAuth } from '../../context/AuthContext'

const ScheduleCall = () => {
  const [formData, setFormData] = useState({
    name: "",
    // email: "",
    callDate: "",
    callTime: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('')
  const[loading,setLoading] =useState(false);
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const {user}=useAuth();

    const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSubmitted(false);
    setLoading(true);
    try {
      await axios.post(`${BACKEND_URL}/scheduleCall`, formData, 
        {headers:{Authorization:user.token}});
      setSubmitted(true);
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    }finally{
      setLoading(false)
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    if (user?.userName) {
      setFormData(prevData => ({ ...prevData, name: user.userName }));
    }
  }, [user]);
  return (
    <div className="">

      {submitted ? (
        <div className="text-center space-y-2 mt-40">
          <h2 className="text-5xl">Thank you!!</h2>
          <p className="text-2xl">Your call has been scheduled. We&apos;ll get in touch soon.</p>
          <Link to="/"
            className="underline hover:font-semibold "> Back to Home</Link>
        </div>
      ) : (
        <div>
          <h1 className="text-5xl text-center my-4 mt-20">Schedule Call</h1>
          <form onSubmit={handleSubmit}
            className="border border-gray-400 rounded-xl flex flex-col p-4 w-72 mx-auto">

            Name
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="p-2 rounded-xl my-2 mb-4 border"
              required
              autoFocus
            />
            
            Date
            <input
              type="date"
              id="callDate"
              name="callDate"
              value={formData.callDate}
              onChange={handleChange}
              required
              className="p-2 rounded-xl my-2 mb-4 border"
            />
            Time
            <input
              type="time"
              id="callTime"
              name="callTime"
              value={formData.callTime}
              onChange={handleChange}
              className="p-2 rounded-xl my-2 mb-4 border"
              required
            />

            <p className="mb-2 text-sm h-2.5">{error}</p>
            {loading ? (
              <span className="animate-spin border-4 border-gray-300 border-t-gray-800 rounded-full w-6 h-6 mx-auto"></span>
            ) : (
            <Button type="submit"
              name="Schedule Call"
              disabled ={loading} />
            )}
          </form>
        </div>
      )
      }
    </div>
  );
};

export default ScheduleCall;
