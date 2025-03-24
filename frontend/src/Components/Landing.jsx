import { Button, Button2 } from "./Button";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import {Link} from 'react-router-dom'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

const ContactCard = ({ icon, className, text }) => {
  return (
    <p className={`my-1 ${className}`}>
      <FontAwesomeIcon icon={icon} color="lightblue" />
      <a href="" className="mx-2 ">
        {text}
      </a>
    </p>
  );
};



const Landing = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading,setLoading] =useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsSuccess(false);
    setLoading(true);
    try {
      await axios.post(`${BACKEND_URL}/formData`, {
        name,
        email,
        message,
      });
      setIsSuccess(true);
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    }
  };
  return ( <>
      <Button2
        name="Contact Us"
        className=" mx-auto flex justify-center align-center my-4 md:my-8"
      />

      <div className="flex text-center justify-center flex-col md:justify-evenly my-12 md:flex-row md:text-left">

        <div className="flex flex-col ">

          <p className="text-3xl md:text-5xl">Ask Whatever you have </p>
          <span className="text-2xl text-violet-400 mb-4 md:text-4xl">
            in your mind now
          </span>
          <p>Whether you have questions or are ready to discuss your </p>
          <span>business, we&apos;re here to help. Reach out today</span>

          <ContactCard
            icon={faEnvelope}
            text="contact@adtask.ai"
            className={`mt-2 md:mt-8`}
          />

          <ContactCard icon={faPhone} text="(969)819-1234" />

          <ContactCard icon={faLocationDot} text="San francisco Bay Area" />
        </div>


        <div className="  text-white">
{!isSuccess?(<form
            onSubmit={handleSubmit}
            className="flex flex-col gap-2 text-left m-4">
            Name * <input type="text" className="border" name="name"
              required
              onChange={(e) => { setName(e.target.value) }} />
            Email * <input type="email" name="email" id="" className="border"
            required
              onChange={(e) => { setEmail(e.target.value) }} />
            Message *{" "}
            <textarea
              name="message"
              id=""
              cols="30"
              rows="5"
              className="border"
              required
              onChange={(e) => { setMessage(e.target.value) }}
            ></textarea>
            <p className=" h-2.5 text-base">{error}</p>
            {loading ? (
              <span className="animate-spin border-4 border-gray-300 border-t-gray-800 rounded-full w-6 h-6 mx-auto"></span>
            ) : (
            <Button
              name="Submit"
              type="submit"
              disabled ={loading}
              className={` mx-auto my-2`}
            />)}
          </form>):(
            <div className="text-xl space-y-2 mt-20">
              <p>Thank You</p>
              <p>We will contact you shortly</p>
            </div>
          )}
          
        </div>

</div>



        <div className=" relative flex flex-col items-center justify-center">
          <p className="text-7xl text-gray-600 my-8 md:my-16 md:text-9xl">adTask.ai</p>
          <p className="text-3xl md:text-5xl">Are you ready to boost </p>
          <p className="text-3xl text-violet-400 md:text-5xl">your Digital Presence?</p>

         <Link to ="/freeTrial"> <Button name="Start Free Trial" className={`my-4  md:my-8`} /></Link>
     <Link to="/ScheduleCall"> <Button name="Schedule a Call" className={`my-4  md:my-8`} /></Link>
        </div>
</>
      );
};
      
export default Landing;
