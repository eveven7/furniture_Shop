import React from 'react'
import { Button } from 'react-bootstrap'
import first from '../assets/img/1.jpg'
import {useNavigate} from "react-router-dom"

const Main = () => { 
  const nav = useNavigate()

  const openAll = () => {
      nav("/shop")
    }
  return (

   
    
    <div className=' bg w-100 d-flex my-5 mainMedia'>
      <div className='maincont w-50 '>
    <img className='h-100 w-100 rounded' src={first} alt="" />

      </div>
      

      <div className='w-50 p-5 d-flex flex-column justify-content-center '>
        <h2 className='fw-bold'>About us</h2>
<h2 className='text-dark'>Good furniture is not a luxury thing. Quality and good furniture design are achievable. This is the idea that EASE promotes by offering furniture, interior, luminaire brands and manufacturers that are valued in many countries and follow this philosophy. Holy Trinity - Quality, Design and Affordable - Mostly hard to match, but EASE. My Home Style ”has tried and is not going to stop.</h2>
        
        <div class="input-group mt-5">
       
        <Button className='btn-color'onClick={openAll} >VIEW ALL OUR PRODUCTS      
        </Button>
  
      </div>
      </div>
      
    </div>
  )
}

export default Main