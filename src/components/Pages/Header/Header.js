import React from 'react';
import { Container, Nav, Navbar,Button } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';

const Header = () => {

    const {user, logOut} = useAuth();
    console.log('user form header',user)
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Dental Care</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                    <Nav.Link as ={HashLink} to="/home#home">Home</Nav.Link>
                    <Nav.Link as ={HashLink} to="/home#about-us">About Us</Nav.Link>
                    <Nav.Link as ={HashLink} to="/home#services">Services</Nav.Link>
                    <Nav.Link as ={HashLink} to="/home#doctors">Doctors</Nav.Link>
  
                    { user?.email?<Button onClick={logOut} variant="danger">Log Out</Button>:
                    <Nav.Link as ={HashLink} to="/login">Login</Nav.Link>   }
                   <Navbar.Text>
                        Signed in as: {user?.email}
                    </Navbar.Text>
                    </Navbar.Collapse> 
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
