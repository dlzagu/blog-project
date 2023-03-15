import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";

import NavLinkDropdown from "./NavLinkDropdown";

const NavLinks = () => {
  const { auth } = useAppSelector((state) => state);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  return (
    <NavContainer>
      <li>
        <Nav
          onClick={() => {
            auth.access_token ? navigate("/") : navigate("login");
          }}
        >
          {auth.access_token ? "Home" : "Login"}
        </Nav>
      </li>
      <li>
        <Nav
          onClick={() => {
            auth.access_token ? navigate("createBlog") : navigate("regsiter");
          }}
        >
          {auth?.access_token ? "Create Blog" : "Register"}
        </Nav>
      </li>

      {auth.user?.role === "admin" && (
        <li>
          <Nav
            onClick={() => {
              navigate("category");
            }}
          >
            Category
          </Nav>
        </li>
      )}

      <li>{auth?.user && <NavLinkDropdown />}</li>
    </NavContainer>
  );
};

const NavContainer = styled.ul`
  ${({ theme }) => theme.mixins.flexBox()}
  ${({ theme }) => theme.mixins.textSm()}
  border-radius: 0.8rem;
  border-color: ${({ theme }) => theme.lightGrey};
  padding: 0.8rem;
  * + * {
    margin-left: ${({ theme }) => theme.spacingLarge};
  }
  margin-top: 0px;
  font-weight: ${({ theme }) => theme.weightSemiBold};
  border-width: 0px;
  background-color: ${({ theme }) => theme.mainWhite};
`;
const Nav = styled.nav`
  display: block;
  padding-top: ${({ theme }) => theme.spacingSemiRegular};
  padding-bottom: ${({ theme }) => theme.spacingSemiRegular};
  padding-right: ${({ theme }) => theme.spacingSemiMedium};
  padding-left: ${({ theme }) => theme.spacingRegular};
  color: ${({ theme }) => theme.darkGrey};
  border-radius: ${({ theme }) => theme.spacingSmallest};

  &:hover {
    background-color: transparent;
    color: ${({ theme }) => theme.themeColor};
  }
`;

export default NavLinks;
