import styled from 'styled-components';

const StyledHeader = styled.h2`
  font-size: 3.5em;
  text-align: center;
`;

const Header = ({ text }: { text: string }) => {
  return <StyledHeader>{text}</StyledHeader>;
};

export default Header;
