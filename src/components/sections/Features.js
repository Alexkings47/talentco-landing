import React from "react";
import styled from "styled-components";
import Button from "../Button";
import background from "../../images/feature-back.png";
import background3 from "../../images/feature-back2.png";
import back2 from "../../images/backgroundleft.png";
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
              You connect with TalentCo <br/> We communicate with dozens of companies,
              platforms and hundreds of recruiters to single out the best
              opportunity for you!
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
  background: url(${background}), url(${background3}), url(${back2});
  background-color: #3789ff;
  background-repeat: no-repeat;
  background-position: 100% -20%, 85% 85%, 18% 20%;
  background-size: 13rem, 15rem, 10rem;
  position: relative;
  color: white;
  min-height: 65vh;

  .item-box {
    display: flex;
    flex-direction: column;
    max-width: 60rem;
    margin: 0 auto;
  }
  .item1,
  .item2 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 80%;
  }
  .item1 {
    align-self: flex-start;
  }
  .item2 {
    align-self: flex-end;
    margin-top: 2rem;
  }
h3{
  color: white;
}
  .feature-img,
  .feature-img2 {
    max-height: 20rem;
    min-height: 15rem;
    margin: -2rem 2rem 0 0;
  }
  .feature-img2 {
    margin: 0 0 -4rem 2rem;
  }
  .featured-text,
  .featured-text2 {
    min-width: 15rem;
    max-width: 25rem;
    min-height: 15rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    text-align: left;
  }

  @media (max-width: 1000px) {
    background-position: 100% -20%, 100% 85%, 2% 20%;
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
    .item2{
      flex-direction: column;
    }
  }
`;
