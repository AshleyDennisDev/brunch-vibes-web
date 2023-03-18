import React from "react";
import { Link } from "react-router-dom";
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
            <Link className="hero__anchor" to='/party' href="#partyVibe">
              Party Vibe
            </Link>
          </button>
          <button className="hero__btn">
            <Link className="hero__anchor"to='/chill' href="#chillVibe">
              Chill Vibe
            </Link>
          </button>
          <button className="hero__btn">
            <Link className="hero__anchor" to='/chic' href="#chicVibe">
              Chic Vibe
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
