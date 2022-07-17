import styled from 'styled-components';

const SectionWrapper = styled.section`
  min-height: 100vh;
  width: 100vw;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.grey};

  z-index: 12;
`;

const Container = styled.div`
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

const BannerComponent = styled.p`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: 'Lora', serif;

  color: ${(props) => props.theme.text};
  white-space: nowrap;
  text-transform: uppercase;
  line-height: 1;
  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.fontlg};
  }
  @media (max-width: 425px) {
    font-size: ${(props) => props.theme.fontmd};
  }

  span {
    display: block;
    background-color: ${(props) => props.theme.body};
    padding: 1rem 2rem;
  }
`;

const Banner = () => {
  return (
    <SectionWrapper>
      <Container id="up">
        <BannerComponent>
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="8"
            data-scroll-target="#up"
          >
            Fashion is an armour{' '}
          </span>
        </BannerComponent>
        <BannerComponent>
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="-6"
            data-scroll-target="#up"
          >
            to survive everyday life
          </span>
        </BannerComponent>
        <BannerComponent>
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="6"
            data-scroll-target="#up"
          >
            One is never over-dressed or
          </span>
        </BannerComponent>
        <BannerComponent>
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="-4"
            data-scroll-target="#up"
          >
            under-dressed
          </span>
        </BannerComponent>
        <BannerComponent>
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="6"
            data-scroll-target="#up"
          >
            with a Little Black Dress
          </span>
        </BannerComponent>
      </Container>
    </SectionWrapper>
  );
};

export default Banner;
