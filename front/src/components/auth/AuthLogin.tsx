import React from "react";
import styled from "styled-components";
import { UseFormRegister, FieldErrorsImpl } from "react-hook-form";
import BaseIntputContainer from "../hoc/BaseInputContainer";
import BaseValidateTextContainer from "../hoc/BaseValidateTextContaniner";
import { AuthFormInitialType } from "../../types/TypeScript";

interface AuthLoginProps {
  register: UseFormRegister<AuthFormInitialType>;
  errors: Partial<FieldErrorsImpl<AuthFormInitialType>>;
  onLoginSubmitEvent: (e: React.FormEvent) => void;
}

const AuthLogin = ({
  register,
  errors,
  onLoginSubmitEvent,
}: AuthLoginProps) => {
  const isValidAll = !errors.email && !errors.password;
  return (
    <AuthLoginFormContainer onSubmit={onLoginSubmitEvent}>
      <BaseIntputContainer>
        <AuthLoginInput
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
        <AuthLoginInput
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
            올바른 비밀번호를 입력해주세요.
          </BaseValidateTextContainer>
        )}
      </BaseIntputContainer>
      <AuthLoginButtonContainer>
        <AuthLoginButton type="submit" disabled={!isValidAll && true}>
          로그인
        </AuthLoginButton>
      </AuthLoginButtonContainer>
    </AuthLoginFormContainer>
  );
};

const AuthLoginFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 1rem;
  margin-top: 5rem;
`;

const AuthLoginInput = styled.input`
  width: 100%;
  font-size: ${(props) => props.theme.fontRegular};
  ${(props) => props.theme.CommonInputStyle}
  line-height: 3rem;
  box-shadow: 1px 1px 3px ${(props) => props.theme.mainGrey};
`;
const AuthLoginButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const AuthLoginButton = styled.button`
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

export default AuthLogin;
