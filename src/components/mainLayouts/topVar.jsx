import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap"
import BrandingLogo from "../../assets/icons/jobIConn.svg"
import jobIcon from "../../assets/icons/jobICon.svg"
import { useNavigate } from "react-router";


const TopVar = () => {

    const navigate = useNavigate()

    return (
        <>

            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand

                        onClick={() => { navigate("/", { replace: true }) }}
                        style={{cursor:"pointer"}}
                    >
                        <img src={BrandingLogo} alt="" />

                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Perfil</Nav.Link>
                            <Nav.Link href="#link">Empleos</Nav.Link>
                            <Nav.Link href="#link">Mas</Nav.Link>
                        </Nav>

                        <div className="post-job-button display-flex align-items-center">
                            <img className="p-2" src={jobIcon} alt="" />
                            <span className="pr-2">Publicar empleo</span>
                        </div>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className="blue-line"></div>

        </>
    );

}


export default TopVar;
