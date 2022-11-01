import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Search from "./Search";

function Header() {
  const navigate = useNavigate();
  return (
    <HeaderContainer>
      <ContentContainer>
        <Logo src="./logo.png" alt="logo" onClick={() => navigate("/")}></Logo>
        <Search />
        <Div>그냥</Div>
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
  height: 4rem;
  padding: 0 2rem;
  ${(props) => props.theme.mixins.flexBox("row", "center", "space-between")}
`;

const Logo = styled.img`
  cursor: pointer;
  width: 3rem;
`;
const Div = styled.div``;
