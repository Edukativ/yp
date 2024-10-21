import React from "react";
import { BodyWrapper } from "./body-wrapper";
import NavBar from "../nav-bar/nav-bar";
import Footer from "../footer/footer";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";

const Layout = () => {
  return (
    <>
      <NavBar />
      <BodyWrapper>
        <Container style={{padding:"0px"}} fluid>
          <Outlet />
        </Container>
      </BodyWrapper>
      <Footer />
    </>
  );
};

export default Layout;
