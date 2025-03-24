import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <>
      <hr className="text-amber-50  my-4" />

      <div className="flex  flex-col md:flex-row justify-evenly py-4 md:py-12">
        <div className="flex flex-col gap-1 text-gray-300 text-center md:text-left ">
          <p className="text-7xl">adTask.ai</p>
          <p>
            <FontAwesomeIcon icon={faEnvelope} color="lightblue" />
            <a href="" className="mx-2 ">
              contact@adtask.ai
            </a>
          </p>
          <p>
            <FontAwesomeIcon icon={faLocationDot} color="lightblue" />
            <span className="mx-2">San francisco Bay Area</span>
          </p>
        </div>

        <div className="flex  flex-col gap-1 items-center justify-center text-gray-400 my-4 md:my-0">
          <h1 className="text-2xl text-white">Utilities</h1>
          <h3>Home</h3>
          <h3>Products</h3>
          <h3>Tools</h3>
          <h3>Contact Us</h3>
        </div>
        <div className="flex  flex-col gap-1 items-center justify-center text-gray-400 my-4 md:my-0">
          <h1 className="text-2xl text-white">Socials</h1>
          <h3>X</h3>
          <h3>LinkdIn</h3>
          <h3>Instagram</h3>
          <h3>Facebook</h3>
        </div>
      </div>
      <p className="text-center m-4 text-gray-300">
        All Rights Reserved &copy; 2025 adTask
      </p>
    </>
  );
};

export default Footer;
