import React, { Component } from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { AiOutlineHeart } from "react-icons/ai";
import "../assets/css/navbar.css";

class NavbarComponent extends Component {
  render() {
    return (
      <Navbar bg="primary">
        <Container>
          <Navbar.Brand className="navbar-brand-name">
            Hello, Vishal
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            {window.location.pathname === "/memes" ? (
              <Link to="/fav_memes" className="me-4">
                <OverlayTrigger
                  placement="bottom"
                  overlay={
                    <Tooltip id="info-icon-tooltip">
                      One click away from your favorite meme page!
                    </Tooltip>
                  }
                >
                  <div>
                    <AiOutlineHeart color="white" fontSize="2em" />
                  </div>
                </OverlayTrigger>
              </Link>
            ) : window.location.pathname === "/fav_memes" ? (
              <Link to="/memes">
                <button className="btn btn-light me-4">All memes</button>
              </Link>
            ) : null}

            <Link to="/">
              <button className="btn btn-dark">Logout</button>
            </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default NavbarComponent;
