import React from "react";
import { animated } from "@react-spring/web";

import "../Projectmodal.css";

const ProjectModal = ({ style, closeModal, project }) => {
  if (!project) return null; // Ensure project data exists before rendering
console.log(project,'soppks');
let bg="none"
if(project.iframeLink==="https://www.dnaindia.com/"){
 bg ="white"
}
  return (
    <>
      <animated.div style={style} className="modal">
        {/* <h3 className="modal-title">{project.name}</h3> */}
        <span className="modal-close-button" onClick={closeModal}>X</span>
        <div className="modal-iframe-container" style={{background:bg}}>
          <iframe
            src={project.iframeLink} // Dynamically set the iframe source
            title={project.name}
            width="100%"
            height="650px"
            style={{ border: "none" }}
            allowFullScreen
          ></iframe>
        </div>
        {/* <p className="modal-description">{project.description}</p> */}
        {/* <button className="modal-close-button" onClick={closeModal}>
          Close
        </button> */}
      </animated.div>
    </>
  );
};

export default ProjectModal;
