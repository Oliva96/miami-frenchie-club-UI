import React from 'react'

const styleTeamSection = {
    backgroundColor: '#292929',
    borderTop: '.3vw solid black',
    borderBottom: '.3vw solid black',
    padding: '4vw'
}

const styleContainer = {
    display: 'flex',
    padding: '4vw 10vw'
}
const styleContainer2 = {
    display: 'flex',
    padding: '0 10vw',
    justifyContent: 'space-around',
}

const ownerInfo = {
    width: '30vw',
}

const styleImg = {
    width: '10vw', 
    height: '10vw',
    marginBottom: '1vw'
}

const InfoCard = {
    border: '.5vw solid black',
    margin: '0 auto',
    width: '20vw', 
    height: '15vw',
    backgroundColor: 'white'
}

const Team = () => {
  return (
    <div id="team" style={styleTeamSection}>
        <div>
            <img src='img/team.png' style={{width: '30vw', height: '4vw'}}></img>
        </div>
        <div style={styleContainer}>
            <div style={ownerInfo}>
                <img src='img/dog1.png' style={styleImg} />
                <div style={InfoCard}>
                    
                </div>
            </div>
            <div style={ownerInfo}>
                <img src='img/dog2.png' style={styleImg} />
                <div style={InfoCard}>

                </div>
            </div>
            <div style={ownerInfo}>
                <img src='img/dog4.png' style={styleImg} />
                <div style={InfoCard}>

                </div>
            </div>
        </div>
        <div style={styleContainer2}>
            <div style={ownerInfo}>
                <img src='img/dog6.png' style={styleImg} />
                <div style={InfoCard}>

                </div>
            </div>
            <div style={ownerInfo}>
                <img src='img/dog5.png' style={styleImg} />
                <div style={InfoCard}>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Team;