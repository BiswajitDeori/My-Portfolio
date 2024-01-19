import React from "react";
import { techStackDetails } from "../Details";

function Technologies() {
  const {
    html,
    css,
    js,
    react,
    vscode,
    github,
    tenserFlow,
    flask,
    DotNet,
    python,
    VS,
    Jupyter,
    C,
    MySql,
    MongoDb
  } = techStackDetails;
  return (
    <main className="container mx-auto max-width pt-10 pb-20 " >
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold ">
          Tech Stack
        </h1>
        <p className="text-content py-2 lg:max-w-3xl" style={{color:"grey"}}>
      Technologies I've been Learning and working recently
    </p>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img src={html} title="html" alt="" />
        <img src={css} title="CSS" alt="" />
        <img src={js} title="JavaScript" alt="" />
        <img src={react} title="React" alt="" />
        <img src={flask}  width="200px" title="flask" alt="" />
        <img src={tenserFlow} width={"100px"}  title="tenserFlow" alt="" />
        <img src={DotNet} title="DotNet" alt="" />
        <img src={python}  title="python" alt="" />
        <img src={MongoDb} title="MongoDB" alt="" />
        <img src={C}   title="C++" alt="" />
        <img src={MySql} title="MySQL" alt=""/>
      </section>
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading  md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tools
        </h1>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img src={vscode} title="Visual Studio Code" alt="" />
        <img src={github} title="Github" alt="Github" />
        <img src={VS} title="Visual Studio" alt="Visual Studio" />
        <img src={Jupyter} title="Jupyter Notebook" alt="" />
        
      </section>
    </main>
  );
}

export default Technologies;
