import TimeIconSrc from "../../../assets/icons/149316.svg";
import Image from "next/image";
import styled from "styled-components";
import tw from "tailwind-styled-components/dist/tailwind";

const _ShopingCartTimeBase = styled.div`
  border-radius: 15px;
  width: 100%;
  height: 150px;
`;

const _ShopingCart = tw(_ShopingCartTimeBase)`
  bg-purple
  mt-12
  grid 
  grid-rows-2
  py-5
  pl-10
  pr-10
  gap-y-3
  gap-x-5

`;

const RowOne = tw.div`
  row-start-1
  grid
  grid-cols-2
  items-center
`;


const RowTwo = tw.div`
  row-start-2
  grid
  grid-cols-2
  items-center
`;

const Start = tw.div`
  flex
  col-span-1
  justify-self-start
  text-white
  items-center
  
`;

const End = tw.div` 
  col-span-1
  justify-self-end
  text-yellow
  text-right
`;


const TimeIconBase = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 15px;
  padding: 10px;
`;

const TimeIcon = tw(TimeIconBase)`
  bg-purple_light
  mr-2
`;


export default function ShopingCartTime() {
  return (
    <_ShopingCart>
      <RowOne>
        <Start>
          <h1>625 St Marks Ave</h1>
        </Start>

        <End>
          <a href="">Edit</a>
        </End>
      </RowOne>
      <RowTwo>
        <Start>
          <TimeIcon>
            <Image src={TimeIconSrc}></Image>
          </TimeIcon>
          <h1>35m</h1>
        </Start>

        <End>
          <a href="">Choose Time</a>
        </End>
      </RowTwo>
    </_ShopingCart>
  );
}
