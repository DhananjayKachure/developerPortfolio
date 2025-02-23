import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar"
import { HtmlSvg, CssSvg, JavaScriptSvg, TypeScriptSvg, NodeJsSvg, ReactSvg, ExpressSvg, NextjsSvg, ViteSvg, GoSvg } from "@/components/Icons";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Dhananjay Sunil Kachure | Software Engineer Portfolio",
  icons: {
     icon: "/images/developerpng.png", // path to your favicon file in the public folder
    shortcut: "/images/developerpng.png"
  },
  description:
    "Dynamic Software Engineer with 2+ years of experience in media, OTT platforms, and API testing tools. Proficient in HTML, CSS, JavaScript, React.js, Next.js, and Node.js with expertise in server-side rendering and API optimization.",
  keywords:
    "Software Engineer, HTML, CSS, JavaScript, React.js, Next.js, Node.js, API Testing, SSR, Media, OTT, API Optimization, Web Developer, Frontend Developer",
  authors: [{ name: "Dhananjay Sunil Kachure" }],
  openGraph: {
    title: "Dhananjay Sunil Kachure | Software Engineer Portfolio",
    description:
      "Dynamic Software Engineer with 2+ years of experience in media, OTT platforms, and API testing tools.",
    siteName: "Dhananjay Sunil Kachure Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhananjay Sunil Kachure | Software Engineer Portfolio",
    description:
      "Dynamic Software Engineer with 2+ years of experience in media, OTT platforms, and API testing tools.", // Replace with your profile image URL
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
      GoSvg(30)
    ];
  
  
  
    const generateRandomSvgs = (count: number) => {
      const svgs = [];
      for (let i = 0; i < count; i++) {
        const randomIcon = randomIcons[Math.floor(Math.random() * randomIcons.length)];
        const randomSize = Math.random() * 50 + 20; // Random size between 20px and 70px
        const randomX = Math.random() * 100; // Random position (percent)
        const randomY = Math.random() * 100; // Random position (percent)
        const randomOpacity = Math.random() * 0.2 + 0.2; // Random opacity between 0.2 and 0.7
        const randomDuration = Math.random() * 3 + 2; // Random duration between 1s and 4s
        const randomDelay = Math.random() * 3; // Random delay up to 2s
  
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
              filter:"blur(1.5px)"
            }}
          >
            {randomIcon}
          </div>
        );
      }
      return svgs;
    };
  return (
    <html lang="en">
      <body className={``}>
  
           <div className="container">
                {generateRandomSvgs(20)} {/* Adjust the count as needed */}
                <header >
        <Navbar/>
            
        </header>
           
        {children}
        </div>
        <Script id="person-jsonld" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Dhananjay Sunil Kachure",
              "jobTitle": "Software Engineer",
              "image":"https://media.licdn.com/dms/image/v2/D5603AQFsai-ApAjHZA/profile-displayphoto-shrink_400_400/B56ZPU5fUMGkAg-/0/1734443661988?e=1746057600&v=beta&t=raXtI9W9rc2EnMzTK_qxemKtkPboU1sZO88bhyrO12w",
              "url": "https://www.linkedin.com/in/dhananjay-sunil-kachure/",
              "email": "mailto:dhananjaysunil.kachure@gmail.com",
              "sameAs": [
                "https://www.linkedin.com/in/dhananjay-sunil-kachure/",
                "https://github.com/DhananjayKachure"
              ],
              "description": "Dynamic Software Engineer with 2+ years of experience in media, OTT platforms, and API testing tools. Proficient in HTML, CSS, JavaScript, React.js, Next.js, and Node.js with expertise in server-side rendering and API optimization. Currently working at Engro Technologies on projects for Zee Media and Weyyak OTT Platform."
            }
          `}
        </Script>
      </body>
    </html>
  );
}
