import Portfolio from "./Portfolio";
import { HtmlSvg, CssSvg, JavaScriptSvg, TypeScriptSvg, NodeJsSvg, ReactSvg, ExpressSvg, NextjsSvg, ViteSvg } from "./Icons";


const MainPortFolio = () => {

  const randomIcons = [
    HtmlSvg(30),
    CssSvg(30),
    JavaScriptSvg(30),
    TypeScriptSvg(30),
    NodeJsSvg(30),
    ReactSvg(30),
    ExpressSvg(30),
    NextjsSvg(30),
    ViteSvg(30),
  ];



  const generateRandomSvgs = (count) => {
    const svgs = [];
    for (let i = 0; i < count; i++) {
      const randomIcon = randomIcons[Math.floor(Math.random() * randomIcons.length)];
      const randomSize = Math.random() * 50 + 20; // Random size between 20px and 70px
      const randomX = Math.random() * 100; // Random position (percent)
      const randomY = Math.random() * 100; // Random position (percent)
      const randomOpacity = Math.random() * 0.5 + 0.2; // Random opacity between 0.2 and 0.7
      const randomDuration = Math.random() * 3 + 2; // Random duration between 1s and 4s
      const randomDelay = Math.random() * 2; // Random delay up to 2s

      svgs.push(
        <div
          key={i}
          className="svgWrapper"
          style={{
            top: `${randomY}%`,
            left: `${randomX}%`,
            opacity: randomOpacity,
            width: `${randomSize}px`,
            height: `${randomSize}px`,
            animation: `svgBlink ${randomDuration}s infinite ${randomDelay}s`,
          }}
        >
          {randomIcon}
        </div>
      );
    }
    return svgs;
  };

  return (
    <>
      <div className="container">
        {generateRandomSvgs(20)} {/* Adjust the count as needed */}
      </div>
      <div style={{ display: "flex" }}>
        <Portfolio />
      </div>
    </>
  );
};

export default MainPortFolio;
