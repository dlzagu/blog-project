import Logo from "./Logo";
import styled from "styled-components";
import NavLinks from "./NavLinks";
import Search from "./Search";

const Header = () => {
  return (
    <HeaderContainer>
      <ContentContainer>
        <Logo />

        <Search />

        <NavLinks />
      </ContentContainer>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  background: transparent;
  background-color: ${({ theme }) => theme.mainWhite};
  z-index: 10;
`;

const ContentContainer = styled.nav`
  width: 100%;
  height: 6.4rem;
  padding: 0.4rem 2.4rem 0.4rem 2.4rem;
  ${({ theme }) => theme.mixins.flexBox("row", "center", "space-between")};
  margin: auto;
`;
