import React, { useState } from "react";
import styled from "styled-components";
import Button from "../Button";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  function showMenu() {
    setMenu(!menu);
  }

  return (
    <StyledNav menu={menu}>
      <img className="logo" src={require("../../images/LOGO.png")} alt="logo" />
      <button className="nav-menu-icon" onClick={showMenu}>
        <GiHamburgerMenu />
      </button>
      <ul className="flexed-list">
        <li>About Us</li>
        <li>For Companies</li>
        <li>For Talents</li>
        <li>Job Board</li>
        <li>Blog</li>
        <div className="button-div">
          <Button value={"HIRE A TALENT"} color={"trans-btn"} />
          <Button value={"APPLY AS A TALENT"} color={"blue-btn"} />
        </div>
      </ul>
      <div className="button-div1">
        <Button value={"HIRE A TALENT"} color={"trans-btn"} />
        <Button value={"APPLY AS A TALENT"} color={"blue-btn"} />
      </div>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: relative;
  padding: 1rem 2rem;

  .logo {
    max-width: 211px;
    height: 74px;
  }
  .flexed-list {
    display: flex;
    list-style: none;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    flex: 0.9;
    justify-content: space-between;
    align-items: center;
  }
  .button-div {
    display: flex;
    min-width: 25.6rem;
    margin-left: 1rem;
    justify-content: space-between;
    align-items: center;
  }
  .button-div > * {
    /* margin-right: 1rem; */
  }

  .nav-menu-icon {
    display: none;
    font-size: 15px;
  }
  .button-div1 {
    display: none;
  }
  @media screen and (max-width: 1300px) {
    padding: 1rem 10px;
    .nav-menu-icon {
      display: none;
    }
    .button-div {
      min-width: 19rem;
    }
    .flexed-list {
      flex: 0.95;
    }
  }
  @media (max-width: 1100px) {
    .flexed-list {
      display: ${(props) => (props.menu ? "flex" : "none")};
      position: absolute;
      bottom: -3rem;
      left: 50%;
      transform: translateX(-50%);
      width: 30rem;
      flex: 1;
    }
    .button-div1 {
      min-width: 20rem;
      display: flex;
      justify-content: space-between;
    }
  }
  @media (max-width: 600px) {
    flex-direction: column;
    min-height: 10rem;
  }
`;

export default Navbar;
