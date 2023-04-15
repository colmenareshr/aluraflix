import styled from 'styled-components';
import { Colors, Sizes } from '../UI/variables';
const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLogo src='../public/logo-nbaplay.png' alt='Logo NBA Play' />
      <HeaderNav>
        <HeaderNavButton>Novo vídeo</HeaderNavButton>
      </HeaderNav>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid ${Colors.primaryBtnHover};
  padding: 1.5rem;

  @media (min-width: ${Sizes.desktop}) {
    justify-content: space-between;
  }
`;
const HeaderLogo = styled.img`
  max-width: 18rem;
  height: auto;
`;

const HeaderNav = styled.nav`
  display: flex;
`;

const HeaderNavButton = styled.a`
  display: none;
  border: 2px solid ${Colors.textColor};
  padding: 0.5rem 1rem;
  font-weight: 700;
  transition: 0.2s ease-in-out all;
  cursor: pointer;

  &:hover {
    background-color: ${Colors.primaryBtn};
    color: ${Colors.textPrimaryBtn};
  }

  @media (min-width: ${Sizes.desktop}) {
    display: block;
  }
`;
