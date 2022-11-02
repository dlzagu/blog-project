import React from "react";
import styled from "styled-components";
import CustomIcon from "../../icons/CustomIcon";
function Search() {
  return (
    <SearchForm>
      <SearchInput
        type="text"
        placeholder="Search"
        name="keyword"
      ></SearchInput>
      <SearchButton>
        <CustomIcon name="SeachIcon" size="20" color="black"></CustomIcon>
      </SearchButton>
    </SearchForm>
  );
}

const SearchForm = styled.form`
  width: 40rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SearchInput = styled.input`
  color: inherit;
  background-color: ${(props) => props.theme.lightGrey};
  font-size: ${(props) => props.theme.fontRegular};
  border: ${(props) => props.theme.lightDarkGrey} 1px solid;
  width: 100%;
  border-radius: 0.4rem;
  padding: 0.8rem 2rem;
  transition: all 0.2s;
  margin-right: -3.25rem;
`;
const SearchButton = styled.button`
  border: none;
  background: none;

  &:focus {
    outline: none;
  }
  &:active {
    transform: translateY(2px);
  }
`;

export default Search;
