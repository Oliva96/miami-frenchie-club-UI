import * as React from 'react';
import { Link } from 'react-router-dom';

const styleBack = {
    height: '40.8vw',
    backgroundImage: "url('img/BACKGROUND_2.jpg')",
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    paddingTop: '11vw',
}

const styleContainer = {
    alignItems: 'center',
    justifyContent: 'center'
}

const styleH1 = {
  fontFamily: 'ARCO', 
  fontSize: '2.7vw',
  color: 'rgb(52 50 50)',
  lineHeight: '7vw'
}

export default function Hero() {
  return (
    <div style={styleBack}>
        <div style={styleContainer}>
            <div style={styleH1}>
                the best nft collection <br/>
                in the world
            </div>
            <div className='buttomHome-wrapper'>
                <Link className="buttomHome" to="/buy">
                    Buy for 0.1 ETH
                </Link>
            </div>
        </div>
    </div>
  );
}