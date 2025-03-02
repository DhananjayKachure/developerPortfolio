'use client';
import React, { useRef, useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web"; 
import "../styles/Portfolio.css"; 
import About from "./About";
import Skills from "./Skills";
import Project from "./Project";
import Resume from "@/components/Resume";
import Contact from "./Contact";
import GameSection from "./GameSection";
import { waveSvg, rocketSvg } from "./Icons";
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
  { name: "React", description: "Dive into concepts of React JS", link: "https://github.com/DhananjayKachure/React_learn", cansee: true },
  { name: "Node.js", description: "Dive into Node.js basics.", link: "https://github.com/DhananjayKachure/Nodejs", cansee: true },
  { name: "Go Lang", description: "Explore the fundamentals of Go.", link: "https://github.com/DhananjayKachure/go_learn", cansee: true },
  { name: "WisdomINsight", description: "News site for knowledge", link: "https://github.com/DhananjayKachure", cansee: false }
];

const Portfolio = () => {
  const containerRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [waves, setWaves] = useState([]);
  const [rocketId, setRocketId] = useState(0);
  const [scrollMessage, setScrollMessage] = useState(false);

  const [rocketPosition, setRocketPosition] = useSpring(() => ({
    transform: "translateY(0px)",
    config: { tension: 200, friction: 30 },
  }));

  useEffect(() => {
    const scrollTimeout = setTimeout(() => setScrollMessage(true), 2000);
    return () => clearTimeout(scrollTimeout);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollMessage(false);
      if (containerRef.current) {
        const scrollPosition = containerRef.current.scrollTop / window.innerHeight;
        const newPage = Math.round(scrollPosition);
        if (newPage !== currentPage) {
          setCurrentPage(newPage);
          setWaves((prevWaves) => (newPage > currentPage ? [...prevWaves, waveSvg()] : prevWaves.slice(0, -1)));
        }
        setRocketPosition({ transform: `translateY(${-Math.max(scrollPosition * 150, 1)}px)` });
        setRocketId(Math.floor(scrollPosition));
      }
    };

    const containerNode = containerRef.current;
    containerNode.addEventListener("scroll", handleScroll);
    return () => containerNode.removeEventListener("scroll", handleScroll);
  }, [currentPage, setRocketPosition]);

  const filteredIcons = [HtmlSvg(20), CssSvg(18), JavaScriptSvg(17), TypeScriptSvg(16), NodeJsSvg(15), ReactSvg(14), ExpressSvg(13), NextjsSvg(12), ViteSvg(12)].slice(0, rocketId === 0 ? 9 : rocketId * 2 + 1);

  return (
    <div className="portfolio-container" ref={containerRef}>
      <div id="about" className="page dynamic-container"><About /></div>
      <div id="skills" className="page dynamic-container"><Skills /></div>
      <div id="play" className="page dynamic-container"><GameSection /></div>
      <div id="work" className="page dynamic-container"><Project project="client" /></div>
      <div id="projects" className="page dynamic-container">
        <div className="open-source-section">
          <h2 className="section-title">Projects / Open Source</h2>
          <div className="projects-container">
            {openSource.map((project, index) => (
              <div key={index} className="project-item">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                  {project.cansee ? "View Project" : "Coming Soon..."}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div id="resume"><Resume /></div>
      <div id="contact" className="page dynamic-container"><Contact /></div>

      {/* Rocket Animation */}
      <animated.div className="rocket-container" style={rocketPosition}>
        {rocketSvg()}
        {rocketId > 0 && (
          <div className="roacketwavecontainer">
            {filteredIcons.map((item, index) => (
              <div key={`rocket${index}`}>{item}</div>
            ))}
          </div>
        )}
        {scrollMessage && <span className="messagetip">🚀Fueling the engines... Ignite the journey! SCROLL to take off! 🚀</span>}
      </animated.div>

      {/* Waves Section */}
      <div className="waves-container">
        {waves.map((wave, index) => (
          <div key={`wave${index}`} className={`wavesvg wave${index}`}>{wave}</div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
