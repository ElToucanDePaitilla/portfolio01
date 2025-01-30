import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../content_option";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <HelmetProvider>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Développeur Web Fullstack | Création d’Interfaces Dynamiques | El Toucan</title>
          <meta name="description" content="Bienvenue sur mon portfolio ! Je suis El Toucan, développeur web fullstack spécialisé en MongoDB, Express, React et Node.js (MERN). Découvrez mes projets et mon expertise." />
          <meta name="keywords" content="Développeur Web, Fullstack, MERN, MongoDB, Express, React, Node.js, JavaScript, HTML, CSS, UI/UX, API, Frontend, Backend" />
          <meta name="author" content="El Toucan" />

          {/* Open Graph - Pour Facebook & LinkedIn */}
          <meta property="og:title" content="Portfolio de El Toucan - Développeur Web Fullstack" />
          <meta property="og:description" content="Découvrez mes compétences en développement web Fullstack et mes réalisations en MongoDB, Express, React et Node.js." />
          <meta property="og:image" content="URL_DE_MON_IMAGE" />
          <meta property="og:url" content="https://mon-site-prtfolio.com" />
          <meta property="og:type" content="website" />

          {/* Twitter Card - Pour Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Portfolio de El Toucan - Développeur Web Fullstack" />
          <meta name="twitter:description" content="Développement web Fullstack, UI/UX et intégration MERN. Découvrez mon expertise et mes projets." />
          <meta name="twitter:image" content="URL_DE_MON_IMAGE" />
        </Helmet>

        <div className="intro_sec d-block d-lg-flex align-items-center">
          <div
            className="h_bg-image order-1 order-lg-2 h-100"
            style={{ backgroundImage: `url(${introdata.your_img_url})` }}
            role="img"
            aria-label="Image de présentation de El Toucan"
          ></div>

          <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
            <div className="align-self-center">
              <div className="intro mx-auto">
                <h2 className="mb-1x">{introdata.title}</h2>

                <h1 className="fluidz-48 mb-1x">
                  <Typewriter
                    options={{
                      strings: [
                        introdata.animated.first,
                        introdata.animated.second,
                        introdata.animated.third,
                        introdata.animated.fourth,
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                    }}
                  />
                </h1>

                <p className="mb-1x">{introdata.description}</p>

                <div className="intro_btn-action pb-5">
                  <Link to="/portfolio" className="text_2">
                    <div id="button_p" className="ac_btn btn">
                      Mon Portfolio
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>

                  <Link to="/contact">
                    <div id="button_h" className="ac_btn btn">
                      Me contacter
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};
