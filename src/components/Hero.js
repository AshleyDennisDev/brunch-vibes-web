import React from "react";
import "../Hero.css";

export default function Hero() {
  return (
    <div class="hero">
      <div class="hero-image">
        <h1 class="h1">What's your Brunch Vibe?</h1>
        <div className="hero-text">
          <a className="anchor" href="#partyVibe">Party Vibe</a>
          <a className="anchor" href="#chillVibe">Chill Vibe</a>
          <a className="anchor" href="#chicVibe">Chic Vibe</a>
        </div>
      </div>
    </div>
  );
}
