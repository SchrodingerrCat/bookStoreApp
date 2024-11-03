import React from 'react'
import Navbar  from '../components/Navbar.jsx'
import Banner  from '../components/Banner.jsx'
import FreeBook  from '../components/FreeBook.jsx'
import Footer  from '../components/Footer.jsx'

function Home() {
  return (
    <div>
      <>
      <Navbar />
      <Banner />
      <FreeBook />
      <Footer/>
      </>
    </div>
  )
}

export default Home
