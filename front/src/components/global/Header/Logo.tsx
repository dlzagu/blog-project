import styled from "styled-components";
import logo from "../../../assets/logo.png";
import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();
  return (
    <Img
      src={logo}
      alt="logo"
      className="w-14 h-14"
      onClick={() => navigate("/")}
    />
  );
};

export default Logo;
const Img = styled.img`
  height: 5rem;
  width: 5rem;
  cursor: pointer;
`;
