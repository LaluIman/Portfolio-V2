import React, { useEffect} from 'react';
import "./index.css";
import logo from "../src/assets/img/logo.png";
import arrow from "../src/assets/img/Arrow.svg";
import resume from "../src/assets/img/resume.svg";
import linkedin from "../src/assets/img/linkedin.svg";
import mvCV from "../src/assets/CV.pdf";
import instagram from "../src/assets/img/instagram.svg";
import github from "../src/assets/img/github.svg";
import projects from "../src/Projectdata";
import "react-tooltip/dist/react-tooltip.css";
import ScrollReveal from 'scrollreveal';

function App() {  
    useEffect(() => {
        const sr = ScrollReveal({
            reset: false,
            duration: 1000,
            delay: 200,
            easing: 'cubic-bezier(0.5, 0, 0, 1)',
            distance: '50px',
        });

        sr.reveal('.header-navbar, .header-navbar-left-item, .header-button ', { 
            origin: 'top',
            distance: '50px',
            opacity: 0,
            interval: 150,
            delay: 300,
            duration: 2500
        });

        sr.reveal('.home-title-name', { 
            origin: 'bottom',
            distance: '50px',
            opacity: 0,
            delay: 300,
            duration: 1200
        });
        
        sr.reveal('.home-subtitle-passion', { 
            origin: 'bottom',
            delay: 500,
            opacity: 0,
            duration: 1000
        });

        sr.reveal('.home-link-icon', { 
            origin: 'bottom',
            distance: '100px',
            opacity: 0,
            delay: 800
        });
        
        sr.reveal('.link-icon', { 
            origin: 'bottom',
            distance: '100px',
            opacity: 0,
            interval: 150,
            delay: 800
        });
        
        sr.reveal('.project-card', { 
            origin: 'bottom',
            distance: '30px',
            opacity: 0,
            interval: 200
        });
        
        sr.reveal('.Last-subtitle', { 
            origin: 'bottom',
            distance: '50px',
            delay: 100
        });
        
        sr.reveal('.Last-title', { 
            origin: 'bottom',
            distance: '50px',
            delay: 300
        });
        
        sr.reveal('.Last-button', { 
            scale: 0.5,
            opacity: 0,
            delay: 500,
            duration: 800
        });

        sr.reveal('footer, div[style*="textAlign: center"]', { 
            opacity: 0,
            delay: 300
        });

        return () => sr.destroy();
    }, []);
 
  return (
    <div>
      {/* Navbar */}
      <div className="header-navbar">
        <img draggable="false" className="header-logo" src={logo} alt="logo" />
        <div className="header-navbar-left">
          <a
            href="mailto:laluiman468@gmail.com"
            rel="noreferrer"
            className="header-navbar-left-item"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/lalu-iman-abdullah/"
            target="_blank"
            rel="noreferrer"
            className="header-navbar-left-item"
          >
            Linkedin
          </a>
          <button className="header-button lets-talk">
            Let's talk
            <img
              style={{ width: "20%", marginLeft: "5px" }}
              src={arrow}
              alt="arrow"
            />
          </button>
        </div>
      </div>
      {/* Home section */}
      <div className="home">
        <h1 className="home-title-name">Lalu Iman Abdullah</h1>
        <h2 className="home-subtitle-passion">Front-end developer</h2>
        <div className="home-link-icon">
          <a
            draggable="false"
            rel="noreferrer"
            target="_blank"
            className="link-icon"
            href={"https://www.linkedin.com/in/lalu-iman-abdullah/"}
          >
            <img src={linkedin} alt="LinkedIn" />
          </a>
          <a
            draggable="false"
            rel="noreferrer"
            target="_blank"
            className="link-icon"
            href={"https://www.instagram.com/lalui.man/"}
          >
            <img src={instagram} alt="Instagram" place="top"/>
          </a>
          <a
            draggable="false"
            rel="noreferrer"
            target="_blank"
            className="link-icon"
            href={"https://github.com/LaluIman"}
          >
            <img src={github} alt="GitHub" place="top"/>
          </a>
          <a
            draggable="false"
            rel="noreferrer"
            target="_blank"
            className="link-icon"
            href={mvCV}
            download
          >
            <img src={resume} alt="Resume" place="top"/>
          </a>
        </div>
      </div>
      <div className="project-box">
        {projects.map((projek) => (
          <div key={projek.id} className="project-card">
            <a target="_blank" rel="noreferrer" href={projek.link}>
              <img
                draggable="false"
                className="project-image"
                src={projek.img}
                alt=""
              />
              <div className="project-title-101">
                <div className="project-title-box">
                  <h2 className="project-title">{projek.title}</h2>
                </div>
                <div className="project-type-box">
                  {projek.type.map((type) => (
                    <p className="project-type" key={type}>
                      {type}
                    </p>
                  ))}
                </div>
              </div>
              <p className="project-description">{projek.description}</p>
            </a>
          </div>
        ))}
      </div>
      <div className="Last" style={{ textAlign: "center" }}>
        <h3 className="Last-subtitle">Love what you see?</h3>
        <h1 className="Last-title">Let's work together!</h1>
        <a
          href="mailto:laluiman468@gmail.com"
          className="Last-button"
          style={{
            display: "inline-block",
            width: "auto",
            padding: "10px 20px",
          }}
        >
          Press me!
        </a>
      </div>
      <div style={{ textAlign: "center" }}>
        <h1
          style={{
            fontSize: "1rem",
            fontWeight: "500",
            padding: "10px",
            color: "#838383aa",
          }}
        >
          ©️ 2025 Lalu Iman Abdullah Portfolio{" "}
        </h1>
      </div>
    </div>
  );
  
}



export default App;