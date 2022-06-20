import React from "react";
import styled from "styled-components";
import { IoIosArrowForward } from "react-icons/io";

const ModeCard = ({ imgUrl, title, desc, offset }) => {
  return (
    <StyledDiv offset={offset}>
      <img src={require(`../images/${imgUrl}`)} alt={title} />
      <h3>{title}</h3>
      <p className="sub-text">{desc}</p>
      <button className="learn-btn">
        Learn More <IoIosArrowForward />
      </button>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  display: flex;
  padding-top: ${props => props.offset};
  flex-direction: column;
  max-height: 300px;
  align-items: flex-start;
  max-width: 20rem;
  text-align: left;
  img {
    max-width: 100%;
    padding: 0;
  }
  .learn-btn {
    color: #299ef3;
    border: none;
    background: none;
    display: flex;
    align-items: center;
  }
  .learn-btn::after {
    width: 100%;
  }
  .learn-btn:hover::after {
    content: "lorem ipsum";
  }
`;
export default ModeCard;
