import React, { useEffect, useState } from 'react';
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from 'react-icons/ai';
import unrevealFrenchie from '../assets/Frenchie_New_Page.png';

const Buy = () => {

  const [fixPrice, setFixPrice] = useState(0.1);
  const [maxAmout, setMaxAmount] = useState(10);
  const [price, setPrice] = useState(0.1);
  const [amount, setAmount] = useState(1);
  const [remainsNFTs, setRemainsNFTs] = useState(0);
  const [totalNFTs, setTotalNFTs] = useState(10000);

  const handleBuyAmount = (increment) => {
    if(amount === 1 && increment === -1) return;
    if(amount === maxAmout && increment === 1) return;
    setAmount(amount + increment);
  }

  const getFixedPrice = () => {

  }

  const getMaxAmount = () => {

  }

  const handleRemainsNFTs = () => {

  }

  const mint = async () => {
    
    // process mint in the contract 
    setRemainsNFTs(remainsNFTs + amount); // reemplazar por call to handleRemainsNFTs if mint was successfull
  }

  useEffect(() => {
    getMaxAmount();
    handleRemainsNFTs();
    getFixedPrice();
  }, [])

  useEffect(() => {
    setPrice(fixPrice * amount);
  }, [amount])
  

  return (
    <div className="buy-page">
      <div className="buy-card">
        <div className="buy-img">
          <img  src={unrevealFrenchie} alt='buy-frenchie'/>
        </div>
        <div className='buy-description'>
          the miami frenchie club
          <span>{`${remainsNFTs} / ${totalNFTs}`}</span>
        </div>
        <div className='buy-price'>
            {`price: ${price.toFixed(2)} ETH`}
        </div>
        <div className='buy-amount'>
            amount:
            <div >
                <AiOutlineMinusSquare onClick={() => handleBuyAmount(-1)}/>
                    {amount}
                <AiOutlinePlusSquare onClick={() => handleBuyAmount(1)}/>
            </div>
        </div>
      </div>
      <button onClick={mint} className='buy-button'>
        Mint
      </button>
    </div>
  )
}

export default Buy