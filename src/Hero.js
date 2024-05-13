import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faPause } from "@fortawesome/free-solid-svg-icons";

const Hero = ({
  heroData,
  setHeroCount,
  heroCount,
  setPlayStatus,
  playStatus,
}) => {
  return (
    <div className="hero-content">
      <div className="hero-content-text">
        <h2>{heroData.text1}</h2>
        <h2>{heroData.text2}</h2>
      </div>
      <div className="hero-content-explore">
        <p>Explore the Features</p>
        <span>
          <FontAwesomeIcon icon={faArrowRight} />
        </span>
      </div>
      <div className="hero-dot-play">
        <ul className="hero-dots">
          <li
            onClick={() => setHeroCount(0)}
            className={heroCount === 0 ? "hero-dot-orange" : "hero-dot"}
          ></li>
          <li
            onClick={() => setHeroCount(1)}
            className={heroCount === 1 ? "hero-dot-orange" : "hero-dot"}
          ></li>
          <li
            onClick={() => setHeroCount(2)}
            className={heroCount === 2 ? "hero-dot-orange" : "hero-dot"}
          ></li>
        </ul>
        <div className="hero-play">
          <button onClick={() => setPlayStatus(!playStatus)}>
            {playStatus ? (
              <FontAwesomeIcon icon={faPause} />
            ) : (
              <FontAwesomeIcon icon={faPlay} />
            )}
          </button>
          <p>See the video</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
