import React from "react";
import { words } from "./constants";
import HeroExperience from "./components/HeroModals/HeroExperience";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import AnimatedCounter from "./components/AnimatedCounter";

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
            <a
              class="info-text relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group max-w-[max-content]"
              onClick={(e) => {
                e.preventDefault();

                const target = document.getElementById("counter");

                if (target) {
                  const offset = window.innerHeight * 0.15;
                  const top =
                    target.getBoundingClientRect().top + window.scrollY - offset;

                  window.scrollTo({ top, behavior: "smooth" });
                }
              }}
            >
              <span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
              <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
              <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">
                View Work
              </span>
              <span class="absolute inset-0 border-2 border-white rounded-full"></span>
            </a>
          </div>
        </header>

        <figure>
          <div className="hero-3d-layout">
            <HeroExperience />
          </div>
        </figure>
      </div>

      <AnimatedCounter />
    </section>
  );
};

export default Hero;
