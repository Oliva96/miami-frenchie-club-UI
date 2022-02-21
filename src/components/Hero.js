import * as React from 'react';

const styleH1 = {
  fontFamily: 'Gotham', 
  fontSize: '5vw',
  fontWeight: 'bold',
  color: 'rgb(52 50 50)',
  lineHeight: '7vw'
}

const styleButton = {
  borderRadius: '.5vw',
  backgroundColor: '#fcceeb', 
  textTransform: 'uppercase',
  color: 'black',  
  fontFamily: 'Gotham', 
  fontWeight: 'bold',
  fontSize: '2vw',
  paddingTop: '1vw',
  height: '4vw',
  width: '25vw',
  marginTop: '5vw'
}

export default function Hero() {
  return (
    <div className="section big-85-height" style={{height: '50vw'}}>
        <div className="background-path" >
            <img 
                className="scene" preserveAspectRatio="none" viewBox="0 0 1440 800"
                src='img/BACKGROUND_2.png' 
            />
        </div>
        <div className="hero-center-wrap">
            <div className="container" style={{textAlign: 'initial'}}>
                <div >
                    <div >
                        <span style={styleH1}>
                            Welcome to the <br/>
                            Miami Frenchie Club.
                        </span>
                    </div>
                    <div>
                        <button 
                            style={styleButton}
                            className="btn btn-primary"
                        >
                            Buy for 0.1 ETH
                        </button>
                    </div>
                </div>
            </div>
        </div>	
    </div>
  );
}