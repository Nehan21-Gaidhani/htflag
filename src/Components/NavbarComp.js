import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Badge from "react-bootstrap/Badge";
import "./MyNavbar.css";
import logo from "../Images/Logo_CTF-removebg-preview_upscaled.png";

const NavbarComp = () => {
  // Sample points value for demonstration
  const points = 0;

  return (
    <>
      {/* First Navbar */}
      <Navbar bg="black" variant="dark" id="nav1">
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&display=swap"
          rel="stylesheet"
        ></link>
        <Container>
          <Navbar.Brand href="#home">Team</Navbar.Brand>
          <Navbar.Brand href="#home">ScoreBoard</Navbar.Brand>
          <Navbar.Brand href="#home">Challenges</Navbar.Brand>
          <div className="ms-auto">
            <Navbar.Brand href="#home">Admin</Navbar.Brand>
            <Navbar.Brand href="#home">Team</Navbar.Brand>
            <Navbar.Brand href="#home">Profile</Navbar.Brand>
            <Navbar.Brand href="#home">Logout</Navbar.Brand>
          </div>
        </Container>
      </Navbar>
      {/* Second Navbar */}
      <Navbar variant="dark" className="py-1 custom-navbar" id="custom-navbar">
        <Container className="d-flex justify-content-between align-items-center">
          <Navbar.Brand
            href="#home"
            style={{ fontWeight: "bold", padding: "0" }}
          >
            <img
              src={logo}
              width="200"
              height="200"
              className="d-inline-block align-top"
              alt="CTF Logo"
            />
          </Navbar.Brand>
          <Navbar.Brand
            href="#home"
            className="text-center"
            style={{ fontSize: "38px", fontWeight: "bold", margin: "0 auto" }}
          >
            Challenges
          </Navbar.Brand>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Navbar.Brand style={{ fontWeight: "bold" }}>Points :</Navbar.Brand>
            <Badge bg="none"> {points}</Badge>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComp;
