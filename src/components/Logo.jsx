import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Container = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  width: 100%;
  color: ${(props) => props.theme.text};
  z-index: 10;

  svg {
    width: 4rem;
    margin: auto;
    overflow: visible;
    stroke-linejoin: round;
    stroke-linecap: round;

    g {
      path {
        stroke: ${(props) => props.theme.text};
      }
    }
  }

  a {
    width: 150px;
    display: flex;
    align-items: center;
  }
`;

const TextWrapper = styled(motion.span)`
  color: ${(props) => props.theme.text};
  font-size: ${(props) => props.theme.fontlg};
  align-self: flex-end;
`;

const textVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    x: -5,
    transition: {
      duration: 2,
      delay: 2,
      ease: 'easeInOut',
    },
  },
};

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      ease: 'easeInOut',
    },
  },
};

const Logo = () => {
  return (
    <Container>
      <Link to="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          enableBackground="new 0 0 24 24"
          height="64px"
          viewBox="0 0 24 24"
          width="64px"
          fill="none"
        >
          <g></g>
          <g>
            <motion.path
              initial="hidden"
              animate="visible"
              variants={pathVariants}
              d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"
            />
          </g>
        </svg>
        <TextWrapper
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          K Studio
        </TextWrapper>
      </Link>
    </Container>
  );
};

export default Logo;
