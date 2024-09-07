import React from 'react';
import { useTranslation } from "react-i18next";

function Home() {
    const { t } = useTranslation();
    return (
      <main className="home">
        <div>
          <h1>
            
            <h1>{t("home.heading")}</h1>
            <h1> Creating Beautiful and Functional Web Experiences </h1>
            <h2>Designing and Developing Websites That Delight and Perform</h2>
            <h3>Explore My Work</h3>
            <p>
              Hello! I'm K D, a web designer and front-end developer with a
              passion for crafting visually stunning and highly functional
              websites.I specialize in bringing creative visions to life through
              code.
            </p>
            <p>work exemple </p>
            <p>Project Title: "Responsive E-commerce Platform for ABC"</p>
            <p>
              Description: "A complete redesign and development of an e-commerce
              platform to enhance user experience and improve performance."
            </p>
            <p>
              Skills and tools:HTML, CSS, JavaScript, React, , SASS, Figma,
              Adobe XD, Git, WordPress"
            </p>
          </h1>
        </div>
      </main>
    );
}

export default Home
