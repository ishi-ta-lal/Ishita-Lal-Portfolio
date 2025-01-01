import "../styles/Facts.css";
import React from "react";
import Header from "../components/Header";
import TitleBar from "../components/TitleBar";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import MenuMobile from "../components/MenuMobile";

const facts = [
  {
    title: "Education",
    message:
      "Currently pursuing a degree in Computer Science and Engineering at IGDTUW, in my 3rd Year.",
  },
  {
    title: "Skills",
    message:
      "Python, Java, C++, Kotlin, HTML/CSS, JavaScript, Proficient in efficient algorithms and data structures, SQL, MongoDB, PostgreSQL, Tableau, Power BI, React, Express, Node.js, Flask, Pandas, Numpy, Matplotlib, Seaborn, NLTK, TensorFlow, Langchain, Chainlit, HuggingFace, Streamlit, REST APIs, Authentication, Server-Side Logic, Middleware, MongoDB, Express, React, Node.js, Machine Learning, Deep Learning, Data Analysis, Generative AI, Android.",
  },
  {
    title: "Internships",
    message:
      "Ex-DRDO Intern, where I worked on AI and machine learning projects in a cutting-edge environment.",
  },
  {
    title: "Internships",
    message: "Joining Expedia Group as a Software Engineering Intern this summer.",
  },
  {
    title: "Leadership Roles",
    message:
      "Events & Partnerships Director at 180 DC IGDTUW, where I manage partnerships and lead events that foster growth and collaboration.",
  },
  {
    title: "Leadership Roles",
    message:
      "CXO at YouthxConnect, a platform that connects youth to opportunities and experiences that empower their futures.",
  },
  
  {
    title: "Tech Enthusiast",
    message:
      "Always excited to learn about new technologies and how they can be applied to solve real-world problems.",
  },
];

function Facts() {
  const jsonString = JSON.stringify(facts, null, 2).split("\n");

  return (
    <div className="page-container">
      <Header />
      <MenuMobile />
      <SideBar />
      <div className="content-container">
        <TitleBar title="Facts About Me" />
        <div class="title-facts">Facts About Me</div>
        <div className="facts-json-container">
          {jsonString.map((line, index) => (
            <div className="json-line" key={index}>
              <span className="line-number">
                {String(index + 1).padStart(3, " ")}
              </span>
              <span className="json-text">{line}</span>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Facts;