import React from "react";
import styled from "styled-components";
import Button from "../Button";
import Navbar from "./Navbar";
import imgBack from "../../images/background.png";

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
  background: url(${imgBack}),
    linear-gradient(
      180deg,
      rgba(236, 240, 253, 0) 0%,
      rgba(236, 240, 253, 0.53) 14.32%,
      #ecf0fd 45.83%,
      rgba(236, 240, 253, 0.43) 84.33%,
      rgba(236, 240, 253, 0) 100%
    );
  background-position: right top;
  background-size: cover;
  padding: 1rem 1rem;
  background-repeat: no-repeat;
  background-position: 100% 10%;
  background-size: 20rem, cover;

  .bottom-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .bottom-header-text {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-between;
    min-height: 20rem;
    padding-left: 4rem;
    max-width: 35%;
  }
  h1 {
    font-size: 35px;
    color:#272D4E;
  }
  .header-image {
    max-width: 45%;
  }

  @media screen and (max-width: 800px) {
    .bottom-header {
      flex-direction: column;
      text-align: center;
      justify-content: space-between;
      min-height: 42rem;
      padding-top: 2rem;
    }
    .bottom-header > * {
      max-width: 70%;
    }
    .bottom-header-text {
      align-items: center;
      padding-left: 0;
      order: 2;
    }
  }
`;
