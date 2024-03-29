import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useLocomotiveScroll } from 'react-locomotive-scroll';

const Container = styled(motion.div)`
  width: 100vw;
  z-index: 10;
  position: absolute;
  top: ${(props) =>
    props.click ? '0' : `-${props.theme.navHeight}`};

  display: flex;
  justify-content: center;
  align-items: center;

  transition: all 0.3s ease;
`;

const MenuBtnWrapper = styled.li`
  background-color: ${(props) => `rgba(${props.theme.textRgba},0.7)`};
  list-style: none;
  color: ${(props) => props.theme.body};
  width: 15rem;
  height: 2.5rem;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  clip-path: polygon(0 0, 100% 0, 80% 100%, 20% 100%);
  font-size: ${(props) => props.theme.fontmd};
  font-weight: 600;
  text-transform: uppercase;

  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
`;

const MenuWrapper = styled.ul`
  position: relative;
  height: ${(props) => props.theme.navHeight};
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  list-style: none;

  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 0 10rem;
  @media (max-width: 768px) {
    padding: 0;
  }
`;

const MenuItemWrapper = styled(motion.li)`
  text-transform: uppercase;
  color: ${(props) => props.theme.text};
  cursor: pointer;
`;

const NavBar = () => {
  const [click, setClick] = useState(false);

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
    <Container
      click={+click}
      initial={{
        y: '-100%',
      }}
      animate={{
        y: 0,
      }}
      transition={{
        duration: 2,
        delay: 5,
      }}
    >
      <MenuWrapper>
        <MenuBtnWrapper onClick={() => setClick(!click)}>
          Menu
        </MenuBtnWrapper>
        <MenuItemWrapper
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}
        >
          Home
        </MenuItemWrapper>
        <MenuItemWrapper
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}
          onClick={() => handleScroll('.about')}
        >
          About
        </MenuItemWrapper>
        <MenuItemWrapper
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}
          onClick={() => handleScroll('#shop')}
        >
          Shop
        </MenuItemWrapper>
        <MenuItemWrapper
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}
          onClick={() => handleScroll('#new-arrival')}
        >
          New Arrival
        </MenuItemWrapper>
      </MenuWrapper>
    </Container>
  );
};

export default NavBar;
