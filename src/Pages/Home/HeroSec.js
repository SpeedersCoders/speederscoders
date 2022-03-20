import React from "react";
import { GitHub, GitPullRequest } from "react-feather";
import Contributor from "./Contributor";

const HeroSec = () => {
  return (
    <div style={{ minHeight: "100vh" }}>
      <section className="section">
        <div className="container">
          <div className="column has-text-centered is-hidden-touch">
            <p className="title fadeInUp" style={{ animationDelay: "0.25s" }}>
              <span style={{ fontSize: "5rem" }}>
              SpeedersCoders official website.
              </span>
            </p>
            <p
              className="subtitle is-3 has-text-grey fadeInUp"
              style={{ animationDelay: ".5s" }}
            >
               You propose us we realize.
            </p>
            <Contributor />
            <div className="column fadeInUp" style={{ animationDelay: "1s" }}>
              <a
                href="https://github.com/SpeedersCoders/"
                className="button button-special box-shadow-lift is-large is-rounded"
                target="_blank"
                rel="noopener noreferrer"
              >

                <GitHub /> <span> &emsp;Organization</span>

              </a> 

            </div>


          </div>


          <div className="column has-text-centered is-hidden-desktop">

            <p
              className="title is-2 fadeInUp"
              style={{ animationDelay: ".25s" }}
            >
              SpeedersCoders official website.
            </p>
            <p
              className="subtitle has-text-grey is-5 fadeInUp"
              style={{ animationDelay: ".5s" }}
            >
              You propose us we realize.
            </p>
            <Contributor />
            <div className="column fadeInUp" style={{ animationDelay: "1s" }}>
              <a
                href="https://github.com/SpeedersCoders/speederscoders"
                className="button button-special box-shadow-lift is-large is-rounded"
                target="_blank"
                rel="noopener noreferrer"
              >

                <GitPullRequest /> <span> &emsp;Organization</span>

              </a>



            </div>
          </div>

        </div>

      </section>


    </div>
  );
};

export default HeroSec;
