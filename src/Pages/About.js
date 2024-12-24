import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import Work from "../Components/Work";
import { personalDetails, workDetails, eduDetails } from "../Details";

function About() {
  const titleRef = useRef();
  const sectionRefs = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "Power3.easeOut" } });
    tl.from(titleRef.current, {
      opacity: 0,
      y: -50,
      duration: 1,
    }).from(
      sectionRefs.current,
      {
        opacity: 0,
        y: 50,
        stagger: 0.3,
        duration: 1,
      },
      "<0.5"
    );
  }, []);

  return (
    <main className="container mx-auto max-width pt-10 pb-20 px-6">
      <section>
        <h1
          ref={titleRef}
          className="text-4xl text-dark-heading font-bold md:text-5xl xl:text-6xl xl:leading-tight"
        >
          About Me
        </h1>
        <p className="text-content py-8 lg:max-w-3xl leading-relaxed">
          {personalDetails.about}
        </p>
      </section>

      <section>
        <h2
          className="text-3xl text-dark-heading font-bold md:text-4xl xl:text-5xl xl:leading-tight"
        >
          Work Experience
        </h2>
        <div className="space-y-8 mt-6">
          {React.Children.toArray(
            workDetails.map(
              (
                { Position, Company, Location, Type, Duration, Exprince, ExprinceDetails },
                index
              ) => (
                <div
                  ref={(el) => (sectionRefs.current[index] = el)}
                  className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <Work
                    position={Position}
                    company={Company}
                    location={Location}
                    type={Type}
                    duration={Duration}
                    exprince={Exprince}
                    details={ExprinceDetails}
                  />
                </div>
              )
            )
          )}
        </div>
      </section>

      <section className="pt-10">
        <h2 className="text-3xl text-dark-heading font-bold md:text-4xl xl:text-5xl xl:leading-tight">
          Education
        </h2>
        <div className="space-y-8 mt-6">
          {React.Children.toArray(
            eduDetails.map(
              ({ Position, Company, Location, Type, Duration }, index) => (
                <div
                  ref={(el) => (sectionRefs.current[workDetails.length + index] = el)}
                  className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <Work
                    position={Position}
                    company={Company}
                    location={Location}
                    type={Type}
                    duration={Duration}
                  />
                </div>
              )
            )
          )}
        </div>
      </section>
    </main>
  );
}

export default About;
