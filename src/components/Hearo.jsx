import React from "react";
import HeroImage from "../assets/2.png";

function Hero() {
  return (
    <section id="home" className="hearo">
      <div className="container hearo-container">
        <div className="content">
          <h2 className="title">Mohamed Gaber</h2>
          <p className="hearo-description">FrontEnd React Developer</p>
          <div className="btns">
            <button className="btn resume">
              <a href="https://drive.google.com/file/d/1im4wMaNFnmpbJDQ69NjJfw6Wnz-_QSWe/view?usp=sharing">View My Resume</a>
            </button>
            <button className="btn contact">
              <a href="#contact">Contact Me</a>
            </button>
            <button className="btn arrow">
              <a href="#about">&#8595;</a>
            </button>
          </div>
        </div>
        <div className="img-container">
          <img
            src={HeroImage}
            alt="Mohamed Gaber - Frontend Developer"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}

export default React.memo(Hero);

