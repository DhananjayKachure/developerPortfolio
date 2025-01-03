import React from 'react'
import "../styles/Skills.css"
import { HtmlSvg, CssSvg, JavaScriptSvg, TypeScriptSvg, NodeJsSvg, ReactSvg, ExpressSvg, NextjsSvg, ViteSvg } from './Icons';
const Skills = () => {
    const iconSize = 70
    const skills = [
      { name: "HTML", icon: HtmlSvg(iconSize) },
      { name: "CSS", icon: CssSvg(iconSize) },
      { name: "JavaScript", icon: JavaScriptSvg(iconSize) },
      { name: "TypeScript", icon: TypeScriptSvg(iconSize) },
      { name: "Node.js", icon: NodeJsSvg(iconSize) },
      {name: "React JS", icon:ReactSvg(iconSize)},
      {name: "Express Js", icon:ExpressSvg(iconSize)},
      {name: "Next JS", icon:NextjsSvg(iconSize)},
      {name: "Vite", icon:ViteSvg(iconSize)},

    ];
    
  return (
    <div className="skills-section dynamic-container ">
    <h1 className="section-title">Skills</h1>
    <div className="skills-container">
      {skills.map((skill, index) => (
        <div key={index} className="skill-item">
          <div className="skill-icon">{skill.icon}</div>
          {skill.name}
        </div>
      ))}
    </div>
  </div>
  )
}

export default Skills
