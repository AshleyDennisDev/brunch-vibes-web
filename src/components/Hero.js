import React from "react";
import "../Hero.css";

export default function Hero() {
  return (
    <div class="hero">
      <div class="hero-image">
        <h1>What's your Brunch Vibe?</h1>
        <div class="hero-text">
          <a href="#partyVibe">Party Vibe</a>
          <a href="#chillVibe">Chill Vibe</a>
          <a href="#chicVibe">Chic Vibe</a>
        </div>
      </div>
    </div>
  );
}
