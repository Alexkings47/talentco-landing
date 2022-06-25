import React from "react";
import styled from "styled-components";

const Button = ({ value, color }) => {
  return <StyledButton className={color}>{value}</StyledButton>;
};

const StyledButton = styled.button`
  /* padding: 13px 17px; */
  border: none;
  width: 200px;
  height: 47px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  position: relative;
  color: white;
  z-index: 0;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;

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
    opacity: 0.7;
  }
  &:hover::before {
    transform: scaleY(1.3) scaleX(1.1);
  }
  @media (max-width: 1300px) {
    max-width: 9rem;
    font-size: 11px;
  }
`;
export default Button;
