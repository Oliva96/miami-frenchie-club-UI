import React from 'react';

const styleBack = {
    borderTop: '.1vw solid #add8d2',
    height: '45vw',
    backgroundImage: "url('img/BACKGROUND_11.jpg')",
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
}

const styleListon ={
    backgroundColor: '#292929',
    borderTop: '.3vw solid black',
    borderBottom: '.3vw solid black',
    height: '5vw',
    fontFamily: 'ARCO',
    fontSize: '3vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
}

const styleSpan = {
    textAlign: 'center',
}

const styleCard = {
    width: '40vw',
    height: '30vw',
    border: '.5vw solid black',
    backgroundColor: 'white',
    marginLeft: '43vw',
    marginTop: '3vw',
}

const styleTitle = {
    width: '101%',
    marginLeft: '-0.1vw',
    marginTop: '-0.1vw',
    backgroundColor: '#fcceeb',
    height: '5vw',
    borderBottom: '.5vw solid black',
    borderRight: '.3vw solid black',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'ARCO', 
    fontWeight: 'bold', 
    textTransform: 'uppercase',
    color: 'black', 
    fontSize: '2.5vw'
}

const styleParagraph = {
    padding: '1.5vw 2vw', 
    fontFamily: 'ARCO', 
    fontSize: '1.5vw',
    lineHeight: '2vw',
    color: 'black',
    wordSpacing: '.5vw',
}

const styleAbout = {
    fontFamily: 'ARCO', 
    fontWeight: 'bold', 
    textTransform: 'uppercase',
    color: 'black', 
    fontSize: '2.5vw'
}

const styleImg = {
    width: '20vw', 
    height: '20vw',
    marginTop: '-10vw',
    marginLeft: '77vw',
}

const About = () => {
  return (
    <div id='about'>
        <div style={styleListon} >
            <span style={styleSpan}>
                welcome to the Miami frenchie club
            </span> 
        </div>
        <div style={styleBack}>
            <div style={styleCard}>
                <div style={styleTitle}>
                    <span style={styleAbout}>About Section</span>
                </div>
                <div style={styleParagraph}>
                    <p style={{margin: '0'}}>Miami Frenchie Club is a collection of 10,000 unique NFTs randomly 
                        generated on the Ethereum Blockchain. Frenchies are outfitted with 
                        over 100 different characteristics featuring some of Miami’s most 
                        distinct looks as well as popular NFT traits. See our roadmap below 
                        and come party with us in our discord! 
                    </p>
                </div>
            </div>
        </div>
        <img src='img/elipse.png' style={styleImg} alt=''/>
    </div>
  )
}

export default About;