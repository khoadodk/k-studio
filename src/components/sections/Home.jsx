import styled from 'styled-components';

import CoverVideo from '../CoverVideo';
import Logo from '../Logo';
import NavBar from '../NavBar';

const SectionWrapper = styled.section`
  min-height: 200vh;
  width: 100%;
  position: relative;
  overflow: hidden;
`;

const Home = () => {
  return (
    <SectionWrapper>
      <CoverVideo />
      <Logo />
      <NavBar />
    </SectionWrapper>
  );
};

export default Home;
