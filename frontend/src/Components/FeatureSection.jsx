import "./FeatureSection.css";
import {Button2} from "./Button";

const Card = ({ title, text, className }) => {
  return (
    <div className="feature-card">
      <div className={`feature-icon-wrap ${className}`}></div>
      <h3 className="feature-card-title">{title}</h3>
      <p className="feature-card-text">{text}</p>
    </div>
  );
};

function FeatureSection() {
  return (
    <section className="features-section">
      <div className="features-header">
        <Button2 name="Features" className={`mx-auto my-4 md:my-8`} />
        <p className="text-3xl my-1 md:text-5xl">Feature packed to make </p>
        <p className="text-2xl text-violet-400 mb-4 md:text-4xl">
        
          Digital marketing easier and affordable.
        </p>

        <p className="features-subtitle">
          Experience intelligent features to optimize your marketing efforts.
        </p>
      </div>

    
      <div className="features-container">

        <Card
          className={`icon-audience`}
          title="Reach Target Audience"
          text="Pinpoint the perfect audience with precision using our AI-driven targeting."
        />

        <Card
          className={`icon-easier`}
          title="Marketing Made Easier"
          text="Simplify campaign management with automated workflows that let you focus on creativity."
        />

        <Card
          className={`icon-insights`}
          title="Smart Marketing Insights"
          text="Unlock actionable data to guide every decision and stay ahead of the competition."
        />

        <Card
          className={`icon-agents`}
          title="Intelligent Agents to Optimize Your Reach"
          text="Scale your marketing efforts with AI-driven tools and real-time performance tracking."
        />
      </div>
    </section>
  );
}

export default FeatureSection;
