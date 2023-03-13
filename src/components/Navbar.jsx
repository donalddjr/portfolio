import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook, FaLink} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/logo-dj.png'
import { Link as RouterLink } from 'react-scroll'
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';


import downloadResume from '../assets/docs/donaldsResume.pdf'


const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    let iconStyles = { color: "#08192f" };

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#08192f] text-gray-300'>
        <div>
            <a href='/'>
                <img src={Logo} alt="Logo Image" style={{width: '90px'}}/>
            </a>
        </div>

        {/* Menu: hidden under 750px (md) */}
        <ul className='hidden md:flex'> 
            <li>
                <ScrollLink to="home" smooth={true} duration={500}>
                Home
                </ScrollLink>
            </li>
            <li>
                <ScrollLink to="about" smooth={true} duration={500}>
                About
                </ScrollLink>
            </li>
            <li>
                <ScrollLink to="skills" smooth={true} duration={500}>
                Skills
                </ScrollLink>
            </li>
            <li>
                <ScrollLink to="work" smooth={true} duration={500}>
                Work
                </ScrollLink>
            </li>
            <li>
                <ScrollLink to="contact" smooth={true} duration={500}>
                Contact
                </ScrollLink>
            </li>
        </ul>


        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* Mobile Menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#08192f] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl '>
                <ScrollLink onClick={handleClick} to="home" smooth={true} duration={500}>
                Home
                </ScrollLink>
            </li>
            <li className='py-6 text-4xl '>
                <ScrollLink onClick={handleClick} to="about" smooth={true} duration={500}>
                About
                </ScrollLink>
            </li>
            <li className='py-6 text-4xl '>
                <ScrollLink onClick={handleClick} to="skills" smooth={true} duration={500}>
                Skills
                </ScrollLink>
            </li>
            <li className='py-6 text-4xl '>
                <ScrollLink onClick={handleClick} to="work" smooth={true} duration={500}>
                Work
                </ScrollLink>
            </li>
            <li className='py-6 text-4xl '>
                <ScrollLink onClick={handleClick} to="contact" smooth={true} duration={500}>
                Contact
                </ScrollLink>
            </li>
        </ul>

        {/* Social Icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            {/* hidden and only shows when larger screens (1024px) */}
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gradient-to-r from-orange-600 via-yellow-500 to-yellow-400'>
                    <a className='flex justify-between items-center w-full text-[#08192f]'
                    href="https://www.linkedin.com/in/donalddominguezjr/" target="_blank">
                        LinkedIn <FaLinkedin size={30} style={iconStyles}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gradient-to-r from-orange-600 via-yellow-500 to-yellow-400'>
                    <a className='flex justify-between items-center w-full text-[#08192f]'
                    href="https://github.com/donalddjr" target="_blank">
                        Github <FaGithub size={30}  style={iconStyles}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gradient-to-r from-orange-600 via-yellow-500 to-yellow-400'>
                    <a className='flex justify-between items-center w-full text-[#08192f]'
                    href="mailto:DonaldDominguezJr@gmail.com">
                        Email <HiOutlineMail size={30} style={iconStyles}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gradient-to-r from-orange-600 via-yellow-500 to-yellow-400'>
                    <a className='flex justify-between items-center w-full text-[#08192f]'
                    href={downloadResume} target="_blank">
                        Resume <BsFillPersonLinesFill size={30} style={iconStyles}/>
                    </a>
                </li>
            </ul>
        </div>

    </div>
  )
}

export default Navbar