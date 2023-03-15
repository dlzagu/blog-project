import { useRef, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { logout } from "../../../features";
import { useOnClickOutside } from "../../../hooks";
import { useNavigate } from "react-router-dom";

const NavLinkDropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const {
    auth: { user },
  } = useAppSelector((state) => state);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const navLinkDropdownRef = useRef<HTMLDivElement>(null);

  const handleOutsideClicks = (event: MouseEvent) => {
    if (
      isDropdownOpen &&
      navLinkDropdownRef.current &&
      !navLinkDropdownRef.current.contains(event.target as any)
    ) {
      setIsDropdownOpen(false);
    }
  };

  useOnClickOutside(navLinkDropdownRef, handleOutsideClicks);

  return (
    <>
      <DropDownButton
        type="button"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <span className="sr-only">Open user menu</span>
        <ProfileImg src={user?.avatar} alt="user" />
        {user?.name}
        <DropDownIcon
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </DropDownIcon>
      </DropDownButton>

      <DropdownAvatarName ref={navLinkDropdownRef} itemScope={isDropdownOpen}>
        <InfoContainer>
          <UserName>{user?.name}</UserName>
          <UserEmail>{user?.email}</UserEmail>
        </InfoContainer>
        <NavigateContainer>
          <ProfileLink
            onClick={() => {
              navigate(`/profile/${user?._id}`);
              setIsDropdownOpen(false);
            }}
          >
            Profile
          </ProfileLink>
        </NavigateContainer>
        <SignoutContainer>
          <ul>
            <Signout
              onClick={() => {
                dispatch(logout());
                setIsDropdownOpen(false);
              }}
            >
              Sign out
            </Signout>
          </ul>
        </SignoutContainer>
      </DropdownAvatarName>
    </>
  );
};

const DropDownButton = styled.button`
  ${({ theme }) => theme.mixins.flexBox()}
  ${({ theme }) => theme.mixins.textSm()}
  font-weight: ${({ theme }) => theme.weightSemiBold};
  color: ${({ theme }) => theme.darkGrey};
  border-radius: 9999px;
  &:hover {
    color: ${({ theme }) => theme.themeColor};
  }
  &:focus {
    --tw-ring-color: ${({ theme }) => theme.lightGrey};
    box-shadow: var(--tw-ring-inset) 0 0 0
      calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  }
`;

const ProfileImg = styled.img`
  margin-right: ${({ theme }) => theme.spacingSemiRegular};
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 9999px;
`;

const DropDownIcon = styled.svg`
  width: 1.6rem;
  height: 1.6rem;
  margin-left: ${({ theme }) => theme.spacingSmall};
  margin-right: ${({ theme }) => theme.spacingSmall};
`;

const DropdownAvatarName = styled.div`
  display: ${({ itemScope }) => (itemScope ? "block" : "none")};
  position: absolute;
  top: 5.6rem;
  right: 1.6rem;
  width: 17.6rem;
  z-index: 10;
  border-radius: ${({ theme }) => theme.spacingSmallest};
  * + * {
    border-top-width: 0.1rem;
    border-bottom-width: 0px;
    border-color: ${({ theme }) => theme.lightGrey};
  }
  border-width: 1rem;
  border-color: ${({ theme }) => theme.lightGrey};
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
`;

const InfoContainer = styled.div`
  ${({ theme }) => theme.mixins.flexBox("column")}
  padding: ${({ theme }) => theme.spacingRegular}
    ${({ theme }) => theme.spacingSemiMedium};
  ${({ theme }) => theme.mixins.textSm()}
  color : ${({ theme }) => theme.darkGrey};
`;

const UserName = styled.div`
  font-weight: ${({ theme }) => theme.weightSemiBold};
`;

const UserEmail = styled.div`
  ${({ theme }) => theme.ellipsis}
`;

const NavigateContainer = styled.ul`
  width: 100%;
  ${({ theme }) => theme.mixins.textSm()}
  margin:0;
  padding-top: ${({ theme }) => theme.spacingSmallest};
  padding-bottom: ${({ theme }) => theme.spacingSmallest};
`;

const ProfileLink = styled.li`
  ${({ theme }) => theme.mixins.flexBox("column")}
  width: 100%;
  padding: ${({ theme }) => theme.spacingSemiRegular}
    ${({ theme }) => theme.spacingSemiMedium};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.lightGrey};
  }
`;

const Signout = styled.li`
  ${({ theme }) => theme.mixins.flexBox("column")}
  padding: ${({ theme }) => theme.spacingSemiRegular}
    ${({ theme }) => theme.spacingSemiMedium};
  ${({ theme }) => theme.mixins.textSm()}
  color : rgb(55 65 81);
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.lightGrey};
  }
`;

const SignoutContainer = styled.ul`
  margin: 0;
  padding-top: ${({ theme }) => theme.spacingSmallest};
  padding-bottom: ${({ theme }) => theme.spacingSmallest};
`;
export default NavLinkDropdown;
