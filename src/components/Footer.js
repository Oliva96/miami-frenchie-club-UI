import React from 'react';
import { BsDiscord, BsTwitter } from 'react-icons/bs';
import { FaInstagramSquare } from 'react-icons/fa';

import { Link as ScrollLink } from 'react-scroll';
import { Link, useLocation } from 'react-router-dom';

const scrollNav = {
    display: 'flex',
    width: '40vw',
    justifyContent: 'space-around',
    margin: '0 auto',
    marginTop: '3vw'
}
const scrollItem = {
    fontFamily: 'ARCO',
    cursor: 'pointer',
    color: 'black',
    textDecoration: 'none',
    fontSize: '1.5vw',
    margin: '0',
}
const foot = {
    backgroundColor: '#fcceeb', 
    color: 'black', 
    fontWeight: '500',
    fontSize: '2vw', 
    marginTop: '2vw'
}

const Footer = () => {

  let location = useLocation();

  return (
    <>
    <div className='footer'>
        <div>
            <img src='img/LOGO_Website_1.png' alt='' style={{width: '25vw', height: '4.5vw'}} />
            <div >
                <BsTwitter className='footerItem'/>
                <BsDiscord className='footerItem'/>
                <FaInstagramSquare className='footerItem'/>
            </div>
        </div>
        <div style={{display: 'block', justifyContent: 'center'}}>
            {
                location.pathname === '/buy' ? 
                (
                    <div style={scrollNav}>
                        <Link to='/' style={scrollItem} className='footerItem'>Home</Link>
                    </div>
                ) : (
                    <div style={scrollNav}>
                        <Link to='/buy' style={scrollItem} className='footerItem'>Buy</Link>
                        <ScrollLink smooth to='about' style={scrollItem} className='footerItem'>about</ScrollLink>
                        <ScrollLink smooth to='roadmap' style={scrollItem} className='footerItem'>roadmap</ScrollLink>
                        <ScrollLink smooth to='team' style={scrollItem} className='footerItem'>team</ScrollLink>
                    </div>
                )
            }
            
            <div style={scrollNav}>
                <Link to='/' style={scrollItem} className='footerItem'> terms & conditions </Link>
            </div>
        </div>
        <div style={foot}>
            All rights reserved by Miami Frenchie Club
        </div>
    </div>
    </>
  )
}

export default Footer