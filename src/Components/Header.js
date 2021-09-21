import React, {Component} from 'react';
import {
    Container,
    Form,
    FormControl,
    Nav,
    Navbar,
    Button
} from "react-bootstrap";
import logo from './logo.jpg'
import { BrowserRouter as Router, Route, Switch,Link} from "react-router-dom";

import Home from "../Pages/Home";
import About from '../Pages/About';
import Contacts from '../Pages/Contacts';
import Blog from '../Pages/Blog';

class Header extends Component {
    render() {
        return (
        <>
            <Navbar sticky="top" collapseOnSelect expand="md" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            src={logo}
                            height="30"
                            width="30"
                            className="d-inline-block align-top"
                            alt="Logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/about">About us</Nav.Link>
                            <Nav.Link href="/contacts">Contacts</Nav.Link>
                            <Nav.Link href="/blog">Blog</Nav.Link>
                        </Nav>
                        <Form className='d-flex' style={{position:'absolute',right:'0'}}>
                            <FormControl
                                type="text"
                                placeholder="Search"
                                className="mr-sm-2"
                            />
                            <Button variant="outline-info" style={{marginLeft:'10px',marginRight:'100px'}}>Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Router>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/about" component={About}/>
                    <Route exact path="/contacts" component={Contacts}/>
                    <Route exact path="/blog" component={Blog}/>
                </Switch>
            </Router>
        </>
        );
    }
}

export default Header;