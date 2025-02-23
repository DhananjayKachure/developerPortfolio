import React from "react";
import styles from "@/styles/Projectmodal.module.css";

const ProjectModal = ({ closeModal, project }) => {
  if (!project) return null; // Ensure project data exists before rendering

  let backgroundColor = "none";
  if (project.iframeLink === "https://www.dnaindia.com/") {
    backgroundColor = "white";
  }

  return (
    <>
      {/* Modal Background */}
      <div className={styles.modalBg} onClick={closeModal}></div>

      {/* Modal Content */}
      <div className={styles.modal}>
        <button className={styles.modalCloseButton} onClick={closeModal}>
          X
        </button>
        <div
          className={styles.modalIframeContainer}
          style={{ backgroundColor }}
        >
          <iframe
            src={project.iframeLink} // Dynamically set the iframe source
            title={project.name}
            width="100%"
            height="100%"
            style={{ border: "none" }}
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default ProjectModal;
