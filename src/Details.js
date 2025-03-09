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

import Microsoft_Net from './assets/techstack/.Net.png'
import MongoDb from "./assets/techstack/MongoDb.png";

import Azure from './assets/techstack/Azure.png'
import Postgres from './assets/techstack/Postgres.png'

import MySql from "./assets/techstack/MySQL.png";
import Translator from "./assets/ui/Translator.png";
import Rock from "./assets/ui/Rock.png";
import Nutration from "./assets/ui/Nutration.png";
import Movies from "./assets/ui/Movies.png";
import chat from "./assets/ui/chat.png";
import FileShare from "./assets/ui/FileShare.png";
import Amazon from "./assets/ui/Amazon.png";
import ML from "./assets/ui/ML.jpg";

export const personalDetails = {
  name: "Biswajit Deori",
  img: Person,
};

// Experience
export const workDetails = [
  {
    Position: "Software Engineer",
    Company: "Optum UHG",
    Location: "Hyderabad (TG)",
    Type: "Full Time",
    Duration: "Jul 2022 - Present",
    Exprince: true,
    ExprinceDetails: [
      "Optimized application rendering speed by 37% by eliminating redundant API calls and implementing asynchronous operations in React, leveraging Azure cloud services for enhanced performance and scalability.",
      "Developed and maintained a high-performance React application with Redux state management and Zustand, enhancing data handling efficiency.",
      "Delivered 20+ new features over a 6-month period, ensuring robust and scalable software solutions that align with business objectives.",
      "Achieved 100% code coverage by writing comprehensive unit tests using Jest and React Testing Library, ensuring application stability and reducing post-production defects.",
      "Designed and deployed cloud-native microservices and RESTful APIs using Azure, ensuring efficient communication and seamless integration across services.",
      "Developed role-based access control (RBAC) for granular permissions and secure user authentication, ensuring compliance with data protection standards.",
      "Automated complex workflows with Python, Azure Functions, and Durable Functions, reducing manual intervention by 40% and enabling efficient orchestration of long-running, stateful processes.",
      "Managed deployment processes in production environments using CI/CD pipelines (Azure DevOps), ensuring seamless, reliable releases across distributed systems.",
      "Implemented logging, and monitoring to detect and mitigate security threats in real-time.",
      "Integrated Power BI for enhanced business intelligence and visualization, enabling data-driven decision-making across teams.",
      "Collaborated with cross-functional teams, including product managers, UI/UX designers, and backend engineers, to ensure high-quality software delivery.",
    ],
  },
  {
    Position: "Internship",
    Company: "National Institute of Technology",
    Location: "Silchar",
    Type: "SN Bose Internship Program",
    Duration: "Jun 2021 - Jul 2021",
    Exprince: true,
    ExprinceDetails: [
      "Developed an optimized optical character recognition (OCR) model using CNN, MSER, and TensorFlow, improving handwritten digit recognition accuracy.",
      "Trained and optimized the model with custom datasets, preprocessing images using OpenCV to improve recognition efficiency in real-time applications.",
      "Achieved over 92% model accuracy in detecting handwritten numbers and mathematical expressions, surpassing baseline OCR solutions.",
      "Deployed the OCR model as a Flask-based API, enabling integration with real-world applications for real-time processing.",
      "Skills used: Python, TensorFlow, OpenCV, Flask, NumPy, Pandas, JWT Authentication, HTTPS Security.",
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
  DotNet: Microsoft_Net,
  python: Python,
  tenserFlow: tenserFlow,
  VS,
  Jupyter,
  C,
  MySql,
  MongoDb,
  Postgres,
  Azure
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
    title: "Age and Gender Classification using CNN",
    image: ML,
    description: 
      "Developed a machine learning application using TensorFlow to predict gender and age from images. Integrated a React.js UI for real-time image uploads and predictions, achieving 85% accuracy.",
    techstack: "React.js, API, Machine Learning, Python, Flask, CNN, TensorFlow, OpenCV",
    previewLink: "https://age-gender-detection-e828.onrender.com/",
    githubLink: "https://github.com/BiswajitDeori/age-gender-detection.git",
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
