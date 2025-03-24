import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGauge } from "@fortawesome/free-solid-svg-icons";
import { faHandPointLeft } from "@fortawesome/free-solid-svg-icons";
import { faBullseye } from "@fortawesome/free-solid-svg-icons/faBullseye";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";
import {Button,Button2} from "./Button";

const Component = ({ icon, title, text }) => {
    return (
  <div className="border-2 border-t border-b border-blue-200 flex flex-col items-center justify-center">
    <FontAwesomeIcon icon={icon} size="3x" color="lightblue" className={`my-2`} />
    <p className="my-1">{title}</p>
    <p className="text-gray-300 text-center justify-center pb-2">{text}</p>
  </div>
    )
};
const CardComponent = () => {
  return (
    
    <>
      <div className="flex flex-col justify-center align-center text-center mx-auto">
        <Button2 name="Services" className={`mx-auto my-4`} />
        <p className="text-3xl my-1 md:text-5xl">Innovative Services</p>
        <p className="text-2xl text-violet-400 mb-4 md:text-4xl">for Growth</p>
      </div>

      <div className="grid grid-cols-1 gap-6 mx-12 my-8 mb-8 md:grid-rows-2 md:grid-cols-3">
        <Component
          icon={faBullseye}
          title="Smart AD Targeting"
          text="AI-powered audience segmentation ensures your ads reach the right people, delivering higher ROI and maximum conversion rates."
        />

        <Component
          icon={faGauge}
          title="Performance Analytics"
          text=" Access real-time insights and track key metrics across all campaigns in one unified dashboard to quickly refine your strategies."
        />

        <Component
          icon={faNewspaper}
          title="SEO Automation"
          text="Automate keyword research and content optimization suggestions to improve your search engine rankings with less effort."
        />

        <Component
          icon={faGlobe}
          title="Social Media Marketing"
          text=" AI agents craft personalized content, schedule posts, monitor engagement, and refine strategies in real time for maximum impact across all major social platforms."
        />

        <Component
          icon={faHandPointLeft}
          title="Conversion Automation"
          text="AI-driven A/B testing and automated tweaks to landing pages and funnels help you consistently improve conversion rates."
        />

        <Component
          icon={faVolumeHigh}
          title="Campaign Automation"
          text="Centralize and streamline your ad management. Our intelligent engine automatically adjusts bids, budgets, and targeting to maximize results."
        />
      </div>

      <Button2 name="Contact Us" 
      className={`mx-auto my-4 flex align-center border-blue-200 md:my-8`} />

    </>
  );
};

export default CardComponent;
