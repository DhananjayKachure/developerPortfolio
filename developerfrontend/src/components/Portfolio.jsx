'use client';
import React, { useRef, useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web"; 
import "../styles/Portfolio.css"; 
import About from "./About";
import Skills from "./Skills";
import Project from "./Project";
import Resume from "@/components/Resume"
import { waveSvg, rocketSvg } from "./Icons";
import Contact from "./Contact";
import GameSection from "./GameSection"
// import porticon from "@/app/developerpng.png"
import {
  HtmlSvg,
  CssSvg,
  JavaScriptSvg,
  TypeScriptSvg,
  NodeJsSvg,
  ReactSvg,
  ExpressSvg,
  NextjsSvg,
  ViteSvg,
} from "./Icons";



const openSource = [
  {name:"React", description: "Dive into concepts of React JS", link:"https://github.com/DhananjayKachure/React_learn",cansee:true},
  { name: "Node.js", description: "Dive into Node.js basics.", link: "https://github.com/DhananjayKachure/Nodejs",cansee:true },
  { name: "Go Lang", description: "Explore the fundamentals of Go.", link: "https://github.com/DhananjayKachure/go_learn",cansee:true },
  {name:"WisdomINsight", description: "news site for Knowledge", link:"https://github.com/DhananjayKachure",cansee:false}
];

const Portfolio = () => {
  const containerRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [waves, setWaves] = useState([]);
  const [rocketId, setRocketId] = useState(0);
  const [device, setDevice] = useState("desktop");
  const [rocketPosition, setRocketPosition] = useSpring(() => ({
    transform: "translateY(0px)",
    config: { tension: 200, friction: 30 },
  }));

  let randomIcons = [
    HtmlSvg(20),
    CssSvg(18),
    JavaScriptSvg(17),
    TypeScriptSvg(16),
    NodeJsSvg(15),
    ReactSvg(14),
    ExpressSvg(13),
    NextjsSvg(12),
    ViteSvg(12),
  ];

  useEffect(() => {
    if (window.innerWidth < 768) {
      setDevice("mobile");
    } else {
      setDevice("desktop");
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollPosition = containerRef.current.scrollTop / window.innerHeight;

        // Update page index
        const newPage = Math.round(scrollPosition);
        if (newPage !== currentPage) {
          setCurrentPage(newPage);

          // Add/remove waves based on scrolling direction
          if (newPage > currentPage) {
            setWaves((prevWaves) => [...prevWaves, waveSvg()]);
          } else {
            setWaves((prevWaves) => prevWaves.slice(0, -1));
          }
        }

        // Adjust rocket position and id
        const newRocketPosition = scrollPosition * 150;
        setRocketPosition({
          transform: `translateY(${newRocketPosition < 0 ? 1 : -newRocketPosition}px)`,
        });
        setRocketId(Math.floor(scrollPosition));
      }
    };

    const containerNode = containerRef.current;
    containerNode.addEventListener("scroll", handleScroll);

    return () => {
      containerNode.removeEventListener("scroll", handleScroll);
    };
  }, [currentPage, setRocketPosition]);

  if (rocketId === 1) {
    randomIcons = randomIcons.slice(0, 3);
  } else if (rocketId === 2) {
    randomIcons = randomIcons.slice(0, 5);
  } else if (rocketId === 3) {
    randomIcons = randomIcons.slice(0, 7);
  } else {
    randomIcons = randomIcons.slice(0);
  }



  return (
    <div className="portfolio-container" ref={containerRef} >
      {/* Navigation */}


      <div id="about" className="page dynamic-container" >
        <About />
      </div>
      <div id="skills" className="page dynamic-container" >
        <Skills />
      </div>
      <div id="play" className="page dynamic-container" >
      <GameSection/>
      
      </div>
      <div id="work" className="page dynamic-container" >
      <Project project="client" />
       
      </div>
      {/* <div id="section-4" className="page dynamic-container" >
      <Project project="personal" />
      </div> */}
      <div id="projects" className="page dynamic-container" >
        <div className="open-source-section">
          <h2 className="section-title">Projects / Open Source</h2>
          <div className="projects-container">
            {openSource.map((project, index) => (
              <div key={index} className="project-item">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                 {project.cansee ?" View Project":"comming soon..."}  
                 
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div id="resume">
        <Resume/>
      </div>
      <div id="contact" className="page dynamic-container" >
        <Contact />
      </div>

      {/* Rocket Animation */}
      <animated.div className="rocket-container" style={rocketPosition}>
        {rocketSvg()}
        {rocketId > 0 && (
          <div className="roacketwavecontainer">
            {randomIcons.map((item, index) => (
              <div key={`rocket${index}`}>{item}</div>
            ))}
          </div>
        )}
      </animated.div>

      {/* Waves Section */}
      <div className="waves-container">
        {waves.map((wave, index) => (
          <div key={`waves${index}`} className={`wavesvg wave${index}`}>
            {wave}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
