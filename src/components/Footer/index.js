// This is footer component
import React from "react";
import styled from "styled-components"
import Linkedln from '../../assets/linkedin-square-icon.svg'
import Instagram from "../../assets/instagram-icon.svg";
import Gmail from "../../assets/envelope-open-icon.svg";
const FOOTER = styled.footer`
padding: 1.2rem calc(2.5rem + 2.5vw);
font-size: 1rem;
background: var(--nav);
color: var(--white);
display: flex;
align-items: center;
justify-content: space-between;

@media only Screen and (max-width: 48em){
  flex-direction: column;
  align-items: center;
  div{
    &:first-child {
      margin-bottom: 1rem;
    }
  }

}
`;

const LeftText = styled.div``;
const RightText = styled.div`
display: flex;
align-items: center;
img {
  width: 1.5rem;
filter: invert(100%) ;
margin-left: 1rem;
transition: all 0.2s ease-in-out;
}
a{
  &:hover{
    img{
      transform: scale(1.5);
      filter: invert(50%) sepia(100%) saturate(300%) hue-rotate(216deg) brightness(100%) contrast(97%);
    }
  }
}
`;
const Footer = () => {
  return (
    <FOOTER>
      <LeftText>
        &copy; {new Date().getFullYear()}. Built and Design by  <a href="#home" style={{color: "cyan"}}> Pravin Bandgar.</a>
      </LeftText>
      <RightText>
        Reach out to me via
        <a href="https://www.linkedin.com/in/pravin-bandgar-8b22b921b/">
          <img src={Linkedln} alt="Linkedln" />
        </a>
        <a href="https://www.instagram.com/pravin___official___08/?next=%2F">
          <img src={Instagram} alt="Instagram" />
        </a>
        <a href="mailto:bandgar142@gmail.com">
          <img src={Gmail} alt="Gmail" />
        </a>
      
      </RightText>
    </FOOTER>
  );
};

export default Footer;
