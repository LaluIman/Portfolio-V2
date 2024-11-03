import './Project.css';
import ArrowDirect from '../../assets/img/arrowdirect.svg';
import projects from '../../sections/Projects/Projectdata.js'; 
import { Fade } from "react-awesome-reveal";

function Project() {
    return (
        <div className="project-box">
           <Fade cascade delay={0} fraction={0.01} triggerOnce>
           {projects.map((projek) =>
                <div key={projek.id} className='project-card'>
                    <a target='_blank' rel="noreferrer" href={projek.link}>
                        <img draggable="false" className='project-image' src={projek.img} alt='' />
                        <div className='project-title-101'>
                            <div className='project-title-box'>
                                <h2 className='project-title'>{projek.title}</h2>
                                <img className='project-arrow-title' src={ArrowDirect} alt='arrow direct' />
                            </div>
                            <div className='project-type-box'>
                                {projek.type.map((type) =>
                                    <p className='project-type' key={type}>{type}</p>
                                )}
                            </div>
                        </div>
                        <p className='project-description'>{projek.description}</p>
                    </a>
                </div>
            )}
           </Fade>
        </div>
    );
}

export default Project;