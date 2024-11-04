import './Last.css'
import { Slide, Fade } from "react-awesome-reveal";

function Last(){
    return(
        <div className="Last" style={{textAlign: 'center'}}>
           <Fade triggerOnce>
             <Slide triggerOnce direction='up'>
                 <h3 className='Last-subtitle'>Love what you see?</h3>
                 <h1 className='Last-title'>Let's work together!</h1>
                 <a href='mailto:laluiman468@gmail.com' className='Last-button' style={{display: 'inline-block', width: 'auto', padding: '10px 20px'}}>Press me!</a>
             </Slide>
           </Fade>
        </div>
    )
}

export default Last;