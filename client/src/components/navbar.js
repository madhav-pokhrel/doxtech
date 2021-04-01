import React from "react";
import { Link } from "@reach/router";

import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapNavbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

import NinjaIcon from "../assets/icon512.png"

export default function Navbar() {
    return (
        <>
            <Container style={{maxWidth: "100%", marginLeft: "0px", marginRight: "0px", paddingLeft: "0px", paddingRight: "0px"}}>
                <BootstrapNavbar bg="primary" variant="dark">
                    <Link to="/">
                        <BootstrapNavbar.Brand>
                            <img src={NinjaIcon} width="32" height="32" alt=":ninja:"></img> DoxMy.tech
                        </BootstrapNavbar.Brand>
                    </Link>

                    <BootstrapNavbar.Collapse className="justify-content-end" style={{marginRight: "0px"}}>
                        <Nav>
                            <Nav.Link as={Link} to="/privacy">Privacy</Nav.Link> 
                        </Nav>
                    </BootstrapNavbar.Collapse>
                </BootstrapNavbar> 
            </Container>
        </>
    )
}