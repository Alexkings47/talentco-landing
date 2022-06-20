import React from "react";
import styled from "styled-components";
import Button from "../Button";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <StyledHeader>
      <Navbar />
      <div className="bottom-header">
        <div className="bottom-header-text">
          <h1>Welcome to your next growth opportunity.</h1>
          <p className="sub-text">
            Get connected with full time, freelance and remote jobs that are
            suited just for you and meet your prerequisite.
          </p>
          <Button value={"Apply As a talent"} color={"blue-btn"} />
        </div>
        <img
          className="header-image"
          src={require("../../images/featured.png")}
          alt="header"
        />
      </div>
    </StyledHeader>
  );
};

export default Header;
const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  background: linear-gradient(#eef5ff, white), url("../../images/background.png");

  padding: 1rem 3rem;

  .bottom-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .bottom-header-text {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }
  .header-image {
    width: 50%;
  }
`;
