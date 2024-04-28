import React from 'react'
import { Modal } from 'react-bootstrap'
import { useParams } from 'react-router'

const Home = () => {
  const parameter = useParams()
  console.log(parameter.username)
  return (
    <div>
      <h1>Homepage</h1>
 

    </div>
  )
}

export default Home
