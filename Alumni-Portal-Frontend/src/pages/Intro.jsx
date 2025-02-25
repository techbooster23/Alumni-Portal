import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Memories from '../components/Memories'
import JobPositions from '../components/JobPositions'
import Collaborator from '../components/Collaborator'
import Footer from '../components/Footer'
import Features from '../components/Features'

const Intro = () => {
  return (
    <div>
      <Header />

      <div >
        <Hero />
        <Features />
        <Memories />
        <JobPositions />
        <Collaborator />
      </div>

      <Footer />
    </div>
  )
}

export default Intro;