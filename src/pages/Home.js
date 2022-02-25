import React from 'react'
import Hero from '../components/Hero'
import Team from '../components/Team'
import Roadmap from '../components/Roadmap'
import About from '../components/About'

const Home = () => {

  return (
    <div>
        <Hero/>
        <About/>
        <Roadmap/>
        <Team/>
    </div>
  )
}

export default Home;