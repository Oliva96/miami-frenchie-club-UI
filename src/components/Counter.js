import React from 'react';

const styleImg = {
    borderTop: '.5vw solid #add8d2',
    borderBottom: '.5vw solid #add8d2',
    backgroundColor: '#add8d2',
    height: '40vw',
    backgroundImage: "url('img/BACKGROUND_4.png')",
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
}

const styleCard = {
    width: '45vw',
    height: '25vw',
    border: '.5vw solid black',
    backgroundColor: 'white',
    marginLeft: '45vw',
    marginTop: '8vw',
    display: 'flex',
    alignItems: 'end',
}

const styleTitle = {
    width: '101%',
    marginLeft: '-0.1vw',
    backgroundColor: '#fcceeb',
    height: '5vw',
    borderTop: '.5vw solid black',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Gotham', 
    fontWeight: 'bold', 
    textTransform: 'uppercase',
    color: 'black', 
    fontSize: '2.5vw'

}

export const Counter = () => {
  return (
    <div style={styleImg}>
        <div style={styleCard}>
            <div style={styleTitle}>
                time remaining
            </div>
        </div>
    </div>
  )
}
