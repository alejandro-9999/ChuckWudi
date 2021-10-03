import Title from "../../atoms/title/title";
import SearchBox from "../../atoms/search-box/search-box";

import tw from "tailwind-styled-components/dist/tailwind";

const NavBarContainer = tw.nav`
    flex
    items-center
    justify-between
    flex-wrap 
    sm:grid-rows-2 
    sm:grid-flow-col
`;

const SearchContainer = tw.div`
    w-full 
    block 
    flex-grow 
    sm:flex 
    sm:items-center 
    sm:w-auto
    sm:row-span-1  
`;


const NavBar: React.FC = () => {
  return (
    <>
      <NavBarContainer>
        <Title />
        <SearchContainer>
          <SearchBox />
        </SearchContainer>
      </NavBarContainer>
    </>
  );
};

export default NavBar;
