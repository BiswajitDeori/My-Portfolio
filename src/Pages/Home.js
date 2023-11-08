import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { personalDetails } from "../Details";


function Home() {
  const {img } = personalDetails;
  const h11 = useRef();
  const h12 = useRef();
  const h13 = useRef();
  const a1 = useRef();
  const myimageref = useRef();
  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(
      h11.current,
      {
        x: "-100%",
        delay: 0.8,
        opacity: 0,
        duration: 2,
        ease: "Power3.easeOut",
      },
      "<"
    )
      .from(
        h12.current,
        {
          x: "-100%",
          delay: 0.5,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      )
      .from(
        h13.current,
        {
          x: "-100%",
          delay: 0.1,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      )
      .from(
        myimageref.current,
        {
          x: "200%",
          delay: 0.5,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      )
      .from(
        a1.current,
        {
          x: "200%",
          delay: 0.5,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      );
  }, []);

  return (
    <main className="container mx-auto max-width section md:flex justify-between items-center">
      <div>
      <h1
      ref={h11}
      className="text-2xl text-dark-heading dark:text-light-heading  md:text-4xl xl:text-5xl xl:leading-tight font-bold"
    >
    Hey! 👋
    </h1>
        <h1
          ref={h12}
          className="text-2xl bg-clip-text bg-gradient text-transparent md:text-4xl xl:text-5xl xl:leading-tight font-bold"
        >
         Biswajit Deori
        </h1>
        <h2
        
          ref={h13}
          className="text-3xl  text-dark-heading dark:text-light-heading  md:text-4xl xl:text-5xl xl:leading-tight font-bold"
        >
          Full Stack Developer
        </h2>
        <div className="mt-5 text-3xl text-dark-heading dark:text-light-heading  md:text-4xl xl:text-5xl xl:leading-tight font-bold" >
      <a ref={a1}
        href="https://drive.google.com/file/d/19qa6U1v8IXWO3QyxkrenfMLK4UkayLUF/view?usp=sharing" 
        className="bg-blue-500 text-white text-lg px-4 py-2 rounded-full transition duration-300 hover:bg-blue-700"
        download
        target="_blank"
      >
        Show Resume
      </a>
    </div>
      </div>
      <div className="mt-5 md:mt-0">
        <img ref={myimageref} className="w-1/2 md:ml-auto" src={img} alt="Pavan MG" />
      </div>
    </main>
  );
}

export default Home;
