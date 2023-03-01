import React from "react";
import "./Landing.css";
// import logo1 from '../svg/LOGO NOIR@.svg'

function Landing() {
  return (
    <>
      <header>
        <div class="nav-wrapper">
          <div class="logo-container">
            <img
              class="logo"
              src="https://raw.githubusercontent.com/RubyXswap/rubyxsvg/main/RubyX-logo-fade.svg"
              alt="Logo"
            />
          </div>
          <nav>
            <input class="hidden" type="checkbox" id="menuToggle" />
            <label class="menu-btn" for="menuToggle">
              <div class="menu"></div>
              <div class="menu"></div>
              <div class="menu"></div>
            </label>
            <div class="nav-container">
              <ul class="nav-tabs">
                <li class="nav-tab"><a
              target="_blank"
              rel="noreferrer"
              href="https://medium.com/@rubyxswap">
               Blog </a>
                </li>
                <li class="nav-tab">Telegram</li>
                <li class="nav-tab">Enter App</li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
      <div className="container">
        <section className="intro">
          <h1 className="intro__title">
            Ruby<strong>X</strong>
          </h1>
          <div className="intro__illustration">
            <svg
              width="70.02"
              height="10.55"
              viewBox="0 0 864 864"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              className="logoLanding"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M636.28 854H854L586.133 586.133L702.618 469.492L701.832 252.558L477.195 477.195L10 10V227.563L368.413 585.976L209.171 745.219H426.891L477.195 694.915L636.28 854ZM330.214 854L404.254 790.177H152.108L78.0671 854H330.214Z"
                fill="#FAEFF1"
              />
            </svg>
          </div>
        </section>
        <section className="sectionGetStarted">
          <div className="getStarted">
            <a
              className="tweeLink"
              target="_blank"
              rel="noreferrer"
              href="https://ctt.ac/a_87g"
            >
              Get started
            </a>
          </div>
        </section>
      </div>
    </>
  );
}

export default Landing;
