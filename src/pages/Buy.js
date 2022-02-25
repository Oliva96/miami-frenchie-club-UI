import React, { useEffect, useState } from 'react';
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from 'react-icons/ai';

const Buy = () => {

  const fixPrice = 0.1;
  const maxAmout = 10;
  const [price, setPrice] = useState(0.1);
  const [amount, setAmount] = useState(1);

  const handleAmount = (increment) => {
    if(amount === 1 && increment === -1) return;
    if(amount === maxAmout && increment === 1) return;
    setAmount(amount + increment);
  }

  useEffect(() => {
    setPrice(fixPrice * amount);
  }, [amount])
  

  return (
    <div className="buy-page">
      <div className="buy-card">
        <div className="buy-img">
          <img  src='img/Frenchie_New_Page.png' alt='buy-frenchie'/>
        </div>
        <div className='buy-description'>the miami frenchie club</div>
        <div className='buy-price'>
            {`price:  ${price} ETH`}
        </div>
        <div className='buy-amount'>
            amount:
            <div >
                <AiOutlineMinusSquare onClick={() => handleAmount(-1)}/>
                {amount}
                <AiOutlinePlusSquare onClick={() => handleAmount(1)}/>
            </div>
        </div>
      </div>
      <button className='buy-button'>
        Buy
      </button>
    </div>
  )
}

export default Buy