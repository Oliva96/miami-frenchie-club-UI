import React from 'react'

const styleTeamSection = {
    backgroundColor: '#292929',
    borderTop: '.3vw solid black',
    paddingTop: '4vw',
}

const title = {
    fontFamily: 'ARCO',
    fontSize: '6vw',
    color: '#add8d2',
    letterSpacing: '.5vw',
}

const styleContainer = {
    display: 'flex',
    padding: '4vw 5vw 1vw 5vw',
    justifyContent: 'space-around',
}

const ownerInfo = {
    width: '30vw',
    fontFamily: 'ARCO',
    letterSpacing: '.1vw',
    padding: '1vw',
}

const styleImg = {
    width: '15vw', 
    height: '15vw',
    marginBottom: '1vw'
}

const name = {
    color: 'white',
    fontSize: '1.4vw',
    margin: '0',
    marginBottom: '1vw'
}
const rol = {
    color: '#fcceeb',
    fontSize: '1.4vw',
    margin: '0'
}
const description = {
    color: 'white',
    fontSize: '.95vw',
    lineHeight: '1.3vw',
    margin: '0',
    padding: '1vw'
}

const team = [
    { id: 0, memberName: 'Alfredo Lopez', img: 'img/dog1.png', rol: 'Developer', description: 'asdni aosldig ;portiwe oieroier liergnirne erinpoerg qnweorig'},
    { id: 1, memberName: 'Alfredo Lopez', img: 'img/dog2.png', rol: 'Artist', description: 'asdfgasd asdg asdg gfjyrjre asdni aosldig ;portiwe oieroier liergnirne erinpoerg qnweorig'},
    { id: 2, memberName: 'Alfredo Lopez', img: 'img/dog4.png', rol: 'Developer', description: ' erthd ghdg jty e4ry45 sdfg asdni aosldig ;portiwe oieroier liergnirne erinpoerg qnweorig'},
    { id: 3, memberName: 'Alfredo Lopez', img: 'img/dog5.png', rol: 'Artist', description: 'asdni aosldig ;portiwe oieroier liergnirne erinpoerg qnweorig'},
    { id: 4, memberName: 'Alfredo Lopez', img: 'img/dog6.png', rol: 'Developer', description: 'asdni aosldig ;portiwe oieroier liergnirne erinpoerg qnweorig'}
];

const Card = ({member}) => {
    return (
        <div style={ownerInfo}>
            <img src={member.img} alt='' style={styleImg} />
            <p style={name}>{member.memberName}</p>
            <p style={rol}>{member.rol}</p>
            <p style={description}>{member.description}</p>
        </div>
    )
}


const Team = () => {
  return (
    <div id="team" style={styleTeamSection}>
        <div style={title}>
            meet the team
        </div>
        <div style={styleContainer}>
            {
                team.map((member) => (<Card key={member.id} member={member}/>))
            }
        </div>
    </div>
  )
}

export default Team;