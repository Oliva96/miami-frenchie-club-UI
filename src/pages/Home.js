import React from 'react'
import Hero from '../components/Hero/Hero'
import Team from '../components/Team/Team'
import Roadmap from '../components/Roadmap/Roadmap'
import About from '../components/About/About'

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