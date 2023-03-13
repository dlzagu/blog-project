import styled from "styled-components";

const Search = () => {
  return (
    <SearchForm>
      <SearchLabel htmlFor="search" className="sr-only">
        Search
      </SearchLabel>
      <SearchContent>
        <SearchIcon>
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            ></path>
          </svg>
        </SearchIcon>
        <SearchInput type="text" id="search" placeholder="Search" />
      </SearchContent>
    </SearchForm>
  );
};

export default Search;

const SearchForm = styled.form`
  width: 24rem;
  ${({ theme }) => theme.mixins.flexBox()}
`;

const SearchLabel = styled.label``;

const SearchContent = styled.div`
  position: relative;
  width: 100%;
`;

const SearchIcon = styled.div`
  ${({ theme }) => theme.mixins.flexBox()}
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  padding-left: 0.75rem;
  pointer-events: none;
`;

const SearchInput = styled.input`
  background-color: ${({ theme }) => theme.mainGrey};
  border: 1px solid ${({ theme }) => theme.lightDarkGrey};
  color: ${({ theme }) => theme.darkGrey};
  border-radius: 0.5rem;
  font-size: ${({ theme }) => theme.fontRegular};
  line-height: 1.75rem;
  display: block;
  width: 100%;
  padding-left: 2.5rem;

  &:focus {
    --tw-ring-color: ${({ theme }) => theme.themeColor};
    border-color: ${({ theme }) => theme.themeColor};
  }
`;
