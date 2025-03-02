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
          "Making news websites faster than breaking news itself! Optimized performance, fixed legacy code, and built microsites for events that make the internet lose its mind.",
        link: "https://github.com/user/project1",
      },
      {
        name: "DNA India",
        iframeLink: "https://www.dnaindia.com/",
        image: "/images/dnalogo.png",
        description:
          "News so smooth, it loads before you blink! Revamped the site, improved Core Web Vitals, and ensured zero hiccups during high-traffic madness.",
        link: "https://github.com/user/project2",
      },
      {
        name: "Weyyak OTT",
        iframeLink: "https://weyyak.com/en",
        image: "/images/weyyaklogo.png",
        description:
          `Because "just one more episode" is a lifestyle! Developed video pages, personalized content, and seamless streaming so your binge sessions never suffer.`,
        link: "https://github.com/user/project2",
      },
      {
        name: "Remote Power Teams",
        iframeLink: "https://remotepowerteams.com",
        image: "/images/rptlogo.png",
        description:
          "Job hunting, but with fewer headaches! Built a dynamic job platform with search filters, resume uploads, and dashboards to make hiring (or getting hired) a breeze.",
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
          "Making news websites faster than breaking news itself! Optimized performance, fixed legacy code, and built microsites for events that make the internet lose its mind.",
        link: "https://github.com/user/project1",
      },
      {
        name: "DNA India",
        iframeLink: "https://www.dnaindia.com/",
        image: "/images/dnalogo.png",
        description:
          "News so smooth, it loads before you blink! Revamped the site, improved Core Web Vitals, and ensured zero hiccups during high-traffic madness.",
        link: "https://github.com/user/project2",
      },
      {
        name: "Weyyak OTT",
        iframeLink: "https://weyyak.com/en",
        image: "/images/weyyaklogo.png",
        description:
          `Because "just one more episode" is a lifestyle! Developed video pages, personalized content, and seamless streaming so your binge sessions never suffer.`,
        link: "https://github.com/user/project2",
      },
      {
        name: "Remote Power Teams",
        iframeLink: "https://remotepowerteams.com",
        image: "/images/rptlogo.png",
        description:
          "Job hunting, but with fewer headaches! Built a dynamic job platform with search filters, resume uploads, and dashboards to make hiring (or getting hired) a breeze.",
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
      <h2 className="section-title">{projectTitle}</h2>
      <p className="subtitle">Proof that I actually do stuff ! Click  <strong>‘Show Details’</strong></p>
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
