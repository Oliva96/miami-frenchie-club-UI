import React from 'react';
// import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';


const scrollStyle = {
    backgroundColor: 'white',
    padding: '5px',
    boxShadow: '0 10px 6px -6px #aeb2b7',
    fontFamily: 'ARCO, sans-serif'
}

const buttonStyle = {
    borderRadius: '.5vw',
    padding: '0 25px',
    backgroundColor: '#fcceeb', 
    marginTop: '14px', 
    textTransform: 'uppercase',
    color: 'black',  
    fontFamily: 'Gotham', 
    fontWeight: 'bold',
    fontSize: '15px',
    letterSpacing: '.5px',
    height: '35px'
}

const styleLink = {
    cursor: 'pointer',
}

const Header = () => {

  return (
    <div id="menu-wrap" className="menu-back cbp-af-header" style={scrollStyle}>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light mx-lg-0">
                        <a className="navbar-brand" href='/'>
                            <img style={{width: '20vw', height: '4vw'}}
                                src="img/LOGO_Website_1.png" alt=""/>
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon">
                                <span className="menu-icon__line menu-icon__line-left"></span>
                                <span className="menu-icon__line"></span>
                                <span className="menu-icon__line menu-icon__line-right"></span>
                            </span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Buy</a>
                                </li>
                                <li className="nav-item" style={styleLink}>
                                    <ScrollLink smooth className="nav-link" to="about">About</ScrollLink>
                                </li>
                                <li className="nav-item" style={styleLink}>
                                    <ScrollLink smooth className="nav-link" to="roadmap">Roadmap</ScrollLink>
                                </li>

                                <li className="nav-item" style={styleLink}>
                                    <ScrollLink smooth className="nav-link"  to="team">Team</ScrollLink>
                                </li>
                                <li className="nav-item ml-3">
                                    <button
                                        style={buttonStyle}
                                        className="btn btn-primary"
                                        >
                                        Connect Wallet
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </nav>				
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header