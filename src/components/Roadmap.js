
import React from 'react'

const styleRoadmap = {
    backgroundImage: "url('img/doggies-back.jpeg')",
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    marginTop: '-11vw'
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
    height: '17.8vw'
}
const styleCard3 = {
    border: '.5vw solid black',
    width: '33vw', 
    height: '15.9vw'
}
const styleCard4 = {
    border: '.5vw solid black',
    width: '33vw', 
    height: '11.9vw'
}

const styleImg = {
    width: '4vw', 
    height: '6vw',
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
    fontFamily: 'ARCO', 
    fontWeight: 'bold', 
    textTransform: 'uppercase',
    color: 'black', 
    fontSize: '2vw'
}

const styleParagraphGreen = {
    padding: '1vw', 
    fontFamily: 'ARCO', 
    fontSize: '1.5vw',
    lineHeight: '2vw',
    letterSpacing: '.1vw',
    color: 'black',
    backgroundColor: '#add8d2'
}

const styleParagraphWhite = {
    padding: '1vw', 
    fontFamily: 'ARCO', 
    fontSize: '1.5vw',
    lineHeight: '2vw',
    color: 'black',
    letterSpacing: '.1vw',
    backgroundColor: 'white'
}

const styleListon ={
    backgroundColor: '#292929',
    borderTop: '.3vw solid black',
    borderBottom: '.3vw solid black',
    height: '8vw',
    fontFamily: 'ARCO',
    fontSize: '7vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fcceeb',
}

const styleSpan = {
    textAlign: 'center',
}

const Roadmap = () => {

  return (
    <div id="roadmap" style={styleRoadmap}>
        <div style={styleListon} >
            <span style={styleSpan}>
               Roadmap
            </span> 
        </div>
        <div style={row}>
            <div style={col}>
                <img src='img/1.png' alt='' style={styleImg}/>
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
                <img src='img/2.png' alt='' style={styleImg}/>
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
                <img src='img/3.png' alt='' style={styleImg}/>
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
                <img src='img/4.png' alt='' style={styleImg}/>
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

export default Roadmap;
