import React from "react";
import "./AstroMain.css";
import { useNavigate } from "react-router-dom";

const MarriageConsultation = () => {
  const navigate = useNavigate();
  const head = "Marriage Consultation";
  const img = "src/components/Astrology/images/Marriage Consultation.png";
  return (
    <>
      <div className="Container">
        <div className="Container-heading">
          <h1>Marriage Consultation</h1>
        </div>
        <div className="conten">
          <div className="conten-left">
            <div className="img-mc"></div>
            <button onClick={() => navigate("/Done", { state: { head, img } })}>
              Book Now
            </button>
          </div>
          <div className="conten-right">
            <p>
              Marriage consultation involves professional guidance and support
              provided to couples seeking to enhance their relationship or
              resolve conflicts. Through open communication and empathetic
              listening, consultants help identify underlying issues, improve
              understanding, and develop effective communication and conflict
              resolution skills. They may offer techniques for managing stress,
              rebuilding trust, and fostering intimacy. Marriage consultants
              create a safe and supportive environment for couples to express
              themselves freely, explore emotions, and work collaboratively
              towards strengthening their bond. Ultimately, marriage
              consultation aims to promote healthier, happier relationships by
              equipping couples with the tools and insights needed to navigate
              challenges and cultivate a fulfilling partnership.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MarriageConsultation;
