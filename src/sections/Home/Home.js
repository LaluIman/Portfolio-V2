import './Home.css';
import instagram from '../../assets/img/instagram.svg';
import github from '../../assets/img/github.svg';
import resume from '../../assets/img/resume.svg';
import linkedin from '../../assets/img/linkedin.svg';
import mvCV from '../../assets/CV.pdf';
import { Slide, Fade } from "react-awesome-reveal";

function Home() {
  return (
    <div className="App">
      <div className='home'>
       <Fade triggerOnce damping={1}>
        <Slide direction='up' damping={0.1} triggerOnce>
         <h1 className='home-title-name'>Lalu Iman Abdullah</h1>
        </Slide>
       </Fade >
        <Fade damping={1} delay={1000} triggerOnce>
          <Slide direction='up' cascade delay={1000} triggerOnce>
            <h2 className='home-subtitle-passion'>Front-end developer</h2>
              <div className='home-link-icon'>
                <Fade cascade delay={1600} triggerOnce>
                 <a draggable='false' rel="noreferrer" target='_blank' className='link-icon' href={'https://www.linkedin.com/in/lalu-iman-abdullah/'}><img src={linkedin} alt='LinkedIn' /></a>
                 <a draggable='false' rel="noreferrer" target='_blank' className='link-icon' href={'https://www.instagram.com/lalui.man/'}><img src={instagram} alt='Instagram' /></a>
                 <a draggable='false' rel="noreferrer" target='_blank' className='link-icon' href={'https://github.com/LaluIman'}><img src={github} alt='GitHub' /></a>
                 <a draggable='false' rel="noreferrer" target='_blank' className='link-icon' href={mvCV} download><img src={resume} alt='Resume' /></a>
                </Fade>
              </div>
          </Slide>
        </Fade>
      </div>
    </div>
  );
}

export default Home;
