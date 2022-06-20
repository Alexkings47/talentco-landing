import React from "react";
import styled from "styled-components";
import Header from "../components/sections/Header";
import Modes from "../components/sections/Modes"


const Home = () => {
  return (
     <StyledMain>
      <Header />
      <Modes />
    </StyledMain>
  );
};

export default Home;
const StyledMain = styled.main`
`;
