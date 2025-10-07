import React, {useContext} from "react";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";


import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import {illustration, greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import arbazz from "../../assets/images/newarb.jpeg"; // Assuming this is the correct path to the image

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {" "}
                {greeting.title}{" "}
                <span className="wave-emoji">{emoji("👋")}</span>
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {greeting.subTitle}
              </p>
              <div id="resume" className="empty-div"></div>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button text="Contact me" href="#contact" />
                {greeting.resumeLink && (
                  <a
                    href={("https://drive.google.com/file/d/12D_N9cAB1WsLNNaHlgjIAwwl1LOM_N9j/view?usp=drivesdk")}
                    download="Resume.pdf"
                    className="download-link-button"
                  >
                    <Button text="resume" />
                  </a>
                )}
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <img src={arbazz} />
          </div>
        </div>
      </div>
    </Fade>
  );
}
