import React from "react";
import styled from "styled-components";

const Button = ({ value, color }) => {
  return <StyledButton className={color}>{value}</StyledButton>;
};

const StyledButton = styled.button`
  padding: 10px 1rem;
  border: none;
  max-width: 200px;
  height: 47px;
  position: relative;
  /* font-family: ; */
  color: white;
  z-index: 0;
  border-radius: 4px;

  &::before {
    content: "";
    width: 100%;
    height: 100%;
    transition: 0.5s;
    background: inherit;
    z-index: -1;
    border: none;
    display: inline-block;
    border-radius: 4px;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 1;
  }
  &:hover::before {
    transform: scaleY(1.3) scaleX(1.1); 
  }
`;
export default Button;
