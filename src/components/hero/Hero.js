import React from "react";
import "./Hero.scss";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero__image">
        <div className="hero__header">
        <h2> What's your Brunch Vibe?</h2>
        </div>
        <div className="hero__text">
          <button className="hero__btn">
            <a className="hero__anchor" href="#partyVibe">
              Party Vibe
            </a>
          </button>
          <button className="hero__btn">
            <a className="hero__anchor" href="#chillVibe">
              Chill Vibe
            </a>
          </button>
          <button className="hero__btn">
            <a className="hero__anchor" href="#chicVibe">
              Chic Vibe
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
