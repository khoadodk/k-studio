import styled from 'styled-components';
import Video from '../assets/video.mp4';
import { motion } from 'framer-motion';

const SectionWrapper = styled.section`
  min-height: 100vh;
  width: 100%;
  position: relative;

  video {
    width: 100%;
    height: 100vh;
    object-fit: cover;
    @media (max-width: 768px) {
      object-position: center center;
    }
    @media (max-width: 425px) {
      object-position: center 50%;
    }
  }
`;

const OverLay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background-color: ${(props) =>
    `rgba(${props.theme.bodyRgba}, 0.8)`};
`;

const TitleWrapper = styled(motion.div)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 8;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.text};
  div {
    display: flex;
  }
  h1 {
    font-family: 'Lora', serif;
    font-size: 150px;
    text-shadow: 1px 1px 1px ${(props) => props.theme.body};
    @media (max-width: 425px) {
      font-size: ${(props) => props.theme.fontxxxl};
    }
  }
`;

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 5, // 2
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
};

const CoverVideo = () => {
  return (
    <SectionWrapper>
      <OverLay />
      <TitleWrapper
        initial="hidden"
        animate="show"
        variants={containerVariants}
      >
        <div>
          <motion.h1
            variants={itemVariants}
            data-scroll
            data-scroll-delay=".12"
            data-scroll-speed="4"
          >
            K
          </motion.h1>
          <motion.h1
            variants={itemVariants}
            data-scroll
            data-scroll-delay=".08"
            data-scroll-speed="4"
          >
            A
          </motion.h1>
          <motion.h1
            variants={itemVariants}
            data-scroll
            data-scroll-delay=".04"
            data-scroll-speed="4"
          >
            Y
          </motion.h1>
        </div>
        <motion.h2
          variants={itemVariants}
          data-scroll
          data-scroll-speed="3"
        >
          Inspire. Create. Believe
        </motion.h2>
      </TitleWrapper>
      <video src={Video} type="video/m4" autoPlay muted loop />
    </SectionWrapper>
  );
};

export default CoverVideo;
