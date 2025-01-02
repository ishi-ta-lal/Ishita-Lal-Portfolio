import React from "react";
import Header from "../components/Header";
import TitleBar from "../components/TitleBar";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import '../styles/Home.css';
import image from '../images/profile.JPG';
import { FiEye } from 'react-icons/fi';
import MenuMobile from "../components/MenuMobile";
import { Typewriter } from 'react-simple-typewriter';

function Home() {
  return (
    <body>
      <TitleBar />
      <section className="flex-container">
        <SideBar />
        <section className="main-container">
          <Header />
          <MenuMobile />
          <main className="main-wrapper home">
            <div className="home-content">
              <p><span className="span">{'<'}</span>    Hello 👋, I'm</p>
              <h1 className="name">Ishita Lal <span className="span">{'/ >'}</span></h1>
              <h2>
    <Typewriter
      words={[
        'Software Developer',
        'AI Student',
        'Web Development Student',
        'Mobile Development Student',
      ]}
      loop={Infinity}
      cursor
      cursorStyle="|"
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={1000}
    />
  </h2>
              <a
  href="/Ishita_Intern.pdf"
  target="_blank"
  className="btn-download" 
  rel="noreferrer"
>
  View my CV
  <FiEye />
</a>

            </div>

            <div className="home-img">
              <img
                src={image}
                alt="ishita lal profile photo"
                className="image-perfil"
              />
            </div>

          </main>
        </section>
        {/* <SideBar /> */}
      </section>
      <Footer />
    </body>
  );
}

export default Home;