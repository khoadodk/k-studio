import styled from 'styled-components';

import CoverVideo from '../CoverVideo';
import Logo from '../Logo';
import NavBar from '../NavBar';

const SectionWrapper = styled.section`
  min-height: 100vh;
  width: 100vw;
  position: relative;
  overflow: hidden;
`;

const Home = () => {
  return (
    <SectionWrapper id="home">
      <CoverVideo />
      <Logo />
      <NavBar />
    </SectionWrapper>
  );
};

export default Home;
