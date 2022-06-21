import React from "react";
import styled from "styled-components";
import Button from "../Button";
import background from "../../images/feature-back.png";
import back2 from "../../images/backgroundleft.png";
const Features = () => {
  return (
    <StyledSection>
      <div className="item1">
        <img
          className="feature-img"
          src={require("../../images/women.png")}
          alt="women"
        />
        <div className="featured-text">
          <h3>
            A one-Stop <br /> Platform
          </h3>
          <p className="sub-text-white">
            You connect with TalentCo We communicate with dozens of companies,
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
          src={require("../../images/group-people.png")}
          alt="women"
        />
      </div>
    </StyledSection>
  );
};

export default Features;
const StyledSection = styled.section`
  background: url(${background}), url(${back2});
  background-color: #3789ff;
  background-repeat: no-repeat;
  background-position: right top, 20% 20%;
  background-size: 15rem, 15rem;
  padding: 0 8rem 3rem 8rem;
  position: relative;
  color: white;
  /* margin-bottom: 4rem; */
  display: grid;
  height: 80vh;

  .item1,
  .item2 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    margin: 0 auto;
    min-width: 45rem;
  }
  .item1 {
    padding-right: 10rem;
  }
  .item2 {
    padding-left: 10rem;
  }

  .feature-img {
    height: 20rem;
    position: absolute;
    top: -2rem;
    left: 0;
  }
  .feature-img2 {
    height: 20rem;

    position: absolute;
    bottom: -4rem;
    right: -2rem;
  }
  .featured-text,
  .featured-text2 {
    max-width: 18rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  }
  .featured-text {
    margin-left: 2rem;
  }
  .featured-text2 {
    margin-right: 2rem;
  }

  @media (max-width: 1000px) {
    padding: 0 2rem;
    background-position: right top, 1% 20%;
  }
  .item1 {
    padding-right: 8rem;
    justify-content: flex-end;
  }
  .item2 {
    padding-left: 8rem;
  }
`;
