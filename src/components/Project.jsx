import React, { useState } from "react";
import { useTransition } from "@react-spring/web";
import ProjectModal from "./ProjectModal";
import { dnaSvg, rptSvg, weyyakSvg } from "../Icons";

const Project = ({ project = "" }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null); // To track the selected project for modal
  const transitions = useTransition(modalVisible, {
    from: { opacity: 0, transform: "translateY(-40px)" },
    enter: { opacity: 1, transform: "translateY(0px)" },
    leave: { opacity: 0, transform: "translateY(-40px)" },
  });

  let projects = [];
  let projectTitle = "";

  if (project === "client") {
    projectTitle = "Work Experience";

    projects = [
      {
        name: "ZeeNews",
        iframeLink:"https://zeenews.india.com/",
        image: dnaSvg(),
        description:
          "Developed the Zee News website using Next.js 14, optimizing server-side rendering to enhance performance and improve Core Web Vitals.Migrated legacy code, ensured error-free functionality, and delivered microsites for high-traffic events like the World Cup, elections, and the Olympics.",
        link: "https://github.com/user/project1",
      },
      {
        name: "DNA India",
        iframeLink:"https://www.dnaindia.com/",
        image: dnaSvg(),
        description:
          "Developed the Zee News website using Next.js 14, optimizing server-side rendering to enhance performance and improve Core Web Vitals.Migrated legacy code, ensured error-free functionality, and delivered microsites for high-traffic events like the World Cup, elections, and the Olympics.",
        link: "https://github.com/user/project2",
      },
      {
        name: "Weyyak OTT",
        iframeLink:"https://weyyak.com/en",
        image: weyyakSvg(),
        description:
          "Developed the Weyyak OTT platform using React, implementing key OTT features such as the homepage, video detail pages, and video listing. Managed video functionality, including Continue Watching and personalized content based on user region. Delivered tailored experiences for subscribed, registered, and guest users, ensuring seamless content delivery and navigation.",
        link: "https://github.com/user/project2",
      },
      {
        name: "Remote Power Teams",
        iframeLink:"https://remotepowerteams.com",
        image: rptSvg(),
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
        iframeLink:"https://zeenews.india.com/",
        image: dnaSvg(),
        description:
          "Developed the Zee News website using Next.js 14, optimizing server-side rendering to enhance performance and improve Core Web Vitals.Migrated legacy code, ensured error-free functionality, and delivered microsites for high-traffic events like the World Cup, elections, and the Olympics.",
        link: "https://github.com/user/project1",
      },
      {
        name: "DNA India",
        iframeLink:"https://www.dnaindia.com/",
        image: dnaSvg(),
        description:
          "Developed the Zee News website using Next.js 14, optimizing server-side rendering to enhance performance and improve Core Web Vitals.Migrated legacy code, ensured error-free functionality, and delivered microsites for high-traffic events like the World Cup, elections, and the Olympics.",
        link: "https://github.com/user/project2",
      },
      {
        name: "Weyyak OTT",
        iframeLink:"https://weyyak.com/en",
        image: weyyakSvg(),
        description:
          "Developed the Weyyak OTT platform using React, implementing key OTT features such as the homepage, video detail pages, and video listing. Managed video functionality, including Continue Watching and personalized content based on user region. Delivered tailored experiences for subscribed, registered, and guest users, ensuring seamless content delivery and navigation.",
        link: "https://github.com/user/project2",
      },
      {
        name: "Remote Power Teams",
        iframeLink:"https://remotepowerteams.com",
        image: rptSvg(),
        description:
          "Developed the front end of the RPT website, a dynamic job-seeking platform, using React.js to deliver a seamless and responsive user experience. Integrated features such as advanced job search, filtering, resume uploads, and personalized dashboards for both job seekers and employers.",
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

            {project.image}
            <h3>{project.name}</h3>
            {/* <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project
            </a> */}
            <button onClick={() => handleProjectClick(project)}>
              Show Details
            </button>
          </div>
        ))}
      </div>

      {/* Render Modal if modalVisible is true */}
      {transitions(
        (style, item) =>
          item && (
            
            <ProjectModal
              style={style}
              closeModal={() => setModalVisible(false)}
              project={selectedProject} // Pass the selected project to the modal
            />
          )
      )}
    </div>
  );
};

export default Project;
