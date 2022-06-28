import React from "react";
import styled from "styled-components";
import testimonial from "../../images/testimonial.png";
import quotes from "../../images/quotes.png";

const Testimonial = () => {
  return (
    <StyledSection>
      <h2>Trusted by Talents across the GLOBE!</h2>
      <div className="underlay">
        <div className="overlay"></div>
        <div className="testimony">
          <p className="testimony-text">
            “The consultants that reached out to me about the role were super
            helpful, understanding and amazing. They were literally with me at
            every step from the interview to the waiting process and finally to
            getting the Job. Thank you Akorede and Oluwatobi.”
          </p>
        </div>
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
  padding: 4rem 0;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  display: flex;
  /* justify-content */
  flex-direction: column;
  align-items: center;

  h2 {
    max-width: 25rem;
    font-weight: 600;
  }
  .underlay {
    background-color: white;
    border-radius: 20px;
    min-width: 45.6rem;
    min-height: 391px;
    margin: 6rem auto 0;
    justify-self: center;
    border-radius: 5px;
    box-shadow: 0px 18px 52.8537px rgba(215, 228, 249, 0.5);
    border-radius: 20px;
    position: relative;
    border: 1px solid white;
  }
  .testimony {
    padding: 2rem 2rem;
    background: url(${quotes});
    background-color: white;
    background-repeat: no-repeat;
    background-position: 50% 20%;
    text-align: center;
    display: flex;
    align-items: center;
    box-shadow: 0px 18px 52.8537px rgba(215, 228, 249, 0.5);
    border-radius: 20px;
    position: absolute;
    left: 50%;
    bottom: 1rem;
    transform: translate(-50%);
    width: 110%;
    height: 100%;
    z-index: 2;
  }
  .testimony-text {
    font-weight: 500;
    font-size: 26px;
    line-height: 40px;
    color: #94a2b3;
  }

  .overlay {
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    background-color: white;
    bottom: 0.5rem;
    z-index: 1;
    border-radius: 20px;
    width: 105%;
    height: 100%;
    box-shadow: 0px 18px 52.8537px rgba(215, 228, 249, 0.5);
  }
  @media (max-width: 1000px) {
    .underlay {
      min-width: 30rem;
    }
  }
  @media (max-width: 800px) {
    .underlay {
      min-width: 25rem;
    }
    @media (max-width: 500px) {
      .testimony-text {
        font-size: 20px;
      }
      .testimony {
        padding: 1.5rem 2rem;
      }
      .underlay {
        min-width: 23rem;
      }
    }
  }
`;
