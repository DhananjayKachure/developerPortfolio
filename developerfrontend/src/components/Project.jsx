'use client'
import React, { useState } from "react";
import ProjectModal from "./ProjectModal";
import Image from 'next/image';

const Project = ({ project = "" }) => {
  const [selectedProject, setSelectedProject] = useState(null); // To track the selected project for modal
  const [modalVisible, setModalVisible] = useState(false); // Track modal visibility

  let projects = [];
  let projectTitle = "";

  // Set the project data based on the "project" prop
  if (project === "client") {
    projectTitle = "Work Experience";
    projects = [
      {
        name: "ZeeNews",
        iframeLink: "https://zeenews.india.com/",
        image: "/images/zeelogo.png",
        description:
          "Developed the Zee News website with Next.js 14, optimizing SSR for performance and Core Web Vitals. Migrated legacy code and built microsites for high-traffic events like the World Cup, elections, and the Olympics.",
        link: "https://github.com/user/project1",
      },
      {
        name: "DNA INDIA",
        iframeLink: "https://www.dnaindia.com/",
        image: "/images/dnalogo.png",
        description:
          "Migrated the DNA INDIA to Next.js 14, optimizing SSR for performance and Core Web Vitals. Refactored legacy code and built microsites for high-traffic events like the World Cup, elections, and the Olympics.",
        link: "https://github.com/user/project2",
      },
      {
        name: "Weyyak OTT",
        iframeLink: "https://weyyak.com/en",
        image: "/images/weyyaklogo.png",
        description:
          "Developed the Weyyak OTT platform using React, implementing key OTT features such as the homepage, video detail pages, and video listing. Managed video functionality, including Continue Watching and personalized content based on user region. Delivered tailored experiences for subscribed, registered, and guest users, ensuring seamless content delivery and navigation.",
        link: "https://github.com/user/project2",
      },
      {
        name: "Remote Power Teams",
        iframeLink: "https://remotepowerteams.com",
        image: "/images/rptlogo.png",
        description:
          "Developed the front end of the RPT website, a dynamic job-seeking platform, using React.js to deliver a seamless and responsive user experience. Integrated features such as advanced job search, filtering, resume uploads, and personalized dashboards for both job seekers and employers.",
        link: "https://github.com/user/project2",
      },
    ];
  } else {
    projectTitle = "Personal Project";
    projects = [
      {
        name: "ZeeNews",
        iframeLink: "https://zeenews.india.com/",
        image: "/images/zeelogo.png",
        description:
          "Developed the Zee News website using Next.js 14, optimizing server-side rendering to enhance performance and improve Core Web Vitals. Migrated legacy code, ensured error-free functionality, and delivered microsites for high-traffic events like the World Cup, elections, and the Olympics.",
        link: "https://github.com/user/project1",
      },
      {
        name: "DNA India",
        iframeLink: "https://www.dnaindia.com/",
        image: "/images/dnalogo.png",
        description:
          "Developed the Zee News website using Next.js 14, optimizing server-side rendering to enhance performance and improve Core Web Vitals. Migrated legacy code, ensured error-free functionality, and delivered microsites for high-traffic events like the World Cup, elections, and the Olympics.",
        link: "https://github.com/user/project2",
      },
      {
        name: "Weyyak OTT",
        iframeLink: "https://weyyak.com/en",
        image: "/images/weyyaklogo.png",
        description:
          "Developed the Weyyak OTT platform using React, building key features like the homepage, video pages, and personalized content. Managed video functionality, including Continue Watching and regional personalization, for a seamless user experience",
        link: "https://github.com/user/project2",
      },
      {
        name: "Remote Power Teams",
        iframeLink: "https://remotepowerteams.com",
        image: "/images/rptlogo.png",
        description:
          "Built the RPT job-seeking platform's front end with React.js, implementing advanced search, filtering, resume uploads, and personalized dashboards for job seekers and employers.",
        link: "https://github.com/user/project2",
      },
    ];
  }

  const handleProjectClick = (project) => {
    setSelectedProject(project); // Set the selected project to show in the modal
    setModalVisible(true); // Show the modal
  };

  return (
    <div className="projects-section">
      <h1 className="section-title">{projectTitle}</h1>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <Image src={project.image} width={100} height={100} alt="icon" />
            <h3>{project.name}</h3>
            <p>{project?.description||""}</p>
            <div className="project-link" onClick={() => handleProjectClick(project)}>
              Show Details
            </div>
          </div>
        ))}
      </div>

      {/* Render Modal if modalVisible is true */}
      {modalVisible && (
        <ProjectModal
          closeModal={() => setModalVisible(false)} // Close modal function
          project={selectedProject} // Pass the selected project to the modal
        />
      )}
    </div>
  );
};

export default Project;
