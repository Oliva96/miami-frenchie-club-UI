import React from 'react'
// import { useMediaQuery } from '@mui/material'
// import { useTheme } from '@mui/material/styles'
import { About } from '../components/About'
import { Counter } from '../components/Counter'
import Hero from '../components/Hero'
import { Roadmap } from '../components/Roadmap'
import Team from '../components/Team'

const Home = () => {

  // const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div>
        <Hero/>
        <About/>
        <Counter/>
        <Roadmap/>
        <Team/>
	    <div className="scroll-to-top">to top</div>
    </div>
  )
}

export default Home;