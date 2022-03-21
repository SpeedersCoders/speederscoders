import React from "react";
import { withRouter } from "react-router-dom";

const YouTube = ({ history }) => {
  return (
    <div style={{ minHeight: "100vh" }}>
      <section className="section">
        <div className="container">
        <div className="iframe-container" style={{ textAlign: "center" }}>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PL8MbEXLz6ZOKKssWpPO4gz46IeidEB0gK" title="SpeedersCoders" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
        </section>
        </div>
  );
};

export default withRouter(YouTube);
