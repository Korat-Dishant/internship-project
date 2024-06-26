import React from "react";
import "./AstroMain.css";
import { useNavigate } from "react-router-dom";
import image from './images/Remedies & Solutions.png';
function RemediesSolution() {
  const navigate = useNavigate();
  const head = "Remedies Solution";
  const img = image;
  return (
    <div>
      <div className="Container">
        <div className="Container-heading">
          <h1>Remedies Solution</h1>
        </div>
        <div className="conten">
          <div className="conten-left">
            <div className="img-rs"></div>
            <button onClick={() => navigate("/Done", { state: { head, img } })}>
              Book Now
            </button>
          </div>
          <div className="conten-right">
            <p>
            Divine Connection's Remedies are solutions or actions taken to address problems,
              resolve conflicts, or alleviate difficulties encountered in
              various situations. They can range from simple fixes to complex
              interventions tailored to specific issues.
              <br /><br />
              In legal contexts,
              remedies refer to measures taken to rectify breaches of contract
              or infringements of rights, such as compensation or injunctive
              relief. In healthcare, remedies may include medications,
              therapies, or lifestyle changes to treat illnesses or promote
              well-being.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RemediesSolution;