
import React, { useContext, useEffect } from 'react'

const styleRoadmap = {
    backgroundImage: "url('img/doggies.png')",
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
}

const row = {
    justifyContent: 'space-around', 
    padding: '3vw', 
    display: 'flex'
}

const col = {
    width: '40vw',
    display: 'flex'
}

const styleCard1 = {
    border: '.5vw solid black',
    width: '33vw', 
}
const styleCard2 = {
    border: '.5vw solid black',
    width: '33vw', 
    height: '15.8vw'
}
const styleCard3 = {
    border: '.5vw solid black',
    width: '33vw', 
    height: '14vw'
}
const styleCard4 = {
    border: '.5vw solid black',
    width: '33vw', 
    height: '10vw'
}

const styleImg = {
    width: '4vw', 
    height: '5vw',
    marginRight: '2vw'
}

const styleTitle = {
    width: '101%',
    marginLeft: '-.1vw',
    marginTop: '-.1vw',
    backgroundColor: '#fcceeb',
    borderBottom: '.5vw solid black',
    borderRight: '.2vw solid black',
    height: '3vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Gotham', 
    fontWeight: 'bold', 
    textTransform: 'uppercase',
    color: 'black', 
    fontSize: '2vw'
}

const styleParagraphGreen = {
    padding: '1vw', 
    fontFamily: 'Gotham', 
    fontSize: '1.2vw',
    lineHeight: '2vw',
    color: 'black',
    backgroundColor: '#add8d2'
}

const styleParagraphWhite = {
    padding: '1vw', 
    fontFamily: 'Gotham', 
    fontSize: '1.2vw',
    lineHeight: '2vw',
    color: 'black',
    backgroundColor: 'white'
}

export const Roadmap = () => {

  return (
    <div id="roadmap" style={styleRoadmap}>
        <div style={{justifyContent: 'center', paddingTop: '3vw'}}>
            <img src='img/roadmap.png' style={{width: '35vw', height: '9vw'}}></img>
        </div>
        <div style={row}>
            <div style={col}>
                <img src='img/1.png' style={styleImg}/>
                <div style={styleCard1}>
                    <div style={styleTitle}>
                        promote the club
                    </div>
                    <div style={styleParagraphWhite}>
                        -Create twitter, instagram, discord and website.
                    </div>
                    <div style={styleParagraphGreen}>
                        -Community giveaways/competitions for whitelist spots.
                    </div>
                    <div style={styleParagraphWhite}>
                        -List 1/1 for auction, all proceeds go to charity! (animal shelters).
                    </div>
                </div>
            </div>
            <div style={col}>
                <img src='img/2.png' style={styleImg}/>
                <div style={styleCard2}>
                    <div style={styleTitle}>
                        open the club
                    </div>
                    <div style={styleParagraphGreen}>
                        -Begin minting 10,000 unique frenchies.
                    </div>
                    <div style={styleParagraphWhite}>
                        -Mint Date TBD.
                    </div>
                    <div style={styleParagraphGreen}>
                        -Mint Price TBD.
                    </div>
                </div>
            </div>
            
        </div>
        <div style={row}>
            <div style={col}>
                <img src='img/3.png' style={styleImg}/>
                <div style={styleCard3}>
                    <div style={styleTitle}>
                        the party goes on
                    </div>
                    <div style={styleParagraphGreen}>
                    -Holders will have exclusive access to live events in the Miami area.
                    </div>
                    <div style={styleParagraphWhite}>
                        -Merch store opens.
                    </div>
                </div>
            </div>
            <div style={col}>
                <img src='img/4.png' style={styleImg}/>
                <div style={styleCard4}>
                    <div style={styleTitle}>
                    Frenchie puppies drop
                    </div>
                    <div style={styleParagraphWhite}>
                    -Holders have whitelist priority to our upcoming drop Frenchie Puppies! 
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}
