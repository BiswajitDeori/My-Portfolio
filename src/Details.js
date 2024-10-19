import Person from "./assets/ui/Person.png";
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import Flask from "./assets/techstack/Flask.png";
import tenserFlow from "./assets/techstack/tensorflow.png";
import Net from "./assets/techstack/Net.png";
import GitAction from "./assets/techstack/GitAction.png";
import Python from "./assets/techstack/python.png";
import VS from "./assets/techstack/VisualStudio.png";
import Jupyter from "./assets/techstack/Jupyter.png";
import C from "./assets/techstack/C++.png";

import MongoDb from "./assets/techstack/MongoDb.png";

import MySql from "./assets/techstack/MySQL.png";
import Translator from "./assets/ui/Translator.png";
import Rock from "./assets/ui/Rock.png";
import Nutration from "./assets/ui/Nutration.png";
import Movies from "./assets/ui/Movies.png";
import chat from "./assets/ui/chat.png";
import FileShare from "./assets/ui/FileShare.png";
import Amazon from "./assets/ui/Amazon.png";

export const personalDetails = {
  name: "Biswajit Deori",
  img: Person,
};

// Experience
export const workDetails = [
  {
    Position: "Full Stack .NET Developer",
    Company: `Optun UHG`,
    Location: "Hyderabad (TG)",
    Type: "Full Time",
    Duration: "Sep 2022 - Present",
    Exprince: true,
    ExprinceDetails: [
      "Extensively worked on .NET applications using C#, ASP.NET, and web services.",
      "Designed user interfaces using HTML, JavaScript, and CSS to enhance the front-end experience",
      "Created stored procedures and various database objects within Microsoft SQL Server.",
      "Developed React pages and components while implementing Redux state management and custom packages.",
      "Wrote comprehensive unit test cases to achieve and maintain 100% code coverage.",
      "Established an automated pipeline for SQL query rollback, ensuring swift response to deployment issues.",
      "Fixed Bug present in Production",
    ],
  },
  {
    Position: "Internship",
    Company: `National institute of Techonology`,
    Location: "Silcahar",
    Type: "Internship / Machine learning",
    Duration: "Oct 2021 -  Dec 2021",
    Exprince: true,
    ExprinceDetails: [
      "Working on optical character recognition",
      "Train a model using Own datasets",
      "Use it in a real-time environment to detect mathematical expressions and handwritten Numbers.",
    ],
  },
];

//Education Details
export const eduDetails = [
  {
    Position: "Secondary Schooling (Class 10)",
    Company: "kendriya vidyalaya khanapara",
    Location: "Assam",
    Type: "Pass-out",
    Duration: "Mar 2014 - May 2015",
    Exprince: false,
    ExprinceDetails: [""],
  },

  {
    Position: "Siner Secondary Schooling (Class 12)",
    Company: "kendriya vidyalaya khanapara",
    Location: "Assam",
    Type: "Pass-out",
    Duration: "Mar 206 - Apr 2017",
    Exprince: false,
    ExprinceDetails: [""],
  },

  {
    Position: "Bachelor in Electronics & Instrumentation Engineering",
    Company: `National Insitute of Technology , Silchar`,
    Location: "Silchar",
    Type: "Pass-out",
    Duration: "Sep 2019 - Otc 2022",
    Exprince: false,
    ExprinceDetails: [""],
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  bootstrap: bootstrap,
  vscode: vscode,
  git: git,
  github: github,
  gitAction: GitAction,
  flask: Flask,
  DotNet: Net,
  python: Python,
  tenserFlow: tenserFlow,
  VS,
  Jupyter,
  C,
  MySql,
  MongoDb,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Chat Messager",
    image: chat,
    description: `This is a real-time messaging web application that facilitates the exchange of messages, enabling users to both send and receive messages. Additionally, all data generated through these interactions is securely stored in a database.`,
    techstack: "React js, MongoDB, Socket.io, Express",
    previewLink: "https://chat-messager.onrender.com/",
    githubLink: "https://github.com/BiswajitDeori/Chat-Messager",
  },
  {
    title: "File share",
    image: FileShare,
    techstack: "React js, Material UI, Socket.io , google cloud",
    previewLink: "https://peertopeer-server.onrender.com/",
    githubLink: "https://github.com/BiswajitDeori/PeerToPeer_server",
    description:
      " This is a peer-to-peer file sharing web application allowing multiple users to share and receive files with no size limitations. It's designed for seamless, direct exchanges without intermediaries. ",
  },
  {
    title: "Amazon Price Tracker",
    image: Amazon,
    techstack: "javascript, html, css",
    previewLink: "https://chromewebstore.google.com/detail/amazon-price-tracker/ecodolhfpnmpgcejcipneicagehckbad",
    githubLink: "https://github.com/BiswajitDeori/Chrome_extension",
    description:
      " A Chrome extension that monitors products from your wish list using product links and desired prices, sending alerts when they drop to your specified amount. ",
  },
  {
    title: "Text Translation",
    image: Translator,
    description: `This is a React application that allows you to convert English text into various languages, including Hindi, Spanish, Italian, and more.`,
    techstack: "React js , Open source Api",
    previewLink: "https://translatetext-gvkd.onrender.com",
    githubLink: "https://github.com/BiswajitDeori/TranslateText",
  },
  {
    title: "Rock Paper Scissors",
    image: Rock,
    description: `This is a straightforward gaming application that enables users to play the classic game Rock, Paper, Scissors against a computer or bot.`,
    techstack: "React js",
    previewLink: "https://rockpaper-di5z.onrender.com",
    githubLink: "https://github.com/BiswajitDeori/Rock-paper-scissors",
  },
  {
    title: "Movies Show",
    image: Movies,
    description: `This is a movie review app that offers access to IMDb ratings, trending movies, series, and detailed descriptions, along with trailer links.`,
    techstack: "React Js, API, @material-ui/",
    previewLink: "https://moviesstream.onrender.com",
    githubLink: "https://github.com/BiswajitDeori/My-Movies",
  },
  {
    title: "Nutration Details",
    image: Nutration,
    description: `This is a health-check application that provides comprehensive nutrition details for fruits and vegetables. Users can obtain this information by either capturing a real-time image or selecting one from their gallery.`,
    techstack: "React Js, API, Machine Learning, Python, Flask",
    previewLink: "https://nutrationhealth.onrender.com",
    githubLink: "https://github.com/BiswajitDeori/NutrationHealth",
  },
];
