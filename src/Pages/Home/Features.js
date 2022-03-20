import React from "react";
import { withRouter } from "react-router-dom";

const Features = ({ history }) => {
  return (
    <section id="features" className="container" style={{ marginTop: "1rem" }}>
      <div className="features">
        <div className="features-title has-text-centered">
          <iframe title="JavaPlugin" width="1000" height="600"
            src="https://www.youtube.com/embed/z2dQezV-3-g">
          </iframe>
        </div>
        <div className="columns">
          <div className="column is-5 is-offset-1">
          
          </div>
          <div className="column is-5">

          </div>
        </div>
      </div>
      <div className="section" style={{ textAlign: "center" }}>
        
      </div>
      <div
        className="section"
        style={{ marginBottom: "3rem", textAlign: "center" }}
      >
        <div className="features">
        </div>

        <div className="columns is-multiline has-padding-10">
         

        </div>
      </div>
    </section>
  );
};

export default withRouter(Features);
