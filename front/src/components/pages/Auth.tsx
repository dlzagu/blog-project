import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import AuthLogin from "../auth/AuthLogin";
import AuthReigster from "../auth/AuthRegister";
// import AuthEmailVerification from "@/components/auth/AuthEmailVerification";
import BasePageComponent from "../hoc/BasePageComponent";
import Modal from "../modal/Modal";
import useModal from "../hooks/useModal";
import { AuthFormInitialType } from "@/types/TypeScript";
import { ErrorType } from "@/types/TypeScript";
import { postAPI } from "../../api/FetchData";
import { useSetRecoilState } from "recoil";
// import { loginUserIdState } from "@/recoil/atoms/authState";
const TapMenu = ["로그인", "회원가입"];

const Auth = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm<AuthFormInitialType>({
    mode: "onChange",
    defaultValues: {
      email: "",
      name: "",
      password: "",
      confirmPassword: "",
    },
  });
  const [tabIndex, setTabIndex] = useState(0);
  const [errMessage, setErrMessage] = useState("");

  const [
    isOpenModal,
    ,
    handleModalOpenButtonClick,
    ,
    handleModalCloseButtonClick,
  ] = useModal(false);
  const [
    isOpenVerifyEmailModal,
    ,
    handleEmailVerificationModalOpenButtonClick,
    handleEmailVerificationAcceptButtonClick,
    handleEmailVerificationModalCloseButtonClick,
  ] = useModal(false);
  const [
    isOpenWelcomeModal,
    ,
    handleWelcomeModalOpenButtonClick,
    ,
    handleWelcomeModalCloseButtonClick,
  ] = useModal(false);

  useEffect(() => {
    reset({ email: "", name: "", password: "", confirmPassword: "" });
    setErrMessage("");
  }, [tabIndex, reset]);

  const curEmail = watch("email");
  //   const setLoginUserId = useSetRecoilState(loginUserIdState);

  const navigate = useNavigate();

  const handleRegisterSubmit = async (data: AuthFormInitialType) => {
    const { email, name, password } = data;

    const res = await postAPI("register", {
      email,
      name,
      password,
    });
    if (res) handleWelcomeModalOpenButtonClick();
  };

  const handleLoginSubmit = async (data: AuthFormInitialType) => {
    const { email, password } = data;
    // try {
    //   const res = await authLoginRequest("/api/auth/login", {
    //     email,
    //     password,
    //   });
    //   setLoginUserId(res.userId);
    //   navigate("/", { replace: true });
    // } catch (error) {
    //   const err = error as ErrorType;
    //   const status = err.response.data.status;
    //   if (status === 400)
    //     setErrMessage("이메일 혹은 비밀번호가 올바르지 않습니다.");
    //   if (status === 403) setErrMessage("탈퇴된 회원입니다.");
    //   handleModalOpenButtonClick();
    // }
  };

  return (
    <BasePageComponent>
      <LoginContainer tabIndex={tabIndex}>
        <LoginHeader>
          <LoginHeaderTitle>Hello</LoginHeaderTitle>
          <LoginTaps>
            {TapMenu.map((menu, index) => {
              return (
                <Tab
                  onClick={() => {
                    setTabIndex(index);
                  }}
                  key={index}
                  style={{
                    borderBottom:
                      tabIndex === index ? `2px solid #6E41E2` : "none",
                    color: tabIndex === index ? "#222" : "#d1d5db",
                  }}
                >
                  {menu}
                </Tab>
              );
            })}
          </LoginTaps>
        </LoginHeader>
        <FormContainer>
          {tabIndex === 0 ? (
            <AuthLogin
              register={register}
              errors={errors}
              onLoginSubmitEvent={handleSubmit(handleLoginSubmit)}
            />
          ) : (
            <AuthReigster
              register={register}
              watch={watch}
              errors={errors}
              onRegisterSubmitEvent={handleSubmit(handleRegisterSubmit)}
            />
          )}
        </FormContainer>
      </LoginContainer>
      <Modal
        isOpenModal={isOpenModal}
        isAlertModal={true}
        isShowImage={true}
        onModalCancelButtonClickEvent={handleModalCloseButtonClick}
      >
        {errMessage}
      </Modal>

      <Modal
        isOpenModal={isOpenWelcomeModal}
        isAlertModal={true}
        onModalCancelButtonClickEvent={() => {
          handleWelcomeModalCloseButtonClick();
          setTabIndex(0);
        }}
      >
        <WelComeImg src={`${process.env.PUBLIC_URL}/images/welcome-img.png`} />
        회원가입이 완료되었습니다.
      </Modal>
    </BasePageComponent>
  );
};

const LoginContainer = styled.div`
  position: absolute;
  top: 17%;

  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 8px;
  background-color: ${(props) => props.theme.mainWhite};
  box-shadow: 1px 4px 5px ${(props) => props.theme.lightDarkGrey};
  width: 50rem;
  height: ${(props) => (props.tabIndex === 0 ? "45rem" : "60rem")};
`;
const LoginHeader = styled.div`
  width: 100%;
  height: 12rem;
  border-bottom: 1px solid ${(props) => props.theme.lightDarkGrey};
`;
const LoginHeaderTitle = styled.div`
  margin: 2rem 0 2rem 3rem;
  font-size: ${(props) => props.theme.fontLarge};
  font-weight: bold;
`;
const LoginTaps = styled.div`
  display: flex;
  margin-left: 2rem;
  height: 3rem;
  font-size: ${(props) => props.theme.fontRegular};
`;
const Tab = styled.div`
  margin-right: 3rem;
  cursor: pointer;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direcrtion: column;

  height: 100%;
  justify-content: center;
`;

const WelComeImg = styled.img``;
export default Auth;
