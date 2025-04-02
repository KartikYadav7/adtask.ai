import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { Button} from "./Button";
import { Link } from "react-router-dom";
const Screen = () => {
  return (
    <>
      <div className=" relative flex flex-col items-center justify-center ">
        <p className=" border rounded-xl py-1 px-4  my-4 text-[12px] md:my-16 md:text-xl md:p-2  ">
          TRANFORM YOUR DIGITAL EXPERIENCE WITH AI AGENTS
        </p>

        <p className="text-7xl ">adTask.ai </p>

        <p className="py-8 w-3/4 justify-center text-center mx-auto md:w-1/2">
          Stop struggling with marketing decisions. Our AI assistant analyzes
          your business, creates personalized strategies, and helps you execute
          them - all in real-time.
        </p>
      <Link to="/freeTrial">
        <Button name="Start Free Trial"
         /></Link>

         <p className="text-sm my-4">Try AdTask AI free for 30 days</p>
      </div>
      <div className="h-60 w-fit px-4 mx-auto border border-gray-600 rounded-lg mb-16 flex items-center justify-center 
      md:h-96 md:w-1/2 md:px-0">
        <p className="text-7xl mx-auto text-gray-500 text-center justify-center content-center">
          AdTask.ai
        </p>
        <FontAwesomeIcon
          icon={faYoutube}
          size="4x" 
          color="red"
          className="absolute top-64% "

        />
      </div>
    </>
  );
};

export default Screen;
