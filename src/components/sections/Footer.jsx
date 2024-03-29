import React from 'react';
import styled from 'styled-components';

import Logo from '../../assets/svg/star_white.svg';
import { motion } from 'framer-motion';
import { useLocomotiveScroll } from 'react-locomotive-scroll';

const SectionWrapper = styled.section`
  min-height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};

  position: relative;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 10vw;
    height: auto;
  }
  h3 {
    font-size: ${(props) => props.theme.fontxxl};
    font-family: 'Kaushan Script';
  }
`;

const FooterComponent = styled(motion.footer)`
  width: 80vw;

  ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin: 2rem;
    margin-top: 4rem;
    padding: 0 1rem;
    border-top: 1px solid ${(props) => props.theme.text};
    border-bottom: 1px solid ${(props) => props.theme.text};
    @media (max-width: 768px) {
      flex-direction: column;
      font-size: ${(props) => props.theme.fontsm};
    }
  }

  li {
    padding: 2rem;
    font-size: ${(props) => props.theme.fontlg};
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

const Bottom = styled.div`
  padding: 0.5rem 0;
  margin: 0 4rem;
  font-size: ${(props) => props.theme.fontlg};

  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    font-size: ${(props) => props.theme.fontmd};
    span {
      transform: none !important;
    }
  }
  a {
    text-decoration: underline;
  }
`;

const Footer = () => {
  const { scroll } = useLocomotiveScroll();

  const handleScroll = (id) => {
    let elem = document.querySelector(id);

    scroll.scrollTo(elem, {
      offset: '-100',
      duration: '2000',
      easing: [0.25, 0.0, 0.35, 1.0],
    });
  };

  return (
    <SectionWrapper>
      <LogoContainer>
        <img
          data-scroll
          data-scroll-speed="2"
          src={Logo}
          alt="Wibe Studio"
        />
        <h3 data-scroll data-scroll-speed="-1">
          K Studio
        </h3>
      </LogoContainer>
      <FooterComponent
        initial={{ y: '-400px' }}
        whileInView={{ y: 0 }}
        viewport={{ once: false }}
        transition={{
          duration: 1.5,
        }}
      >
        <ul>
          <li onClick={() => handleScroll('#home')}>home</li>
          <li onClick={() => handleScroll('.about')}>about</li>
          <li onClick={() => handleScroll('#shop')}>shop</li>
          <li onClick={() => handleScroll('#new-arrival')}>
            new arrival
          </li>
          <li>
            <a
              href="https://google.com"
              target="_blank"
              rel="noreferrer"
            >
              look book
            </a>
          </li>
          <li>
            <a
              href="https://google.com"
              target="_blank"
              rel="noreferrer"
            >
              reviews
            </a>
          </li>
        </ul>
        <Bottom>
          <span
            data-scroll
            data-scroll-speed="2"
            data-scroll-direction="horizontal"
          >
            &copy; {new Date().getFullYear()}. All Rights Reserved.
          </span>
          <span
            data-scroll
            data-scroll-speed="-2"
            data-scroll-direction="horizontal"
          >
            Made with &hearts; by &nbsp;
            <a
              href="https://khoado.dev"
              target="_blank"
              rel="noreferrer"
            >
              Khoa Do
            </a>
          </span>
        </Bottom>
      </FooterComponent>
    </SectionWrapper>
  );
};

export default Footer;
