import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(() => {
    const projects = [project1Ref.current, project2Ref.current, project3Ref.current];

    projects.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom -= 100",
          },
        }
      );
    });
  }, []);
  return (
    <section id="work" className="app-showcase text-white" ref={sectionRef}>
      <div className="w-full">
        <div className="showcaselayout">
          {/* left */}
          <div className="first-project-wrapper" ref={project1Ref}>
            <div className="image-wrapper">
              <img src="/images/daraz.jpg" alt="Ride" />
            </div>
            <div className="text-content">
              <h2>
                Online Shopping Made Simple with a Powerful, User-Friendly App called
                Daraz
              </h2>
              <p className="text-white-50 md:text-xl">
                An app built with React Native, Expo, & Tailwindcss for a fast,
                user-friendly experience.
              </p>
            </div>
          </div>

          {/* right */}
          <div className="project-list-wrapper overflow-hidden" ref={project2Ref}>
            <div className="project">
              <div className="image-wrapper bg-[#ffefdb]">
                <img src="/images/indrive.jpg" alt="Library Management" />
              </div>
              <h2>
                On-Demand Rides Made Simple with a Powerful, User-Friendly App calles Ride
              </h2>
            </div>
          </div>
          <div className="project-list-wrapper overflow-hidden" ref={project3Ref}>
            <div className="project">
              <div className="image-wrapper bg-[#ffe7eb]">
                <img src="/images/shoes.jpg" alt="YC Directory" />
              </div>
              <h2>
                Step Into Style with a Smooth, User-Friendly App Made Just for Shoe Lovers
              </h2>
            </div>
          </div>
        </div>
      </div>{" "}
    </section>
  );
};

export default ShowcaseSection;
