import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "./style.css";
import { faKickstarter } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";
function BasicExample() {
  return (
    <section>
    <Navbar expand="lg" data-bs-theme="dark" className=''>
      <Container className='nav-border py-5 px-4 p-0'>
        <Navbar.Brand href="/">
        <FontAwesomeIcon className="color px-3 align-items-center" icon={faKickstarter}></FontAwesomeIcon>
        <span className='text-bold fs-4'>Kritika Agrawal</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className=" ms-auto">
            <Nav.Link><Link className=" text-decoration-none navlink px-4" to='/'>About Me</Link></Nav.Link>
            <Nav.Link><Link className=" text-decoration-none navlink px-4" to='/Resume'>Resume</Link></Nav.Link>
            <Nav.Link><Link className=" text-decoration-none navlink px-4" to='/Contact'>Contact</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </section>
  );
}

export default BasicExample;