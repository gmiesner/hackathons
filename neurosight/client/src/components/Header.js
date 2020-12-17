import React from 'react'
import { Nav, Navbar, Container, Image } from 'react-bootstrap'

const Header = () => {
    return <header>
       <Navbar bg="light"  expand="lg" collapseOnSelect>
           <Container>
            <Navbar.Brand href="/">
                <Image fluid src='/images/logo.png' alt='logo'/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="/calender">
                        <i className='fa fa-calendar'></i> Calender
                    </Nav.Link>
                    <Nav.Link href="/instructor">
                        <i className='fas fa-chalkboard-teacher'></i> Instructors
                    </Nav.Link>
                    <Nav.Link href="/discussion">
                        <i className='fas fa-comment'></i> Discussion
                    </Nav.Link>
                    <Nav.Link href="/event">
                        <i className='fas fa-glass-cheers'></i> Events
                    </Nav.Link>
                    <Nav.Link href="/video">
                        <i className='fas fa-video'></i> Video
                    </Nav.Link>
                    <Nav.Link href="/personal">
                        <i className='fas fa-user-clock'></i> Personal
                    </Nav.Link>
                    <Nav.Link href="/login">
                        <i className='fas fa-user'></i> Log In
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
           </Container>
        </Navbar>
    </header>
}

export default Header
