import React, {useState} from 'react';
import './navbarstyle.css'
import { Link } from 'react-scroll'
// icons
import {FaBars, FaTimes, FaFacebook, FaInstagram, FaGithub, FaLinkedin} from 'react-icons/fa' // need pretexts /fa or whatever is the right one
import {GiCarWheel} from 'react-icons/gi'
import {FiInstagram, FiFacebook} from 'react-icons/fi'

export default function Navbar() {
    const [nav, setNav] = useState(false); 
    const [slide, setSlide] = useState(false); // when to slide and when to not -> useState for that, only when button clicked
    
    const handleToggle = () => {
        setNav(!nav);
        setSlide(!slide); // so if false, then change to true on click and vice versa
    }

    return ( // tags are jsx not html, a lil diff
        <div className = "navbar"> 
            <div className = 'container'>
                <div className = {slide ? 'logo slide-right' : 'logo'}>
                    Pals, Spain
                </div>

                <ul className = {nav ? 'nav-menu active' : 'nav-menu'}> 
                    <li><a href = "/"><Link activeClass="active" to="intro" spy={true} smooth={true} duration={500}>Introduction</Link></a></li>
                    <li><a href = "/"><Link activeClass="active" to="commerce" spy={true} smooth={true} duration={500}>Commerce</Link></a></li>       
                    <li><a href = "/"><Link activeClass="active" to="conflict" spy={true} smooth={true} duration={500}>Conflict</Link></a></li>
                    <li><a href = "/"><Link activeClass="active" to="religion" spy={true} smooth={true} duration={500}>Religion</Link></a></li>
                    <li><a href = "/"><Link activeClass="active" to="sowhat" spy={true} smooth={true} duration={500}>So What</Link></a></li>
                    <div className = "mobile-menu">
                        <div className='social-icons'>
                            <FaLinkedin className = "icon"/> 
                            <FaGithub className = "icon"/>
                        </div>
                    </div>
                </ul>

                <ul className = 'nav-menu hide'>
                    <li><a href = "https://www.linkedin.com/in/ethan-shen1219a/"><FaLinkedin className = "icon" size={22}/></a></li>
                    <li><a href = "https://github.com/Skipppyyy"><FaGithub className = "icon" size={22}/></a></li> 
                </ul>

                <div className="hamburger" onClick={handleToggle}> 
                    {nav ? (<FaTimes size = {20} style={{color:'#ffffff'}}/>) : (<FaBars size = {20} style={{color:'#ffffff'}}/>)} {/*here {key: value} is prop, and because that is js object needs to be in own {}*/}
                </div>
            </div>
        </div>
    )
} 