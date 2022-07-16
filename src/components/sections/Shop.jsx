import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import styled from 'styled-components';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

import Title from '../Title';
import img4 from '../../assets/img/4.jpg';
import img5 from '../../assets/img/5.jpg';
import img6 from '../../assets/img/6.jpg';
import img7 from '../../assets/img/7.jpg';
import img8 from '../../assets/img/8.jpg';
import img9 from '../../assets/img/9.jpg';
import img10 from '../../assets/img/10.jpg';
import img11 from '../../assets/img/11.jpg';
import img12 from '../../assets/img/12.jpg';
import img13 from '../../assets/img/13.jpg';

const SectionWrapper = styled.section`
  min-height: 100vh;
  height: auto;
  width: 100vw;

  overflow: hidden;
  margin: 0 auto;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

const TitleWrapper = styled.span`
  position: absolute;
  top: 5%;
  left: 2%;
  z-index: 10;
  color: ${(props) => props.theme.text};
  text-shadow: 1px 1px 1px ${(props) => props.theme.body};
`;

const LeftContainer = styled.div`
  width: 35%;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  z-index: 6;
  min-height: 100vh;

  position: fixed;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    width: 80%;
    margin: 0 auto;
    font-size: ${(props) => props.theme.fontlg};
    color: ${(props) => props.theme.text};
  }
`;

const RightContainer = styled.div`
  position: absolute;
  left: 35%;
  padding-left: 35%;
  min-height: 100vh;
  /* width: 65%; */
  background-color: ${(props) => props.theme.grey};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  h1 {
    width: 5rem;
    margin: 0 2rem;
  }
`;

const ProductWrapper = styled(motion.div)`
  width: 20rem;
  margin-right: 6rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    min-height: 480px;
    cursor: pointer;
  }
  h1 {
    display: inline-block;
    width: fit-content;
    font-weight: 500;
    text-align: center;
    cursor: pointer;
  }
`;

const Product = ({ img, title = '' }) => {
  return (
    <ProductWrapper
      initial={{ filter: 'grayscale(100%)' }}
      whileInView={{ filter: 'grayscale(0%)' }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false, amount: 'all' }}
    >
      <img src={img} alt={title} />
      <h1>{title}</h1>
    </ProductWrapper>
  );
};

const Shop = () => {
  gsap.registerPlugin(ScrollTrigger);

  const ref = useRef(null);
  const horizontalRef = useRef(null);

  useLayoutEffect(() => {
    let tl = gsap.timeline();
    let element = ref.current;
    // Get the right container
    let scrollingElement = horizontalRef.current;
    // Get the entire container width
    let pinWrapWidth = scrollingElement.offsetWidth;

    setTimeout(() => {
      tl.to(element, {
        scrollTrigger: {
          trigger: element,
          start: 'top top',
          end: pinWrapWidth,
          scroller: '.App', // locomotive element
          scrub: true,
          pin: true,
          // markers: true,
        },
        // We have to increase scrolling height of this section same as the scrolling element width
        height: `${scrollingElement.scrollWidth}px`,
        ease: 'none',
      });

      // Horizontal Scroll
      tl.to(scrollingElement, {
        scrollTrigger: {
          trigger: scrollingElement,
          start: 'top top',
          end: pinWrapWidth,
          scroller: '.App', // locomotive element
          scrub: true,
          markers: true,
        },
        // We have to increase scrolling height of this section same as the scrolling element width
        x: -pinWrapWidth,
        ease: 'none',
      });

      ScrollTrigger.refresh();
    }, 1000);

    return () => {};
  }, []);

  return (
    <SectionWrapper ref={ref}>
      <TitleWrapper
        data-scroll
        data-scroll-speed="-1.5"
        data-scroll-direction="horizontal"
      >
        <Title titleText="Our Collections" />
      </TitleWrapper>
      <LeftContainer>
        <p>
          The brand new collection is currently being developed in
          USA. We create our products using best quality material,
          including the use of some of the pure fabrics to make our
          products. All products are made using the best materials,
          from the finest cotton to the finest fabrics.
          <br />
          <br />
          We have lots of different clothing options like shoes,
          jackets and dresses. Not only clothes but we also provide
          unique Jewellery as well. It is great for us to carry our
          new clothes all around the country and look different.
        </p>
      </LeftContainer>
      <RightContainer ref={horizontalRef}>
        <Product img={img4} title="Ethnic Wear" />
        <Product img={img5} title="Blazers" />
        <Product img={img6} title="Suits" />
        <Product img={img7} title="Antiques" />
        <Product img={img8} title="Short Sleeves" />
        <Product img={img9} title="Jackets" />
        <Product img={img10} title="Special Edition" />
        <Product img={img11} title="Men's" />
        <Product img={img12} title="Women's" />
        <Product img={img13} title="Limited Edition" />
      </RightContainer>
    </SectionWrapper>
  );
};

export default Shop;
