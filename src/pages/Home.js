import React from "react";
import styled from "styled-components";
import Header from "../components/sections/Header";
import Modes from "../components/sections/Modes"
import Footer from "../components/sections/Footer"
import Features from "../components/sections/Features";
import Testimonial from "../components/sections/Testimonial";

const Home = () => {
  return (
     <StyledMain>
      <Header />
      <Modes />
      <Features />
      <Testimonial />
      <Footer />
    </StyledMain>
  );
};

export default Home;
const StyledMain = styled.main`
`;
