import styled from 'styled-components';

import img1 from '../../assets/img/1.jpg';
import img2 from '../../assets/img/2.jpg';
import img3 from '../../assets/img/3.jpg';
import Title from '../Title';

const SectionWrapper = styled.section`
  min-height: 100vh;
  width: 100%;
  position: relative;

  display: flex;
  margin: 0 auto;
  background-color: ${(props) => props.theme.grey};
`;

const TitleWrapper = styled.span`
  position: absolute;
  top: 5%;
  left: 5%;
  z-index: 10;
`;

const LeftContainer = styled.div`
  width: 35%;
  font-size: ${(props) => props.theme.fontlg};
  position: relative;
  z-index: 10;
  margin: auto;
`;
const RightContainer = styled.div`
  width: 35%;
  position: relative;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;
  img {
    width: 100%;
    height: auto;
    border-radius: 2%;
  }

  .small-img-1 {
    width: 40%;
    position: absolute;
    right: 80%;
    bottom: 10%;
  }
  .small-img-2 {
    width: 40%;
    position: absolute;
    left: 80%;
    bottom: 30%;
  }
`;

const Home = () => {
  return (
    <SectionWrapper id="fixed-target">
      <TitleWrapper
        data-scroll
        data-scroll-speed="-2"
        data-scroll-direction="horizontal"
      >
        <Title titleText="About Us" />
      </TitleWrapper>

      <LeftContainer
        data-scroll
        data-scroll-sticky
        data-croll-direction="#fixed-target"
      >
        We're fashion studio based in california. We create unique
        designs that will blow your mind. We also design unique
        jewellary pieces. Fashion is an ART that can not be grasped by
        everyone.
        <br />
        <br />
        We are very dedicated to making our products. We offer unique
        and creative products to a wide range of people. We have a
        variety of styles, but for most people, all of the options are
        in the box. We specialize in making things that make you
        happy.
        <br />
        <br />
        We strive to build on our vision. As a fashion label, we do
        our best to create amazing experiences for all people. We are
        always looking to make something that is easy for everyone.
      </LeftContainer>
      <RightContainer>
        <img src={img1} alt="" />
        <img
          src={img2}
          alt=""
          className="small-img-1"
          data-scroll
          data-scroll-speed="-2"
        />
        <img
          src={img3}
          alt=""
          className="small-img-2"
          data-scroll
          data-scroll-speed="3"
        />
      </RightContainer>
    </SectionWrapper>
  );
};

export default Home;
