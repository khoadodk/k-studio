import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled.div`
  width: 100%;
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
`;

const MenuItemWrapper = styled(motion.li)`
  text-transform: uppercase;
  color: ${(props) => props.theme.text};
  cursor: pointer;
`;

const NavBar = () => {
  const [click, setClick] = useState(false);
  return (
    <Container click={click}>
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
        >
          About
        </MenuItemWrapper>
        <MenuItemWrapper
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}
        >
          Shop
        </MenuItemWrapper>
        <MenuItemWrapper
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}
        >
          New Arrival
        </MenuItemWrapper>
      </MenuWrapper>
    </Container>
  );
};

export default NavBar;
