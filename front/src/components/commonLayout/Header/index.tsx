import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Search from "./Search";
import NavLink from "./NavLink";

function Header() {
  const navigate = useNavigate();
  return (
    <HeaderContainer>
      <ContentContainer>
        <Logo src="./logo.png" alt="logo" onClick={() => navigate("/")}></Logo>
        <Search />
        <NavLink />
      </ContentContainer>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  background-color: ${(props) => props.theme.mainWhite};
  z-index: 50;
`;

const ContentContainer = styled.div`
  width: 100%;
  height: 7rem;
  padding: 0 4rem;
  ${(props) => props.theme.mixins.flexBox("row", "center", "space-between")}
`;

const Logo = styled.img`
  cursor: pointer;
  width: 5rem;
`;
const Div = styled.div``;
