import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import { BsDiscord } from 'react-icons/bs';
import InstagramIcon from '@mui/icons-material/Instagram';

import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';

const styleFooter = {
    backgroundColor: '#fcceeb',
    padding: '4vw 12vw',
    display: 'flex',
}
const logo = {

}
const icons = {
    display: 'flex',
    color: 'black',
    paddingTop: '1vw',
    justifyContent: 'space-around',
}
const socialIcon = {
    fontSize: '2.2vw',
    cursor: 'pointer',
    marginTop: '8px'
}
const scrollNav = {
    display: 'flex',
    width: '40vw',
    justifyContent: 'space-around',
    marginLeft: '14vw',
    marginTop: '2vw'
}
const scrollItem = {
    fontFamily: 'ARCO',
    cursor: 'pointer',
    color: 'black',
    textDecoration: 'none',
    fontSize: '1.5vw',
}
const foot = {
    backgroundColor: '#fcceeb', 
    color: 'black', 
    fontFamily: 'Gotham', 
    fontSize: '2vw', 
    height: '3vw',
    paddingBottom: '4vw'
}

const Footer = () => {
  return (
    <>
    <div style={styleFooter}>
        <div style={logo}>
            <img src='img/LOGO_Website_1.png' alt='' style={{width: '25vw', height: '4.5vw'}} />
            <div style={icons}>
                <TwitterIcon style={socialIcon} className='scrollItem'/>
                <BsDiscord style={socialIcon} className='scrollItem'/>
                <InstagramIcon style={socialIcon} className='scrollItem'/>
            </div>
        </div>
        <div style={{display: 'block'}}>
            <div style={scrollNav}>
                <Link to='/' smooth style={scrollItem} className='scrollItem'>Buy</Link>
                <ScrollLink smooth to='about' style={scrollItem} className='scrollItem'>about</ScrollLink>
                <ScrollLink smooth to='roadmap' style={scrollItem} className='scrollItem'>roadmap</ScrollLink>
                <ScrollLink smooth to='team' style={scrollItem} className='scrollItem'>team</ScrollLink>
            </div>
            <div style={scrollNav}>
                <Link to='/' style={scrollItem} className='scrollItem'> terms & conditions </Link>
            </div>
        </div>
    </div>
    <div style={foot}>
        All rights reserved by Miami Frenchie Club
    </div>
    </>
  )
}

export default Footer