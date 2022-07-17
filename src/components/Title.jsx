import styled from 'styled-components';

const TitleContainer = styled.h1`
  font-size: 6rem;
  font-family: 'Lora', serif;
  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.fontxxl};
  }
  @media (max-width: 425px) {
    font-size: ${(props) => props.theme.fontlg};
  }
`;

const Title = ({ titleText }) => {
  return <TitleContainer>{titleText}</TitleContainer>;
};

export default Title;
