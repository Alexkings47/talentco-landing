import React from "react";
import styled from "styled-components";
import Header from "../components/sections/Header";
import Modes from "../components/sections/Modes"
import Footer from "../components/sections/Footer"
import Features from "../components/sections/Features";

const Home = () => {
  return (
     <StyledMain>
      <Header />
      <Modes />
      <Features />
      <Footer />
    </StyledMain>
  );
};

export default Home;
const StyledMain = styled.main`
`;
