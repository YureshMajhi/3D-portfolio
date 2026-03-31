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
        },
      );
    });
  }, []);
  return (
    <section id="work" className="app-showcase text-white" ref={sectionRef}>
      <div className="w-full">
        <div className="showcaselayout">
          {/* left */}
          <a
            href="https://yuresh-social.vercel.app/"
            target="_blank"
            className="first-project-wrapper relative cursor-pointer z-10"
            ref={project1Ref}
          >
            <div className="image-wrapper">
              <img src="/images/eapp1.png" alt="ecommerce app" />
            </div>
            <div className="text-content">
              <h2>A Modern Social Media App for Connecting, Sharing, and Messaging</h2>
              <p className="text-white-50 md:text-xl">Built with Next.js & Firebase.</p>
            </div>
          </a>

          {/* right */}
          <a
            href="https://movie-streaming-platform.vercel.app/"
            target="_blank"
            className="project-list-wrapper overflow-hidden block relative z-50"
            ref={project2Ref}
          >
            <div className="project">
              <div className="image-wrapper bg-[#ffefdb]">
                <img src="/images/mapp.png" alt="Movie App" />
              </div>
              <h2>
                Unlimited Movies, Seamlessly Streamed with a Powerful, User-Friendly App.
              </h2>
            </div>
          </a>
          {/* <div className="project-list-wrapper overflow-hidden" ref={project3Ref}>
            <div className="project">
              <div className="image-wrapper bg-[#ffe7eb]">
                <img src="/images/shoes.jpg" alt="YC Directory" />
              </div>
              <h2>
                Step Into Style with a Smooth, User-Friendly App Made Just for Shoe Lovers
              </h2>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
