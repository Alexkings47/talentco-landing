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
      </ul>
      <div className="button-div">
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
    max-width: 18rem;
  }
  .flexed-list {
    display: flex;
    list-style: none;
    font-weight: 600;
    font-size: 14.5px;
    min-width: 25rem;
    justify-content: space-between;
    align-items: center;
  }
  .button-div {
    display: flex;
    min-width: 25rem;
    justify-content: space-between;
    align-items: center;
  }
  .flexed-list {
    min-width: 35rem;
  }
  .nav-menu-icon {
    display: none;
    font-size: 15px;
  }
  @media screen and (max-width: 1000px) {
    .nav-menu-icon {
      display: none;
    }
    .button-div {
      min-width: 20rem;
    }
    .flexed-list {
      display: ${(props) => (props.menu ? "flex" : "none")};
      position: absolute;
      bottom: -3rem;
      left: 50%;
      transform: translateX(-50%);
      width: 30rem;
    }
  }
`;

export default Navbar;
