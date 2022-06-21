import React from "react";
import styled from "styled-components";
import Button from "../Button";
import background from "../../images/"

const Testimonial = () => {
  return (
    <StyledSection>
      <h2>Trusted by Talents across the GLOBE!</h2>
      <div className="testimony">
        <p className="sub-text">
          “The consultants that reached out to me about the role were super
          helpful, understanding and amazing. They were literally with me at
          every step from the interview to the waiting process and finally to
          getting the Job. Thank you Akorede and Oluwatobi.”
        </p>
      </div>
      <h3>Get matched to your dream opportunity</h3>
      <p>
        Save time and Focus your energy in getting one step closer to your next
        best opportunity. Join our talent network now!
      </p>
      <Button value={"APPLY AS A TALENT"} color={"blue-btn"} />
    </StyledSection>
  );
};

export default Navbar;
const StyledSection = styled.section``;
