import React from "react";
import styled from "styled-components";
import application from "../../images/application.png";
import Button from "../Button";


const Application = () => {
  return (
    <StyledSection>
      <h3>Get matched to your dream opportunity</h3>
      <p>
        Save time and Focus your energy in getting one step closer to your next
        best opportunity. Join our talent network now!
      </p>
      <Button value={"APPLY AS A TALENT"} color={"blue-btn"} />
    </StyledSection>
  );
};

export default Application;
const StyledSection = styled.section``;
