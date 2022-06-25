import React from "react";
import styled from "styled-components";
import Button from "../Button";
import background from "../../images/back.png";

const Features = () => {
  return (
    <StyledSection>
      <div className="item-box">
        <div className="item1">
          <img
            className="feature-img"
            src={require("../../images/women.png")}
            alt="women"
          />
          <div className="featured-text">
            <h3>
              A One-Stop <br /> Platform
            </h3>
            <p className="sub-text-white">
              You connect with TalentCo <br /> We communicate with dozens of
              companies, platforms and hundreds of recruiters to single out the
              best opportunity for you!
            </p>
            <Button value={"Get Started"} color={"gold-btn"} />
          </div>
        </div>
        <div className="item2">
          <div className="featured-text2">
            <h3>Talent Centric Process, Putting you FIRST!</h3>
            <p className="sub-text-white">
              TalentCo collaborates with companies who uphold the International
              standard hiring process. We ensure that good and structured career
              growth experiences are adopted for you.
            </p>
            <Button value={"Get Started"} color={"gold-btn"} />
          </div>
          <img
            className="feature-img2"
            src={require("../../images/officepple.png")}
            alt="women"
          />
        </div>
      </div>
    </StyledSection>
  );
};

export default Features;
const StyledSection = styled.section`
  background: url(${background}) no-repeat center/ cover;
  position: relative;
  background-color: green;
  color: white;
  padding: 1rem 0;
  margin-top: 3rem;
  border: 1px solid red;

  .item-box {
    display: flex;
    flex-direction: column;
    max-width: 70rem;
    margin: 0 auto;
    border: 1px solid red;
  }
  .item1,
  .item2 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 80%;
    /* border: 1px solid red; */
  }
  .item1 {
    align-self: flex-start;
  }
  .item2 {
    align-self: flex-end;
    /* margin-top: 2rem; */
  }
  h3 {
    color: white;
    font-weight: 700;
    font-size: 36px;
    line-height: 44px;
  }
  .feature-img2 {
    width: 430px;
    height: 548px;
  }
  .feature-img2 {
    width: 430px;
    height: 548px;
  }
  .featured-text,
  .featured-text2 {
    /* min-width: 15rem; */
    max-width: 480px;
    min-height: 19rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    text-align: left;
  }

  @media (max-width: 1000px) {
  }

  @media (max-width: 800px) {
    .item-box {
      max-width: 95%;
    }
    .item-box > * {
      align-self: center;
    }
  }
  @media (max-width: 600px) {
    .item1,
    .item2 {
      flex-direction: column;
    }
  }
`;
