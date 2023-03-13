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
  padding: 0 8%;
  background: transparent;
  background-color: ${({ theme }) => theme.mainWhite};
  z-index: 10;
`;

const ContentContainer = styled.nav`
  width: 100%;
  height: 7rem;
  ${({ theme }) => theme.mixins.flexBox("row", "center", "space-between")}
`;
