import React from "react";
import Header from "../components/Header";
import TitleBar from "../components/TitleBar";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import MenuMobile from "../components/MenuMobile";
import '../styles/About.css';
import IconCloud from '../components/IconCloud';

function About() {
  return (
    <body>
      <TitleBar />
      <section className="flex-container">
        <section className="main-container">
          <Header />
          <MenuMobile />
          <main className="main-wrapper about">
            <div className="about-container">
              <div className="code-editor">
                <div className="line-numbers">
                  {Array.from({ length: 25 }, (_, i) => (
                    <span key={i}>{i + 1}</span>
                  ))}
                </div>
                <div className="code-content">
                  <span className="span-tag html">{'<html>'}</span>
                  <br />
                  <span className="span-tag body">{'<body>'}</span>
                  <br />
                  <span className="span-tag content">{'<h1>'}</span>
                  <h1 className="title-about">Hello 👋,</h1>
                  <span className="span-tag content">{'</h1>'}</span>
                  <br />
                  <span className="span-tag content">{'<p>'}</span>
                  <p className="text-about">
                    Hi, I'm <span className="span-highlight">Ishita Lal</span>, a student of Computer Science and Engineering at Indira Gandhi Delhi Technical University for Women. Currently delving into <span className="span-highlight">Software Engineering</span>, I find joy in overcoming challenges through coding.
                  </p>
                  <p className="text-about">
                    I specialize in <span className="span-highlight">Data Structures & Algorithms (DSA), Full-Stack Development, and Artificial Intelligence (AI). </span> I’m also actively learning Cloud Computing to expand my skillset. This summer, I’m thrilled to be joining  <span className="span-highlight"> Expedia Group as a Software Engineering Intern </span>, where I’ll continue to grow as a tech professional and contribute to impactful projects.
                  </p>
                  <span className="span-tag content">{'</p>'}</span>
                  <br />
                  <span className="span-tag body">{'</body>'}</span>
                  <br />
                  <span className="span-tag html">{'</html>'}</span>
                </div>
              </div>
            </div>
            <IconCloud />
          </main>
        </section>
        <SideBar />
      </section>
      <Footer />
    </body>
  );
}

export default About;
