import styled, { css } from "styled-components";

interface VisibleModalProps {
  isOpenModal: boolean;
}

const isVisibleModal = css<VisibleModalProps>`
  ${(props) =>
    props.isOpenModal
      ? css`
          display: block;
        `
      : css`
          display: none;
        `}
`;

export const ModalBackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 9;
  background-color: rgba(0, 0, 0, 0.1);
  ${isVisibleModal};
`;

export const ModalContainer = styled.div`
  position: fixed;
  width: 440px;
  height: auto;
  left: 50%;
  top: 50%;
  text-align: center;
  transform: translate(-50%, -50%);
  border-radius: 8px;
  background-color: ${(props) => props.theme.mainWhite};
  padding: 1.25rem;
  box-shadow: 1px 1px 3px ${(props) => props.theme.darkGrey};
  ${isVisibleModal};
`;
export const ModalHeader = styled.div`
  width: 100%;
`;
export const ModalImageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ModalMainImage = styled.img`
  width: 10rem;
  height: 10rem;
  align-self: center;
`;

export const ModalImage = styled.img`
  cursor: pointer;
  width: 30px;
  height: 30px;
  align-self: flex-end;
`;
export const ModalTextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  margin: 3rem 0 3rem 0;
  font-size: ${(props) => props.theme.fontMedium};
`;
export const ModalButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
  gap: 2rem;
`;

export const ModalAcceptButton = styled.button`
  cursor: pointer;
  border: 8px;
  padding: 0.875rem 1.125rem;
  ${(props) => props.theme.CommonButtonStyle};
  color: ${(props) => props.theme.mainWhite};
  background-color: ${(props) => props.theme.themeColor};
  font-size: ${(props) => props.theme.fontRegular};
`;

export const ModalButton = styled.button`
  cursor: pointer;
  border: 8px;
  padding: 0.875rem 1.125rem;
  border: 1px solid ${(props) => props.theme.themeColor};
  border-radius: 4px;
  color: ${(props) => props.theme.themeColor};
  background-color: ${(props) => props.theme.mainWhite};
  font-size: ${(props) => props.theme.fontRegular};
`;
