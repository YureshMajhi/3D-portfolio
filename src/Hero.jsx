import React from "react";
import { words } from "./constants";
import HeroExperience from "./components/HeroModals/HeroExperience";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, stagger: 0.2, duration: 1, ease: "back.in" }
    );
    gsap.fromTo(
      ".info-text",
      {
        opacity: 0,
        x: -500,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "back.in",
      }
    );
  });
  return (
    <section id="hero" className="relative overflow-hidden text-white">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="background" />
      </div>

      <div className="hero-layout">
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Shaping{" "}
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, i) => (
                      <span key={i} className="flex items-center md:gap-3 gap-1 pb-2">
                        <img
                          src={word.imgPath}
                          alt={word.text}
                          className="xl:size-16 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Real Projects</h1>
              <h1>One Hustle at a Time</h1>
            </div>
            <p className="info-text text-white-50 md:text-xl relative z-10 pointer-events-none">
              Hi, I'm Yuresh, a developer based in Nepal with a passion for code.
            </p>
          </div>
        </header>

        <figure>
          <div className="hero-3d-layout">
            <HeroExperience />
          </div>
        </figure>
      </div>
    </section>
  );
};

export default Hero;
