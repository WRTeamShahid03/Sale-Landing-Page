"use client";
import React, { useEffect, useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import navLogo from "../../Assets/Images/Logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Button, Dropdown } from "antd";
import { DownOutlined } from '@ant-design/icons';

const Header = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [headerTop, setHeaderTop] = useState(0);
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const nav =
      typeof document !== "undefined" && document.querySelector(".nav");
    setHeaderTop(nav.offsetTop);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  const items = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://wrteam.in/services/installation/"
        >
          Installation
        </a>
      ),
    },
    {
      key: "2",

      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://wrteam.in/services/customization/"
        >
          Customaization
        </a>
      ),
    },
  ];
  return (
    <>
      <header>
        <Navbar
          expand="lg"
          id="header"
          className={`container nav ${scroll > headerTop ? "sticky " : ""}`}
        >
          <div className="col-lg-7">
            <div className="navLogo">
              <Link href="https://wrteam.in/" target="_blank">
                {" "}
                <img src={navLogo.src} alt="navLogo" />{" "}
              </Link>
            </div>
          </div>

          <Navbar.Collapse id="basic-navbar-nav" className="col-lg-5 navcoll ">
            <Nav className="navFlex">
              <Link
                className="nav-link"
                href="https://wrteam.in/"
                target="_blank"
              >
                {" "}
                Home
              </Link>

              <Link
                className="nav-link"
                href="https://wrteam.in/products/web-products/"
              >
                Products
              </Link>

              <Dropdown
                menu={{
                  items,
                }}
                overlayClassName="custom-dropdown-menu1"
                placement="topLeft"
                arrow={{
                  pointAtCenter: true,
                }}
                className="services-bottom"
              >
                <Button>Services </Button>
              </Dropdown>
              {/* <DownOutlined className="service_arrow"/> */}
              <Link className="nav-link" href="https://wrteam.in/about-us/">
                {" "}
                About Us{" "}
              </Link>

              <Link className="nav-link" href="https://wrteam.in/contact-us/">
                Contact Us
              </Link>
            </Nav>
          </Navbar.Collapse>

          <span onClick={handleShow} id="hamburg">
            <GiHamburgerMenu color="white" size={36} />
          </span>
        </Navbar>

        <Offcanvas
          show={show}
          onHide={handleClose}
          placement="end"
          scroll={true}
          backdrop={true}
        >
          <Offcanvas.Header closeButton className="btn-close-white">
            <Offcanvas.Title></Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="me-auto navFlex">
              <Link className="nav-link" href="/">
                {" "}
                Home
              </Link>

              <Link
                className="nav-link"
                href="https://wrteam.in/products/web-products/"
              >
                Products
              </Link>

              <Dropdown
                menu={{
                  items,
                }}
                overlayClassName="custom-dropdown-menu1"
                placement="topLeft"
                arrow={{
                  pointAtCenter: true,
                }}
                className="services-bottom"
              >
                <Button>Services </Button>
              </Dropdown>

              <Link className="nav-link" href="https://wrteam.in/about-us/">
                {" "}
                About Us{" "}
              </Link>

              <Link className="nav-link" href="https://wrteam.in/contact-us/">
                Contact Us
              </Link>
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>
      </header>
    </>
  );
};

export default Header;
