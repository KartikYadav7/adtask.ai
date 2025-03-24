import { useState , useEffect} from "react";
import { Button } from '../Components/Button'
import axios from 'axios';
import {useAuth } from "../../context/AuthContext";

const FreeTrial = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading,setLoading] =useState('');
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const {user}=useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(false);
    setLoading(true);
    try {
      await axios.post(`${BACKEND_URL}/freeTrial`,{
        email,
      },  { headers: {Authorization:user.token} })
      setSubmitted(true);
    } catch (err) {
      console.error(err)
      setError(err.response?.data?.message || "Error, Please Try Again ")
    }finally {
      setLoading(false); 
    }
   
  };
  useEffect(() => {
    if (user &&  user.userEmail) {
      setEmail(user.userEmail);
    }
  }, [user]);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className=" text-center space-y-12 text-xl">
      <section className="space-y-4">
        <h1 className="text-5xl mt-10">Start Your Free Trial</h1>
        <p className="">Experience all premium features for 14 days—no credit card required.</p>
        {!submitted ? (

          <form onSubmit={handleSubmit} className="space-x-4">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleChange}
              required
              autoFocus
              
              className="Border p-2 rounded-xl"
            />
              {loading ? (
              <span className="animate-spin border-4 border-gray-300 border-t-gray-800 rounded-full w-6 h-6 inline-block"></span>
            ) : (
              <Button type="submit" name="Get Started" disabled={loading} />
            )}

            <p className="text-sm h-2.5 my-4">{error}</p>
          </form>

        ) : (
          <div className="">
            <h2>Thank you!</h2>
            <p>Please check your inbox for next steps.</p>
          </div>
        )}
      </section>

      <section className="">
        <h2>Why Try Our Product?</h2>
        <ul>
          <li>Unlock all premium features free for 14 days</li>
          <li>No commitment or credit card required</li>
          <li>Cancel anytime</li>
          <li>24/7 customer support</li>
        </ul>
      </section>
    </div>
  );
};

export default FreeTrial;
