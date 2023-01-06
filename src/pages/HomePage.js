import {React, useEffect} from 'react'
import {useSelector} from "react-redux"
import {Container, Row, Col, Card} from 'react-bootstrap'

import {useNavigate} from "react-router-dom"
import SingleItem from '../components/SingleItem'
import {FaArrowRight} from "react-icons/fa"
import Main from '../components/Main'


function HomePage({setsingleitem}) {

const nav = useNavigate()
const discounts = useSelector(state => state.items.value.biggestDiscounts)

useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);



const openAll = () => {
  nav("/shop")
}

const openItem = (id, item) => {
  nav("/product/" + id)
  setsingleitem(item)
}



  return (
   <Container >
    <Main/>
    <Container className='d-flex flex-column py-5 my-5'>
       <Row xs={3} md={2} lg={3} className=" bg-succes" >  
      {discounts && discounts.map((x, i ) => <SingleItem key={i} item={x} openItem={() => openItem(x.id, x)}/>)}
      
      </Row>
     
      </Container>
    
    </Container>
   
  )
}

export default HomePage