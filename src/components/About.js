import React from 'react'

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
    opacity: '0.9'
}

const styleImg = {
    width: '20vw', 
    height: '20vw',
    float: 'right',
    marginTop: '-16vw',
    marginRight: '1vw',
}

const styleCard = {
    width: '53vw',
    height: '40vw',
    border: '.7vw solid black',
    margin: '0 auto'
}

const styleTitle = {
    height: '4vw',
    borderBottom: '0.6vw solid black',
    borderRight: '0.3vw solid black',
    backgroundColor: '#fcceeb',
    width: '101%',
    marginLeft: '-0.2vw',
    marginTop: '-0.2vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}
const styleAbout = {
    fontFamily: 'Gotham', 
    fontWeight: 'bold', 
    textTransform: 'uppercase',
    color: 'black', 
    fontSize: '2.5vw'
}

const styleParagraph = {
    padding: '2vw', 
    fontFamily: 'Gotham', 
    fontSize: '1.2vw',
    lineHeight: '2vw',
    color: 'black',
}

export const About = () => {
    
  return (
    <div id="about">
        <div style={styleListon} >
            <span style={styleSpan}>
                welcome to the Miami frenchie club
            </span> 
        </div>
        {/*//? container */}
        <div style={{padding: '6vw', justifyContent: 'center'}}>
            <div style={styleCard}>
                <div style={styleTitle}>
                    <span style={styleAbout}>About Section</span>
                </div>
                <div style={styleParagraph}>
                    <p>Miami Frenchie Club is a collection of 10,000 unique NFTs randomly 
                        generated on the Ethereum Blockchain. Frenchies are outfitted with 
                        over 100 different characteristics featuring some of Miami’s most 
                        distinct looks as well as popular NFT traits. See our roadmap below 
                        and come party with us in our discord! 
                    </p>
                </div>
            </div>
        </div>
        <img src='img/elipse.png' style={styleImg}/>
    </div>
  )
}
