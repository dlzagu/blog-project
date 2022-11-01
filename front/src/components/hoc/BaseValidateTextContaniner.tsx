import React from "react";
import styled from "styled-components";
import { BaseComponentType } from "@/types/common/BaseComponentType";

const BaseValidateTextContainer = ({ children }: BaseComponentType) => {
  return <BaseContainer>{children}</BaseContainer>;
};

const BaseContainer = styled.div`
  width: 100%;
  text-align: center;
  color: ${(props) => props.theme.lightRed};
`;

export default BaseValidateTextContainer;
