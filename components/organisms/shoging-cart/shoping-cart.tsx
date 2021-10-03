import Image from "next/image";
import EmojiImage from "../../../assets/icons/emoji_v.png";
import ShopingSection from "../../molecules/shoping-section/shoping-section";
import tw from "tailwind-styled-components/dist/tailwind";
import styled from "styled-components";




const _ShopingCart = tw.div`
  w-full
  col-span-4
  xl:col-span-1
  bg-gray
  pt-10
  xl:pt-36
  pl-16
  pr-16  
`;


const EmojiIcon = styled.div`
  position: absolute;
  top :0px;
  left: 45px;
`;


const EmojiBase = styled.div `
  width: 130px;
`;

const Emoji = tw(EmojiBase)`
  text-left
  text-3xl
  font-semibold
  relative
`;


const ShopingCart:React.FC =  () => {
  return (
    <_ShopingCart>
      <Emoji>
        <h1>My</h1> 
        <EmojiIcon>
          <Image src={EmojiImage} width={"40px"} height={"40px"} />
        </EmojiIcon>
        <h1>Order</h1>
      </Emoji>
      <ShopingSection/>
    </_ShopingCart>
  );
}


export default ShopingCart;


