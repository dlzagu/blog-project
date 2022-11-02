import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import NavLinkDropDown from "./NavLinkDropDown";

function NavLink() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  return (
    <>
      {isLogin ? (
        <NavContainer>
          <Li>
            <CreateBlog>Create Blog</CreateBlog>
          </Li>
          <Li>
            <NavLinkDropDown />
          </Li>
        </NavContainer>
      ) : (
        <Login onClick={() => navigate("/login")}>Login</Login>
      )}
    </>
  );
}

const NavContainer = styled.ul`
  ${(props) => props.theme.mixins.flexBox()}
  gap:2rem;
`;
const Li = styled.li``;
const CreateBlog = styled.div`
  cursor: pointer;
  color: ${(props) => props.theme.darkGrey};
  transition: all 0.5s;
  &:hover {
    color: ${(props) => props.theme.mainBlack};
  }
`;
const Login = styled.div`
  width: 7rem;
  height: 4rem;
  cursor: pointer;
  font-weight: ${(props) => props.theme.weightBold};
  padding: 1rem 1rem;
  background-color: ${(props) => props.theme.themeColor};
  color: ${(props) => props.theme.mainWhite};
  border-radius: 3rem;
  transition: all 0.5s;
  ${(props) => props.theme.mixins.flexBox()}

  &:hover {
    background-color: ${(props) => props.theme.darkGrey};
  }
`;
export default NavLink;
