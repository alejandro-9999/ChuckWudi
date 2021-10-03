import Image from "next/image";
import ProductImage from "../../../assets/images/pexels-photo-675951.jpeg";
import CategorieImage from '../../../assets/icons/701965.svg';
import tw from "tailwind-styled-components/dist/tailwind";
import styled from "styled-components";



const _BodyItemList = tw.div`
  mt-8
  grid 
  grid-cols-4
  items-center
`;

const ImageItemListBase = styled.div`
  width: 70px;
  border-radius: 8px;
`;


const ImageItemList = tw(ImageItemListBase)`
  col-span-1
`;


const NameItemList = tw.div`
  col-span-2
  px-6
  text-left
  font-bold
`;

const PriceItemList = tw.div`
  col-span-1
  text-right
  font-light
`;

const ImageProduct = styled(Image)`
  border-radius: 8px;
`;


export default function ProductItemList() {
  return (
    <_BodyItemList>
      <ImageItemList>
        <ImageProduct src={ProductImage} />
      </ImageItemList>

     
        <NameItemList>
          <h1>1 X French Fries</h1>
        </NameItemList>
      
        <PriceItemList>
            <h1>$0.00</h1>
        </PriceItemList> 
    </_BodyItemList>
  )
}
