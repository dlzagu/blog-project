import React from "react";
import {
  UseFormRegister,
  UseFormWatch,
  FieldErrorsImpl,
} from "react-hook-form";
import styled from "styled-components";
import BaseIntputContainer from "../hoc/BaseInputContainer";
import BaseValidateTextContainer from "../hoc/BaseValidateTextContaniner";
import { AuthFormInitialType } from "../../types/TypeScript";

interface Props {
  register: UseFormRegister<AuthFormInitialType>;
  watch: UseFormWatch<AuthFormInitialType>;
  errors: Partial<FieldErrorsImpl<AuthFormInitialType>>;
  onRegisterSubmitEvent: (e: React.FormEvent) => void;
}

const AuthReigster: React.FC<Props> = ({
  register,
  watch,
  errors,
  onRegisterSubmitEvent,
}) => {
  const curPassword = watch("password");
  const confirmPassword = watch("confirmPassword");

  return (
    <RegistrationFormContainer onSubmit={onRegisterSubmitEvent}>
      <BaseIntputContainer>
        <RegistrationInput
          {...register("email", {
            required: true,
            pattern: /^\S+@\S+$/i,
          })}
          placeholder="이메일"
        />
        {errors.email && (
          <BaseValidateTextContainer>
            올바른 이메일을 입력해주세요.
          </BaseValidateTextContainer>
        )}
      </BaseIntputContainer>
      <BaseIntputContainer>
        <RegistrationInput
          {...register("name", {
            required: true,
            minLength: 4,
          })}
          placeholder="이름"
        />
        {errors?.name && (
          <BaseValidateTextContainer>
            닉네임을 4글자 이상 사용해주세요.
          </BaseValidateTextContainer>
        )}
      </BaseIntputContainer>
      <BaseIntputContainer>
        <RegistrationInput
          {...register("password", {
            required: true,
            maxLength: 15,
            minLength: 8,
            pattern: /^.(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/,
          })}
          placeholder="비밀번호"
          type="password"
        />
        {errors.password && (
          <BaseValidateTextContainer>
            8~15자 영문 소문자, 숫자, 특수문자를 사용해주세요.
          </BaseValidateTextContainer>
        )}
      </BaseIntputContainer>
      <BaseIntputContainer>
        <RegistrationInput
          {...register("confirmPassword", {
            required: true,
          })}
          placeholder="비밀번호 재확인"
          type="password"
        />
        {confirmPassword && curPassword !== confirmPassword && (
          <BaseValidateTextContainer>
            비밀번호가 일치하지 않습니다.
          </BaseValidateTextContainer>
        )}
      </BaseIntputContainer>
      <RegistrationButtonContainer>
        <RegistrationButton type="submit">회원가입</RegistrationButton>
      </RegistrationButtonContainer>
    </RegistrationFormContainer>
  );
};

const RegistrationFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 1rem;
  margin-top: 5rem;
`;

const RegistrationInput = styled.input<{ isDuplicated?: boolean }>`
  width: 100%;
  font-size: ${(props) => props.theme.fontRegular};
  ${(props) => props.theme.CommonInputStyle}
  line-height: 3rem;
  box-shadow: 1px 1px 3px ${(props) => props.theme.mainGrey};
  border-color: ${(props) => props.isDuplicated && "red"};
`;

const RegistrationButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const RegistrationButton = styled.button`
  ${(props) => props.theme.CommonButtonStyle}
  width: 70%;
  line-height: 4rem;
  font-size: ${(props) => props.theme.fontRegular};
  color: ${(props) => props.theme.mainWhite};
  background-color: ${(props) => props.theme.themeColor};
  text-align: center;
  cursor: pointer;
  &:disabled {
    color: ${(props) => props.theme.lightDarkGrey};
    background-color: ${(props) => props.theme.darkGrey};
  }
`;

const EmailVerificationButton = styled.button`
  ${(props) => props.theme.CommonButtonStyle}
  color: ${(props) => props.theme.themeColor};
  position: absolute;
  top: 18.5rem;
  font-size: ${(props) => props.theme.fontRegular};
  color: ${(props) => props.theme.themeColor};
  background-color: ${(props) => props.theme.mainWhite};
  right: 6rem;
  height: 3rem;
  cursor: pointer;
  &:disabled {
    color: ${(props) => props.theme.lightDarkGrey};
    border-color: ${(props) => props.theme.darkGrey};
  }
`;

const VerifiedEmailButton = styled(EmailVerificationButton)`
  ${(props) => props.theme.CommonButtonStyle}
  border: 1px solid green;
  color: green;
`;

export default AuthReigster;
