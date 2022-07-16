import styled from 'styled-components';

const TitleContainer = styled.h1`
  font-size: 6rem;
  font-family: 'Lora', serif;
`;

const Title = ({ titleText }) => {
  return <TitleContainer>{titleText}</TitleContainer>;
};

export default Title;
