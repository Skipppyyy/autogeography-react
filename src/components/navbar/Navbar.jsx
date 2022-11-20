import React, {useState} from 'react';
import './navbarstyle.css'
// icons
import {FaBars, FaTimes, FaFacebook, FaInstagram} from 'react-icons/fa' // need pretexts /fa or whatever is the right one
import {GiCarWheel} from 'react-icons/gi'
import {FiInstagram, FiFacebook} from 'react-icons/fi'

export default function Navbar() {
    const [nav, setNav] = useState(false); 
    const handleNav = () => setNav(!nav);

    return ( // tags are jsx not html, a lil diff
        <div className = "navbar"> 
            <div className = 'container'>
                <div className = 'logo'>
                    Pals, Spain
                </div>

                <ul className = {nav ? 'nav-menu active' : 'nav-menu'}> 
                    <li><a href = "/">Introduction</a></li>
                    <li><a href = "/">Religion</a></li>
                    <li><a href = "/">Commerce</a></li>
                    <li><a href = "/">Conflict</a></li>
                    <li><a href = "/">Why This Matters</a></li>

                    <div className = "mobile-menu">
                        <button>Shop</button>
                        <button>Account</button>
                        <div className='social-icons'>
                            <FaFacebook className = "icon"/> 
                            <FaInstagram className = "icon"/>
                            <GiCarWheel className = "icon"/>
                        </div>
                    </div>
                </ul>

                <ul className = 'nav-menu hide'>
                    <li><a href = "/">Shop</a></li>
                    <li><a href = "/">Account</a></li> 
                </ul>

                <div className="hamburger" onClick={handleNav}> 
                    {nav ? (<FaTimes size = {20} style={{color:'#ffffff'}}/>) : (<FaBars size = {20} style={{color:'#ffffff'}}/>)} {/*here {key: value} is prop, and because that is js object needs to be in own {}*/}
                </div>
            </div>
        </div>
    )
} 