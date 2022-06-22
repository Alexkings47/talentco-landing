import React from "react";
import styled from "styled-components";
import testimonial from "../../images/testimonial.png";
import quotes from "../../images/quotes.png";

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
        <div className="underlay"></div>
      </div>
    </StyledSection>
  );
};

export default Testimonial;
const StyledSection = styled.section`
  background: url(${testimonial}),
    linear-gradient(
      180deg,
      rgba(236, 240, 253, 0) 0%,
      rgba(236, 240, 253, 0.53) 14.32%,
      #ecf0fd 45.83%,
      rgba(236, 240, 253, 0.43) 84.33%,
      rgba(236, 240, 253, 0) 100%
    );
  min-height: 70vh;
  text-align: center;
  margin-top: 4rem;
  padding: 4rem  0;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  display: flex;
  /* justify-content */
  flex-direction: column;
  align-items: center;
  h2 {
    max-width: 15rem;
  }
  .testimony {
    max-width: 25rem;
    padding: 1.5rem 2rem;
    background: url(${quotes});
    background-color: white;
    background-repeat: no-repeat;
    background-position: center;
    margin: 6rem auto 0;
    justify-self: center;
    border-radius: 5px;
    text-align: center;
    box-shadow: 0px 18px 52.8537px rgba(215, 228, 249, 0.5);
    border-radius: 20px;
    position: relative;
  }
  .testimony::after {
    content: "";
    z-index: -1;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    background-color: #ebe7df;
    bottom: -0.5rem;
    border-radius: 20px;
    width: 95%;
    height: 100%;
  }
  .underlay {
    position: absolute;
    left: 0;
    background-color: #bfbfbd;
    left: 50%;
    transform: translate(-50%);
    bottom: -1rem;
    border-radius: 20px;
    width: 90%;
    height: 100%;
    z-index: -2;
  }
`;
