import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { personalDetails } from "../Details";

function Home() {
  const { img } = personalDetails;
  const h11 = useRef();
  const h12 = useRef();
  const h13 = useRef();
  const a1 = useRef();
  const myimageref = useRef();

  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(h11.current, {
      x: "-100%",
      opacity: 0,
      duration: 1.2,
      ease: "Power3.easeOut",
    })
      .from(
        h12.current,
        {
          x: "-100%",
          opacity: 0,
          duration: 1.2,
          ease: "Power3.easeOut",
        },
        "<0.3"
      )
      .from(
        h13.current,
        {
          x: "-100%",
          opacity: 0,
          duration: 1.2,
          ease: "Power3.easeOut",
        },
        "<0.3"
      )
      .from(
        myimageref.current,
        {
          x: "100%",
          opacity: 0,
          duration: 1.5,
          ease: "Power3.easeOut",
        },
        "<0.3"
      )
      .from(
        a1.current,
        {
          y: "50px",
          opacity: 0,
          duration: 1.5,
          ease: "Power3.easeOut",
        },
        "<0.3"
      );
  }, []);

  return (
    <main className="container mx-auto px-6 py-12 max-width md:flex justify-between items-center space-y-8 md:space-y-0">
      {/* Text Content */}
      <div className="md:w-1/2 space-y-6">
        <h1
          ref={h11}
          className="text-3xl text-gray-800 md:text-5xl font-extrabold leading-tight"
        >
          Hey! 👋
        </h1>
        <h1
          ref={h12}
          className="text-3xl bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 text-transparent md:text-5xl font-extrabold leading-tight"
        >
          Biswajit Deori
        </h1>
        <h2
          ref={h13}
          className="text-xl text-gray-600 md:text-3xl font-semibold"
        >
          Full Stack Developer
        </h2>
        <div className="mt-4">
          <a
            ref={a1}
            href="https://drive.google.com/file/d/1xweFSZOJ8WI8oL84GVzJjh9auX4zQaDg/view?usp=sharing"
            className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white text-lg px-6 py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-gradient-to-l"
            target="_blank"
            rel="noopener noreferrer"
          >
            Show Resume
          </a>
        </div>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center md:justify-end">
        <img
          ref={myimageref}
          className="w-3/4 md:w-2/3 rounded-lg shadow-lg  transform hover:scale-105 hover:shadow-2xl hover:rotate-3 hover:opacity-90"
          src={img}
          alt="Profile of Biswajit Deori"
        />
      </div>
    </main>
  );
}

export default Home;
