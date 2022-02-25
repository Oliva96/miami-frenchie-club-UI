import React, { useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { HiX} from 'react-icons/hi';
import { BiMenuAltRight } from 'react-icons/bi';
import { motion } from 'framer-motion';

const Header = () => {

  const [toggle, setToggle] = useState(false);
  let location = useLocation();

  return (
    <nav className='app__navbar'>
        <RouterLink to='/' style={{display: 'flex', alignItems: 'center'}}>
            <img style={{width: '20vw', height: '4vw'}}
                src="img/LOGO_Website_1.png" alt=""/>
        </RouterLink>

        <div className="app__navbar-container">
        {
            location.pathname === '/buy' ? 
            (
                <ul>
                    <li><RouterLink className="app__navbar-link" to="/">Home</RouterLink></li>
                    <li style={{display: 'flex', alignItems: 'center', marginRight: '0'}}>
                        <button className="buttomNav">
                            Connect Wallet
                        </button>
                    </li>
                </ul>
            ) :
            (
                <ul>
                    <li><RouterLink className="app__navbar-link" to="/buy">Buy</RouterLink></li>

                    <li><ScrollLink smooth className="app__navbar-link" to="about">About</ScrollLink></li>

                    <li><ScrollLink smooth className="app__navbar-link" to="roadmap">Roadmap</ScrollLink></li>

                    <li><ScrollLink smooth className="app__navbar-link"  to="team">Team</ScrollLink></li>
                </ul>
            )
        }
        </div>
        <div className='app__navbar-menu'>
            <BiMenuAltRight onClick={() => setToggle(true)}/>   
            {toggle && (
                <motion.div
                    whileInView={{ x: [300, 0]}}
                    transition={{duration: 0.85, ease: 'easeOut'}}
                >
                    <HiX onClick={() => setToggle(false)}/>
                    {
                        location.pathname === '/buy' ? 
                        (
                            <ul>
                                <li onClick={() => setToggle(false)}>
                                    <RouterLink className="app__navbar-link" to="/">Home</RouterLink>
                                </li>
                                <li onClick={() => setToggle(false)} 
                                style={{display: 'flex', alignItems: 'center', marginRight: '0'}}
                                >
                                <button className="buttomNav">
                                    Connect Wallet
                                </button>
                                </li>
                            </ul>
                        ) : (
                            <ul>
                                <li onClick={() => setToggle(false)}>
                                    <RouterLink className="app__navbar-link" to="/buy">Buy</RouterLink>
                                </li>

                                <li>
                                    <ScrollLink 
                                        onClick={() => setToggle(false)} 
                                        smooth className="app__navbar-link" to="about">About</ScrollLink>
                                </li>

                                <li>
                                    <ScrollLink 
                                        onClick={() => setToggle(false)}
                                        smooth className="app__navbar-link" to="roadmap">Roadmap</ScrollLink>
                                </li>

                                <li>
                                    <ScrollLink 
                                        onClick={() => setToggle(false)}
                                        smooth className="app__navbar-link"  to="team">Team</ScrollLink>
                                </li>
                            </ul>
                        )
                    }
                </motion.div>
            )} 
        </div>
    </nav>
  )
}

export default Header