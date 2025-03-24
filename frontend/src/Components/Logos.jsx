import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faSalesforce } from "@fortawesome/free-brands-svg-icons";
import { faAmazon } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faMeta } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const Emoji = ({ icon }) => {
  return (
    <div className="h-fit w-fit p-6 border rounded-lg border-r-indigo-400">
      <FontAwesomeIcon icon={icon}
      //  size="2x" 
       className="text-blue-100 md:text-3xl" />
    </div>
  );
};

const Logos = () => {
  return (
    <>
      <div className=" flex overflow-x-hidden gap-4 justify-evenly  mx-4 my-8 mb-16">
        <FontAwesomeIcon icon={faGoogle} size="4x" color="gray" />
        <FontAwesomeIcon icon={faSalesforce} size="4x" color="gray" />
        <FontAwesomeIcon icon={faAmazon} size="4x" color="gray" />
        <FontAwesomeIcon icon={faFacebook} size="4x" color="gray" />
        <FontAwesomeIcon icon={faGoogle} size="4x" color="gray" />
        <FontAwesomeIcon icon={faAmazon} size="4x" color="gray" />
      </div>

      <p className="text-center">AdTask AI works with :</p>

      <div className="w-fit flex items-center justify-between md:w-3/4 mx-auto space-x-4 my-4 ">
        <Emoji icon={faTiktok} />
        <Emoji icon={faLinkedinIn} />
        <Emoji icon={faMeta} />
        <Emoji icon={faTwitter} />
        <Emoji icon={faAmazon} />
      </div>
    </>
  );
};

export default Logos;
