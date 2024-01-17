import React from "react";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <FooterWrapper>
      <p>Free to use! Made by Charly {currentYear} </p>
      <Link href="https://github.com/wikicrafter" target="_blank">
        <FaGithub />
      </Link>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.light};
  
`;

const Link = styled.a`
  position: relative;
  top: 0.2rem;
  margin-left: 1rem;
  color: ${({ theme }) => theme.colors.light};
  font-size: 2rem;

  &:hover {
    color: ${({ theme }) => theme.colors.redHover};
  }

  &:active {
    color: ${({ theme }) => theme.colors.lightActive};
  }
`;

export default Footer;
