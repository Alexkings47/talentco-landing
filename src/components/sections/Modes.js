import React from "react";
import styled from "styled-components";
import ModeCard from "../ModeCard";

const Modes = () => {
  return (
    <StyledSection>
      <div className="mode-text">
        <h2>We open you to a pool of possibilities</h2>
        <p className="sub-text">
          Erase completely the stress and uncertainty of applying directly to
          companies, through job boards and dealing with a lot of recruiters.
          TalentCo will link you with opportunities you want and at companies
          with similar interests.
        </p>
      </div>
      <div className="cards">
        <ModeCard
          title={"Full time"}
          imgUrl={"fulltime.png"}
          desc={
            "Join top companies anywhere in the world as a full time employee"
          }
        />
        <ModeCard
          title={"Part-time"}
          desc={
            "Work and Study? No Problem! We help you find the most suitable jobs for your schedule"
          }
          imgUrl={"paypal.png"}
          offset={"4rem"}
        />
        <ModeCard
          title={"Freelance"}
          imgUrl={"office.png"}
          desc={
            "Are one off gigs your preference? Talentco helps you find freelance jobs of your choice"
          }
          offset={"8rem"}
        />
      </div>
    </StyledSection>
  );
};

export default Modes;
const StyledSection = styled.section`
  padding: 1rem 4rem 3rem;
  text-align: center;

  .mode-text {
    width: 75%;
    margin: 0 auto;
  }
  h2 {
    color: #272d4e;
    padding-bottom: 1.5rem;
  }
  .cards {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  @media screen and (max-width: 800px) {
    .cards {
      flex-direction: column;
    }
    @media (max-width: 500px) {
      padding: 1rem 1rem 3rem;

      .mode-text {
        width: 90%;
      }
    }
  }
`;
