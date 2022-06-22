import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <StyledFooter>
      <div>
        <img
          src={require("../../images/footer-logo.png")}
          alt="logo"
          className="footer-logo"
        />
      </div>
      <ul className="footer-list">
        <li>Quick links</li>
        <li>For Companies</li>
        <li>FOr Talents</li>
        <li>Job Board</li>
      </ul>
      <ul className="footer-list">
        <li>Company</li>
        <li>About Us</li>
        <li>Blog</li>
        <li>Testimonials</li>
      </ul>
      <ul className="footer-list">
        <li>support</li>
        <li>Contact Us</li>
        <li>Help Center</li>
        <li>FAQs</li>
      </ul>
      <small className="copyright">
        &copy;2022 — Talentco. All Rights Reserved.
      </small>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  padding: 5rem 8rem 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(135px, 250px));
  column-gap: 2.5rem;
  justify-content: center;
  align-content: center;
  justify-items: center;
  row-gap: 1.5rem;
  color: white;
  width: 100%;
  background-color: #3789ff;
  font-size: 13px;
  text-transform: capitalize;

  .footer-list {
    display: flex;
    flex-direction: column;
    /* border: 1px solid red; */
    align-items: flex-start;
    min-height: 8rem;
    list-style-type: none;
  }
  .footer-logo {
    max-width: 10rem;
  }
  .footer-list > :first-child {
    font-size: 18px;
    font-weight: 700;
  }
  .copyright {
    font-weight: 600;
    grid-row: 2/3;
    grid-column: 1/-1;
    justify-self: center;
  }

  @media screen and (max-width: 1000px) {
    padding: 3rem 3rem 1rem;
  }
`;

export default Footer;
