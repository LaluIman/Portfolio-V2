import './Header.css'
import logo from '../../assets/img/logo.png';
import arrow from '../../assets/img/Arrow.svg';
import { Slide, Fade } from "react-awesome-reveal";


function Header(){
    return(
            <div >
                <Fade className="header-navbar" triggerOnce delay={3000}>
                    <Slide direction='down' triggerOnce delay={3000}>
                        <img draggable='false' className='header-logo' src={logo} alt='logo' />
                        <div className='header-navbar-left'>
                            <a href='mailto:laluiman468@gmail.com' rel="noreferrer" className='header-navbar-left-item'>Email</a>
                            <a href='https://www.linkedin.com/in/lalu-iman-abdullah/' target='_blank' rel="noreferrer" className='header-navbar-left-item'>Linkedin</a>
                            <button className='header-button lets-talk'>Let's talk <img style={{width: '20%', marginLeft: '5px'}} src={arrow} alt='arrow' /></button>
                        </div>
                    </Slide>
                </Fade>
            </div>
    )
};

export default Header;