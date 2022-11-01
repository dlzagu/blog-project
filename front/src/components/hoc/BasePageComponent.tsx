import React from "react";
import styled from "styled-components";
import { BaseComponentType } from "@/types/common/BaseComponentType";

const BasePageComponent = ({ children }: BaseComponentType) => {
  return <BasePageComponentContainer>{children}</BasePageComponentContainer>;
};

const BasePageComponentContainer = styled.div`
  height: 100%;
  margin-top: 4rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export default BasePageComponent;
