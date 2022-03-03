import * as React from 'react';
import './Hero.scss';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="hero_background">
        <div className="hero_container" >
            <div >
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