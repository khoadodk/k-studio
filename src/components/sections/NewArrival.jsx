import { useLayoutEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import Title from '../Title';
import img11 from '../../assets/img/11.jpg';
import img12 from '../../assets/img/12.jpg';
import img13 from '../../assets/img/13.jpg';
import img14 from '../../assets/img/14.jpg';

const SectionWrapper = styled.section`
  min-height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Overlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30vw;
  height: 90vh;

  box-shadow: 0 0 0 4vw ${(props) => props.theme.text};
  border: 3px solid ${(props) => props.theme.body};
  z-index: 9;
`;

const TitleWrapper = styled.span`
  position: absolute;
  top: 5%;
  left: 5%;
  z-index: 10;
  width: 20%;
  text-align: center;
`;

const TextWrapper = styled.div`
  width: 30%;
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 300;
  position: absolute;
  padding: 2rem;
  top: 0;
  right: 0;
  z-index: 10;
`;

const Container = styled.div`
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translate(-50%, 0);
  width: 25vw;
  height: auto;

  /* width: 65%; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5rem 0;
  img {
    width: 100%;
    height: auto;
    z-index: 5;
  }
`;

const Product = ({ img, title = '' }) => {
  return (
    <ProductWrapper>
      <img src={img} alt={title} />
      <h2>{title}</h2>
    </ProductWrapper>
  );
};

const NewArrival = () => {
  gsap.registerPlugin(ScrollTrigger);

  const ref = useRef(null);
  const verticalRef = useRef(null);

  useLayoutEffect(() => {
    let tl = gsap.timeline();
    let element = ref.current;
    let scrollingElement = verticalRef.current;

    setTimeout(() => {
      tl.to(element, {
        scrollTrigger: {
          trigger: element,
          start: 'top top',
          end: 'bottom top-=30%',
          scroller: '.App', // locomotive element
          scrub: true,
          pin: true,
          // markers: true,
        },
        ease: 'none',
      });

      // Vertical Scroll
      tl.fromTo(
        scrollingElement,
        {
          y: '0',
        },
        {
          y: '-100%',
          scrollTrigger: {
            trigger: scrollingElement,
            start: 'top top',
            end: 'bottom top',
            scroller: '.App', // locomotive element
            scrub: true,
          },
        }
      );

      ScrollTrigger.refresh();
    }, 1000);

    return () => {
      // Let's clear instances
      tl.kill();
      ScrollTrigger.kill();
    };
  }, []);

  return (
    <SectionWrapper ref={ref} id="new-arrival">
      <Overlay />
      <TitleWrapper data-scroll data-scroll-speed="-4">
        <Title titleText="New Arrivals" />
      </TitleWrapper>

      <Container ref={verticalRef}>
        <Product img={img11} title="Denims" />
        <Product img={img12} title="Hats" />
        <Product img={img13} title="Jackets" />
        <Product img={img14} title="T-shirts" />
      </Container>

      <TextWrapper data-scroll data-scroll-speed="-4">
        There is new collection available for cool clothes in all
        sizes. This collection is a great way to find a new look for
        you. It offers a variety of cool apparel styles to fit your
        taste, while you can also find some cool clothes that you can
        wear everyday.
        <br />
        <br />
        The first line of clothing you will see on this collection is
        for men. The collection also includes three new styles for
        women.
        <br />
        <br />
        Give it a try and experience a new look.
      </TextWrapper>
    </SectionWrapper>
  );
};

export default NewArrival;
