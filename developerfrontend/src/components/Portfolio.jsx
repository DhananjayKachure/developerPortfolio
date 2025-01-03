'use client'
import React, { useRef, useState, useEffect } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useSpring, animated } from "@react-spring/web"; // Import useSpring and animated from react-spring
import "../styles/Portfolio.css"; // Import the CSS file
import About from "./About";
import Skills from "./Skills";
import Project from "./Project";
import { waveSvg, rocketSvg } from "./Icons";
import Contact from "./Contact";
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
  {
    name: "Open Source Project 1",
    description: "An open-source project to help with X.",
    link: "https://github.com/user/open-source-project1",
  },
  {
    name: "Open Source Project 2",
    description: "Another open-source project focusing on Y.",
    link: "https://github.com/user/open-source-project2",
  },
];

const Portfolio=()=> {
  const parallaxRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [waves, setWaves] = useState([]); // Track wave SVGs
  const [rocketId, setRocketId] = useState(0); // Track rocket id condition
  const [device, setDevice] = useState("desktop");
  const [rocketPosition, setRocketPosition] = useSpring(() => ({
    transform: "translateY(0px)", // Initial position of the rocket
    config: { tension: 200, friction: 20 },
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
  useEffect(()=>{
   
      if (window.innerWidth < 768) {
        setDevice("mobile");}
      else {
        setDevice("desktop");
      }
  
  },[])
  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const container = parallaxRef.current.container.current;
        const scrollPosition = container.scrollTop / container.clientHeight;

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

          transform: `translateY(${newRocketPosition<0?1:-newRocketPosition}px)`,
        });
        setRocketId(Math.floor(scrollPosition)); // Update rocket id
      }
    };

    const parallaxNode = parallaxRef.current.container.current;
    parallaxNode.addEventListener("scroll", handleScroll);

    return () => {
      parallaxNode.removeEventListener("scroll", handleScroll);
    };
  }, [currentPage, setRocketPosition]);
  if(rocketId===1){
    randomIcons = randomIcons.slice(0,3)
  }else if(rocketId===2){
    randomIcons = randomIcons.slice(0,5)
  }else if(rocketId===3) {
    randomIcons = randomIcons.slice(0,7)
  }else{
    randomIcons=randomIcons.slice(0)
  }
  return (
    <div className="portfolio-container" style={{ overflow: "hidden" }}>
      <Parallax pages={6} ref={parallaxRef}>
        <ParallaxLayer offset={0} speed={device=="mobile"?0:0.5 } className="parallax-layer blur">
          <About />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={device=="mobile"?0:0.5} className="parallax-layer blur">
          <Skills />
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={device=="mobile"?0:0.5} className="parallax-layer blur">
          <Project project="client" />
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={device=="mobile"?0:0.5} className="parallax-layer blur">
          <Project project="personal" />
        </ParallaxLayer>
        <ParallaxLayer offset={4} speed={device=="mobile"?0:0.5} className="parallax-layer">
          <div className="open-source-section">
            <h1 className="section-title">GitHub / Open Source</h1>
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
                    View Project
                  </a>
                </div>
              ))}
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={5} speed={0.5} className="parallax-layer">
          <Contact />
        </ParallaxLayer>
      </Parallax>

      {/* Rocket Section */}
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
}
export default  Portfolio