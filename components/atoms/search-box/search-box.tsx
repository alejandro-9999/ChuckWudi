import React from "react";
import Image from 'next/image';
import Icon from "../../../assets/icons/search-icon.svg";
import styled from "styled-components";

import tw from "tailwind-styled-components/dist/tailwind";




const _SearchBox = tw.div`
  h-full
  w-full
  relative
  
  sm:pr-32
  sm:pl-11
  xl:pr-0
  mt-3
  sm:mt-0
`;





const _InputSearchBase = styled.input`
  border-radius: 25px;
`;

const InputSearch = tw(_InputSearchBase)`
  bg-gray
  h-full
  w-full
  px-3
  py-4 
  relative 
  text-base
  outline-none 
  focus:outline-none 
  focus:ring w-full 
  pl-14
`;

const IconSearh = tw.span`
z-10
h-full
leading-normal
font-normal
absolute
text-center  
rounded
text-lg
items-center
justify-center
w-10
pl-5
py-4
`;

export default function SearchBox() {

  return (

    <_SearchBox>
      <IconSearh>
       <Image className="search-icon" src={Icon} alt="Picture of the author" />
      </IconSearh>
      <InputSearch type="text" />
    </_SearchBox>
    );
}

