import React, { useState } from "react";
import "./support.css";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import Anxiety from "./Anxiety";
const Overthinking = () => {
  const navigate = useNavigate();
  const [options, setOption] = useState(false);
  const onButtonClicked = () => {
    console.log("clicked");
    setOption(true);
  };
  const head = "Overthinking";
  const img =
    "https://images.pexels.com/photos/313690/pexels-photo-313690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  return (
    <div className="Main-page">
      <div className="Container">
        <div className="Container-heading">
          <IoIosArrowBack
            onClick={() => navigate("/EmotionalSupport")}
            className="backicon"
          />
          <h1>Overthinking</h1>
        </div>
        <div className="content">
          <div className="content-left">
            <img
              src="https://images.pexels.com/photos/313690/pexels-photo-313690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <button onClick={() => navigate("/Done", { state: { head, img } })}>
              Book Now
            </button>
          </div>
          <div className="content-right">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
              facere atque temporibus? Ad, atque sapiente. Facilis assumenda,
              veritatis, vel tempora inventore porro eius cumque libero, beatae
              laboriosam quaerat. Quo officiis mollitia fugiat nemo amet,
              reiciendis nobis quidem eveniet ut numquam consectetur ea?
              Excepturi, mollitia aliquam. Neque obcaecati corrupti hic odit.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
              commodi. Mollitia quidem esse sit a commodi, inventore fugit,
              accusamus quis tenetur, deleniti incidunt optio assumenda?
              Incidunt enim nobis suscipit! Quibusdam!
            </p>
          </div>
        </div>
      </div>
      {/* {options && <Anxiety />} */}
    </div>
  );
};

export default Overthinking;