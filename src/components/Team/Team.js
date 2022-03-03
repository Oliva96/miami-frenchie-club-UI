import React from 'react';
import './Team.scss';
import teamMember1 from '../../assets/dog1.png';
import teamMember2 from '../../assets/dog2.png';
import teamMember3 from '../../assets/dog4.png';
import teamMember4 from '../../assets/dog5.png';
import teamMember5 from '../../assets/dog6.png';

const team = [
    { id: 0, memberName: 'Alfredo Lopez', img: teamMember1, rol: 'Developer', description: 'asdni aosldig ;portiwe oieroier liergnirne erinpoerg qnweorig'},
    { id: 1, memberName: 'Alfredo Lopez', img: teamMember2, rol: 'Artist', description: 'asdfgasd asdg asdg gfjyrjre asdni aosldig ;portiwe oieroier liergnirne erinpoerg qnweorig'},
    { id: 2, memberName: 'Alfredo Lopez', img: teamMember3, rol: 'Developer', description: ' erthd ghdg jty e4ry45 sdfg asdni aosldig ;portiwe oieroier liergnirne erinpoerg qnweorig'},
    { id: 3, memberName: 'Alfredo Lopez', img: teamMember4, rol: 'Artist', description: 'asdni aosldig ;portiwe oieroier liergnirne erinpoerg qnweorig'},
    { id: 4, memberName: 'Alfredo Lopez', img: teamMember5, rol: 'Developer', description: 'asdni aosldig ;portiwe oieroier liergnirne erinpoerg qnweorig'}
];

const Card = ({member}) => {
    return (
        <div className='teamMember-card'>
            <img src={member.img} alt='memberImg' className='teamMember-img'/>
            <p className='teamMember-name'>{member.memberName}</p>
            <p className='teamMember-rol'>{member.rol}</p>
            <p className='teamMember-description'>{member.description}</p>
        </div>
    )
}


const Team = () => {
  return (
    <div id="team" className='team-section'>
        <div className='team-title'>
            meet the team
        </div>
        <div className='team-container'>
            {
                team.map((member) => (<Card key={member.id} member={member}/>))
            }
        </div>
    </div>
  )
}

export default Team;