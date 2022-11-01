import React from "react";
import styled from "styled-components";
import { BaseComponentType } from "@/types/common/BaseComponentType";

const BaseIntputContainer = ({ children }: BaseComponentType) => {
  return <BaseInputContainerStyle>{children}</BaseInputContainerStyle>;
};

const BaseInputContainerStyle = styled.div`
  margin-bottom: 3rem;
  font-size: ${(props) => props.theme.fontSmall};
`;

export default BaseIntputContainer;
