import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import TitleBar from "../components/TitleBar";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import MenuMobile from "../components/MenuMobile";
import "../styles/Contact.css";
import contacts from "../data/contacts";

export default function Contact() {
  const quotes = [
    "Keep Learning!",
    "Build Awesome Things!",
    "Stay Curious!",
    "Code is Poetry.",
    "Innovate. Iterate. Inspire.",
  ];

  const [currentQuote, setCurrentQuote] = useState(quotes[0]);
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    // Typing animation for "Let's chat"
    const text = "Let's chat 🤙";
    let index = 0;

    const typingInterval = setInterval(() => {
      if (index < text.length) {
        setTypedText((prev) => prev + text[index]);
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => {
        const currentIndex = quotes.indexOf(prev);
        const nextIndex = (currentIndex + 1) % quotes.length;
        return quotes[nextIndex];
      });
    }, 4000); // Change quote every 4 seconds

    return () => clearInterval(interval);
  }, [quotes]);

  return (
    <>
      <div className="background-animation"></div>
      <TitleBar />
      <section className="flex-container">
        <section className="main-container">
          <Header />
          <MenuMobile />
          <main className="main-wrapper contact">
            <div className="title-container">
              <h1 className="title-contact typing">{typedText}</h1>
              <h2 className="message-contact">
                "We are all different crayons in the box of life." – Unknown
              </h2>
              <p className="rotating-quote">💡 {currentQuote}</p>
            </div>
            <div className="list-contact">
              <p className="class-name line">
                .contacts<span className="element">{' {'}</span>
              </p>
              {contacts.map(({ social, href, text }) => (
                <p className="key-name line glow-hover" key={social}>
                  {social}:
                  <a href={href} target="_blank" rel="noreferrer">
                    {text}
                  </a>
                  ;
                </p>
              ))}
              <p className="element line">{'}'}</p>
            </div>
          </main>
        </section>
        <SideBar />
      </section>
      <Footer />
    </>
  );
}
