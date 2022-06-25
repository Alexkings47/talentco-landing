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
  padding-top: ${(props) => props.offset};
  flex-direction: column;
  min-height: 23rem;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 430px;
  height: 293px;
  text-align: left;





  img {
    max-width: 100%;
    height: 293px;
  }
  
  .learn-btn {
    color: #299ef3;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
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
  @media screen and (max-width: 800px) {
    padding: 3.5rem 5px 0;
    align-items: center;
    text-align: center;
  }
`;
export default ModeCard;
