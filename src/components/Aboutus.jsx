import React from "react";
import "./aboutus.css";
import part from "../assets/Parth.png"
import s from "../assets/s.png"
import C from "../assets/C.png"

const Aboutus = () => {
  return (
      <div className="body">
        <div id="social-icons-container"></div>
        <div className="container">
          <div className="club-name">
            <h1>Codenex</h1>
          </div>

          <div className="club-head">
            <div className="profile-card">
              <img src={part} alt="Club Head" />
              <h2>Parth Nath Chauhan</h2>
              <p1 className="position">CODENEX FOUNDER</p1>
              <p>
                Parth oversees the entire club, coordinating efforts across
                domains and ensuring a unified vision.
              </p>
            </div>
          </div>
        </div>
        <section id="team-members"></section>
        <section id="team-members">
          <div className="domain-section" id="domain1">
            <h2>Web Development</h2>
            <div className="team-member">
              <div className="card-inner">
                <div className="card-front">
                  <img src={s} alt="Mike Anderson" />
                  <h3>Shreyansh Arora</h3>
                  <p>Associative HEAD</p>
                </div>
                <div className="card-back">
                  <div className="social-icons1">
                    <a
                      href="https://github.com/username"
                      target="_blank"
                      aria-label="GitHub"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                    <a
                      href="https://linkedin.com/in/username"
                      target="_blank"
                      aria-label="LinkedIn"
                    >
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a
                      href="https://instagram.com/username"
                      target="_blank"
                      aria-label="Instagram"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                    <p>MERE SE BADI KOI RAND NHI HAI CODENEX MAI</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="team-member">
              <div className="card-inner">
                <div className="card-front">
                  <img src={C} alt="Sarah Lee" />
                  <h3>Ananya Agarwal</h3>
                  <p>Associative HEAD</p>
                </div>
                <div className="card-back">
                  <div className="social-icons1">
                    <a
                      href="https://github.com/username"
                      target="_blank"
                      aria-label="GitHub"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                    <a
                      href="https://linkedin.com/in/username"
                      target="_blank"
                      aria-label="LinkedIn"
                    >
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a
                      href="https://instagram.com/username"
                      target="_blank"
                      aria-label="Instagram"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                    <p>aayush is here</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="domain-section" id="domain2">
            <h2>Creative's</h2>
            <div className="team-member">
              <div className="card-inner">
                <div className="card-front">
                  <img src={C} alt="Emma Scott" />
                  <h3>Emma Scott</h3>
                  <p>Associative HEAD</p>
                </div>
                <div className="card-back">
                  <div className="social-icons1">
                    <a
                      href="https://github.com/username"
                      target="_blank"
                      aria-label="GitHub"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                    <a
                      href="https://linkedin.com/in/username"
                      target="_blank"
                      aria-label="LinkedIn"
                    >
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a
                      href="https://instagram.com/username"
                      target="_blank"
                      aria-label="Instagram"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="team-member">
              <div className="card-inner">
                <div className="card-front">
                  <img src={C} alt="Olivia Harris" />
                  <h3>Olivia Harris</h3>
                  <p>Associative HEAD</p>
                </div>
                <div className="card-back">
                  <div className="social-icons1">
                    <a
                      href="https://github.com/username"
                      target="_blank"
                      aria-label="GitHub"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                    <a
                      href="https://linkedin.com/in/username"
                      target="_blank"
                      aria-label="LinkedIn"
                    >
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a
                      href="https://instagram.com/username"
                      target="_blank"
                      aria-label="Instagram"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="domain-section" id="domain3">
            <h2>Corporate</h2>
            <div className="team-member">
              <div className="card-inner">
                <div className="card-front">
                  <img src={C} alt="Sophia Turner" />
                  <h3>Sophia Turner</h3>
                  <p>Associative HEAD</p>
                </div>
                <div className="card-back">
                  <div className="social-icons1">
                    <a
                      href="https://github.com/username"
                      target="_blank"
                      aria-label="GitHub"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                    <a
                      href="https://linkedin.com/in/username"
                      target="_blank"
                      aria-label="LinkedIn"
                    >
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a
                      href="https://instagram.com/username"
                      target="_blank"
                      aria-label="Instagram"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="team-member">
              <div className="card-inner">
                <div className="card-front">
                  <img src={C} alt="Mia Wilson" />
                  <h3>Mia Wilson</h3>
                  <p>Content Creator</p>
                </div>
                <div className="card-back">
                  <div className="social-icons1">
                    <a
                      href="https://github.com/username"
                      target="_blank"
                      aria-label="GitHub"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                    <a
                      href="https://linkedin.com/in/username"
                      target="_blank"
                      aria-label="LinkedIn"
                    >
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a
                      href="https://instagram.com/username"
                      target="_blank"
                      aria-label="Instagram"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="domain-section" id="domain4">
            <h2>AIML</h2>
            <div className="team-member">
              <div className="card-inner">
                <div className="card-front">
                  <img src={C} alt="David Brown" />
                  <h3>David Brown</h3>
                  <p>Financial Analyst</p>
                </div>
                <div className="card-back">
                  <div className="social-icons1">
                    <a
                      href="https://github.com/username"
                      target="_blank"
                      aria-label="GitHub"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                    <a
                      href="https://linkedin.com/in/username"
                      target="_blank"
                      aria-label="LinkedIn"
                    >
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a
                      href="https://instagram.com/username"
                      target="_blank"
                      aria-label="Instagram"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="team-member">
              <div className="card-inner">
                <div className="card-front">
                  <img src={C} alt="Oliver Green" />
                  <h3>Oliver Green</h3>
                  <p>Budget Manager</p>
                </div>
                <div className="card-back">
                  <div className="social-icons1">
                    <a
                      href="https://github.com/username"
                      target="_blank"
                      aria-label="GitHub"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                    <a
                      href="https://linkedin.com/in/username"
                      target="_blank"
                      aria-label="LinkedIn"
                    >
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a
                      href="https://instagram.com/username"
                      target="_blank"
                      aria-label="Instagram"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="domain-section" id="domain5">
            <h2>APP DEV</h2>
            <div className="team-member">
              <div className="card-inner">
                <div className="card-front">
                  <img src={C} alt="Lucas Black" />
                  <h3>Lucas Black</h3>
                  <p>Operations Manager</p>
                </div>
                <div className="card-back">
                  <div className="social-icons1">
                    <a
                      href="https://github.com/username"
                      target="_blank"
                      aria-label="GitHub"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                    <a
                      href="https://linkedin.com/in/username"
                      target="_blank"
                      aria-label="LinkedIn"
                    >
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a
                      href="https://instagram.com/username"
                      target="_blank"
                      aria-label="Instagram"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="team-member">
              <div className="card-inner">
                <div className="card-front">
                  <img src={C} alt="Ethan Smith" />
                  <h3>Ethan Smith</h3>
                  <p>Event Coordinator</p>
                </div>
                <div className="card-back">
                  <div className="social-icons1">
                    <a
                      href="https://github.com/username"
                      target="_blank"
                      aria-label="GitHub"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                    <a
                      href="https://linkedin.com/in/username"
                      target="_blank"
                      aria-label="LinkedIn"
                    >
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a
                      href="https://instagram.com/username"
                      target="_blank"
                      aria-label="Instagram"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="domain-section" id="domain6">
            <h2>Cyber Security</h2>
            <div className="team-member">
              <div className="card-inner">
                <div className="card-front">
                  <img src={C} alt="Mike Anderson" />
                  <h3>Mike Anderson</h3>
                  <p>Frontend Developer</p>
                </div>
                <div className="card-back">
                  <div className="social-icons1">
                    <a
                      href="https://github.com/username"
                      target="_blank"
                      aria-label="GitHub"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                    <a
                      href="https://linkedin.com/in/username"
                      target="_blank"
                      aria-label="LinkedIn"
                    >
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a
                      href="https://instagram.com/username"
                      target="_blank"
                      aria-label="Instagram"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="team-member">
              <div className="card-inner">
                <div className="card-front">
                  <img src={C} alt="Sarah Lee" />
                  <h3>Sarah Lee</h3>
                  <p>Backend Developer</p>
                </div>
                <div className="card-back">
                  <div className="social-icons1">
                    <a
                      href="https://github.com/username"
                      target="_blank"
                      aria-label="GitHub"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                    <a
                      href="https://linkedin.com/in/username"
                      target="_blank"
                      aria-label="LinkedIn"
                    >
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a
                      href="https://instagram.com/username"
                      target="_blank"
                      aria-label="Instagram"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="domain-section" id="domain7">
            <h2>Blockchain</h2>
            <div className="team-member">
              <div className="card-inner">
                <div className="card-front">
                  <img src={C} alt="Mike Anderson" />
                  <h3>Mike Anderson</h3>
                  <p>Frontend Developer</p>
                </div>
                <div className="card-back">
                  <div className="social-icons1">
                    <a
                      href="https://github.com/username"
                      target="_blank"
                      aria-label="GitHub"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                    <a
                      href="https://linkedin.com/in/username"
                      target="_blank"
                      aria-label="LinkedIn"
                    >
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a
                      href="https://instagram.com/username"
                      target="_blank"
                      aria-label="Instagram"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="team-member">
              <div className="card-inner">
                <div className="card-front">
                  <img src={C} alt="Sarah Lee" />
                  <h3>Sarah Lee</h3>
                  <p>Backend Developer</p>
                </div>
                <div className="card-back">
                  <div className="social-icons1">
                    <a
                      href="https://github.com/username"
                      target="_blank"
                      aria-label="GitHub"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                    <a
                      href="https://linkedin.com/in/username"
                      target="_blank"
                      aria-label="LinkedIn"
                    >
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a
                      href="https://instagram.com/username"
                      target="_blank"
                      aria-label="Instagram"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="domain-section" id="domain8">
            <h2>Events</h2>
            <div className="team-member">
              <div className="card-inner">
                <div className="card-front">
                  <img src={C} alt="Mike Anderson" />
                  <h3>Mike Anderson</h3>
                  <p>Frontend Developer</p>
                </div>
                <div className="card-back">
                  <div className="social-icons1">
                    <a
                      href="https://github.com/username"
                      target="_blank"
                      aria-label="GitHub"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                    <a
                      href="https://linkedin.com/in/username"
                      target="_blank"
                      aria-label="LinkedIn"
                    >
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a
                      href="https://instagram.com/username"
                      target="_blank"
                      aria-label="Instagram"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="team-member">
              <div className="card-inner">
                <div className="card-front">
                  <img src={C} alt="Sarah Lee" />
                  <h3>Sarah Lee</h3>
                  <p>Backend Developer</p>
                </div>
                <div className="card-back">
                  <div className="social-icons1">
                    <a
                      href="https://github.com/username"
                      target="_blank"
                      aria-label="GitHub"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                    <a
                      href="https://linkedin.com/in/username"
                      target="_blank"
                      aria-label="LinkedIn"
                    >
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a
                      href="https://instagram.com/username"
                      target="_blank"
                      aria-label="Instagram"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="domain-section" id="domain9">
            <h2>PR</h2>
            <div className="team-member">
              <div className="card-inner">
                <div className="card-front">
                  <img src={C} alt="Mike Anderson" />
                  <h3>Mike Anderson</h3>
                  <p>Frontend Developer</p>
                </div>
                <div className="card-back">
                  <div className="social-icons1">
                    <a
                      href="https://github.com/username"
                      target="_blank"
                      aria-label="GitHub"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                    <a
                      href="https://linkedin.com/in/username"
                      target="_blank"
                      aria-label="LinkedIn"
                    >
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a
                      href="https://instagram.com/username"
                      target="_blank"
                      aria-label="Instagram"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="team-member">
              <div className="card-inner">
                <div className="card-front">
                  <img src={C} alt="Sarah Lee" />
                  <h3>Sarah Lee</h3>
                  <p>Backend Developer</p>
                </div>
                <div className="card-back">
                  <div className="social-icons1">
                    <a
                      href="https://github.com/username"
                      target="_blank"
                      aria-label="GitHub"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                    <a
                      href="https://linkedin.com/in/username"
                      target="_blank"
                      aria-label="LinkedIn"
                    >
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a
                      href="https://instagram.com/username"
                      target="_blank"
                      aria-label="Instagram"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
  );
};

export default Aboutus;
