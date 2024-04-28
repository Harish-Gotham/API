import React from 'react'
import Header from '../components/Header'
import Footer from '../components/navigation/Footer'

const Default = ({children}) => {
  return (
    <div>
        <Header/>
        {children}
        <div style={{ minHeight: '80vh' }}>



        </div>

        <Footer/>

      
    </div>
  )
}

export default Default
