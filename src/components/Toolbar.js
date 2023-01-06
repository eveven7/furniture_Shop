import React, {useState} from 'react'
import { useSelector } from 'react-redux'

import { Link } from 'react-router-dom';
import {Navbar, Nav, Container, Button} from 'react-bootstrap'
import { FaShoppingCart } from 'react-icons/fa';
import { GiSofa } from 'react-icons/gi';

import './ToolbarStyle.css';
const Toolbar = () => {
const quantity= useSelector(state => state.chart.value.quantity)
const [clicked, setClicked] = useState()
    


  return (

       <Navbar sticky="top"  expand="md" className='navbar' >
            <Container>
           <Navbar.Brand as={Link} to="/react_shop_app">
               <div className='fs-1 text-dark'div/>
                <GiSofa className='fs-1 text-dark'/>
            </Navbar.Brand>    
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='text-center'>

          <Nav className=" d-flex w-100 justify-content-end gap-5 ">
          <Nav.Link className='text-dark fw-bold' as={Link} to="/react_shop_app">News</Nav.Link>
          <Nav.Link className='text-dark fw-bold' as={Link} to="/react_shop_app">Sale</Nav.Link>

            <Nav.Link className='text-dark fw-bold' as={Link} to="/react_shop_app">Contact</Nav.Link>
            <Nav.Link className='text-dark fw-bold' as={Link} to="/shop">Shop</Nav.Link>            
            <Button className='btn bg-danger border-danger'  as={Link} to="/cart" > 
            <FaShoppingCart/>  
             ({quantity})
             </Button>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
      </Navbar>

  )
}

export default Toolbar