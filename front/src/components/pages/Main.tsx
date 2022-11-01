import React from "react";
import styled from "styled-components";

function Main() {
  return <MainContainer>hello</MainContainer>;
}

const MainContainer = styled.div`
  margin-top: 4rem;
  background-color: ${(props) => props.theme.lightGrey};
  height: 100vh;
`;

export default Main;
