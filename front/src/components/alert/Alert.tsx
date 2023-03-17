import { useAppSelector } from "../../app/hooks";
import styled from "styled-components";
import Loader from "./Loader";
import Toast from "./Toast";
import { theme } from "../../styles/theme";

const Alert = () => {
  const { alert } = useAppSelector((state) => state);

  return (
    <div>
      {alert.loading && <Loader />}

      {alert.error && (
        <Toast title="Error" body={alert.error} bgColor={theme.mainRed} />
      )}

      {alert.success && (
        <Toast title="Success" body={alert.success} bgColor={theme.mainGreen} />
      )}
    </div>
  );
};

export default Alert;

export const showErrMsg = (msg: string) => {
  return <ErrorMsg>{msg}</ErrorMsg>;
};

export const showSuccessMsg = (msg: string) => {
  return <SuccessMsg>{msg}</SuccessMsg>;
};

const ErrorMsg = styled.div`
  text-align: center;
  background-color: ${({ theme }) => theme.mainRed};
  color: ${({ theme }) => theme.darkGrey};
  padding: ${({ theme }) => theme.spacingSemiMedium};
  border-radius: ${({ theme }) => theme.spacingSmallest};
`;

const SuccessMsg = styled.div`
  text-align: center;
  background-color: ${({ theme }) => theme.mainGreen};
  color: ${({ theme }) => theme.darkGrey};
  padding: ${({ theme }) => theme.spacingSemiMedium};
  border-radius: ${({ theme }) => theme.spacingSmallest};
`;
