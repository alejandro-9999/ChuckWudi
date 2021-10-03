import Image from "next/image";
import TimeIcon from '../../../assets/icons/149316.svg';
import tw from "tailwind-styled-components/dist/tailwind";
import styled from "styled-components";



const _DropdownDelivery = tw.div`
  relative
  inline-flex
  self-center
`;



const  SelectDropdown = tw.select`
  border
  rounded-full
  text-gray
  h-10
  pl-10
  pr-10
  bg-orange
  hover:border-gray
  focus:outline-none
  appearance-none
`;



const TimeIconDiv = tw.div`
  w-4
  h-4
  absolute
  top-0
  left-5
`;


const RowIcon = tw.svg`
  w-2
  h-2
  absolute
  top-0
  right-0
  m-4
  pointer-events-none
`;

const  DropdownDelivery:React.FC = () => {
  return (
    <_DropdownDelivery>
      
    <TimeIconDiv>
      <Image src={TimeIcon} width={"25px"} color={"white"}/>
    </TimeIconDiv>
    <RowIcon
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 412 232"
    >
      <path
        d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
        fill="white"
      />
    </RowIcon>
    <SelectDropdown>
      <option>Delivery: Now</option>
    </SelectDropdown>
  </_DropdownDelivery>
  );
}

export default DropdownDelivery;