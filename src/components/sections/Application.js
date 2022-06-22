import React from "react";
import styled from "styled-components";
import Button from "../Button";

const Application = () => {
  return (
    <StyledSection>
      <div className="text-area">
        <h2>Get matched to your dream opportunity</h2>
        <p className="sub-text">
          Save time and Focus your energy in getting one step closer to your
          next best opportunity. Join our talent network now!
        </p>
        <Button value={"APPLY AS A TALENT"} color={"blue-btn"} />
      </div>
      <img
        src={require("../../images/application.png")}
        alt="people"
        className="people"
      />
    </StyledSection>
  );
};

export default Application;
const StyledSection = styled.section`
  background: linear-gradient(
    180deg,
    rgba(236, 240, 253, 0) 0%,
    rgba(236, 240, 253, 0.53) 14.32%,
    #ecf0fd 45.83%,
    rgba(236, 240, 253, 0.43) 84.33%,
    rgba(236, 240, 253, 0) 100%
  );
  overflow: hidden;
  text-align: center;

  .people {
    width: 90vw;
    margin-bottom: -3rem;
  }
  .text-area {
    max-width: 60%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    min-height: 15rem;
    padding-bottom: 5rem;
  }
  h2 {
    font-weight: 500;
  }
`;
