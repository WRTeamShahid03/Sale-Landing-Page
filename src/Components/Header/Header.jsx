"use client";
import React, { useEffect, useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import navLogo from "../../Assets/Images/wrteam logo.svg";
import navLogo from "../../Assets/Images/Logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Dropdown } from "antd";
import { IoIosArrowDown } from "react-icons/io";
import TopHeader from "./TopHeader";

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
  const pages = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.wrteam.in/products/web-products/"
        >
          Web Products
        </a>
      ),
    },
    {
      key: "2",

      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.wrteam.in/products/app-products/"
        >
          App Products
        </a>
      ),
    },
  ];
  return (
    <>
      <header>
        {/* <TopHeader /> */}
        <Navbar
          expand="lg"
          id="header"
          className={`container nav ${scroll > headerTop ? "sticky " : ""}`}
        >
          <div className="col-lg-5">
            <div className="navLogo">
              <Link href="https://wrteam.in/" target="_blank">
                {" "}
                <img src={navLogo.src} alt="navLogo" />{" "}
              </Link>
            </div>
          </div>

          <Navbar.Collapse id="basic-navbar-nav" className="col-lg-7 navcoll ">
            <Nav className="navFlex">
              <Link
                className="nav-link"
                href="https://wrteam.in/"
                target="_blank"
              >
                Home
              </Link>

              {/* <Dropdown
                menu={{
                  items: pages, // Ensure 'pages' is passed to 'items' key as in other dropdowns
                }}
                className="productDropdown"
              >
                <span className={`nav-link`}>
                  Products
                  <IoIosArrowDown size={19} />
                </span>
              </Dropdown> */}

              <Link
                className="nav-link"
                href="https://wrteam.in/products"
                target="_blank"
              >
               Products
              </Link>

              <Dropdown
                menu={{
                  items,
                }}
                className="servicesDropdown"
              >
                <span className={`nav-link`}>
                  Services
                  <IoIosArrowDown size={19} />
                </span>
              </Dropdown>
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
            <GiHamburgerMenu size={36} />
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

              <Dropdown
                menu={{
                  items: pages, // Ensure 'pages' is passed to 'items' key as in other dropdowns
                }}
                className="productDropdown"
              >
                <a onClick={(e) => e.preventDefault()}>
                  <span className={`nav-link`}>
                    Products
                    <IoIosArrowDown size={19} />
                  </span>
                </a>
              </Dropdown>


              <Dropdown
                menu={{
                  items,
                }}
                className="servicesDropdown"
              >
                <a onClick={(e) => e.preventDefault()}>
                  <span className={`nav-link`}>
                    Services
                    <IoIosArrowDown size={19} />
                  </span>
                </a>
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
