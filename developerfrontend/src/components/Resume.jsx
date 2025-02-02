
import React from "react";

const Resume = () => {
   const resume ={
    iframeLink:"/DhananjaySunilKachure.pdf"
   }
  return (
    <>
        <div className="projects-section">
      <h2 className="section-title">Resume</h2>
      <div className="projects-container">  
          <div className="project-item">
            <h3>click to view resume</h3>
           <a  href={resume.iframeLink} 
           target="_blank" 
          rel="noopener noreferrer"
           >
            view
            </a>
          </div>
      </div>
    </div>
      
      </>
  );
};

export default Resume;
