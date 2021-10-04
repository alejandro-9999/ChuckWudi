import Image from "next/image";
import ProductImage from "../../../assets/images/pexels-photo-675951.jpeg";
import CategorieImage from '../../../assets/icons/701965.svg';
import tw from "tailwind-styled-components/dist/tailwind";
import styled from "styled-components";
import { Product } from "../../../Redux/slices/products.slice";
import { ProductCart } from "../../../Redux/slices/shopingcart.slice";
import { useAppDispatch, useAppSelector } from "../../../Redux/store.hooks";

import { removeFromCard } from "../../../Redux/slices/shopingcart.slice";

const _BodyItemList = tw.div`
  mt-8
  grid 
  grid-cols-4
  items-center
  hover:bg-delivery
  rounded
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

const ImageProduct = styled.img`
  border-radius: 8px;
`;


const  ProductItemList : React.FC<ProductCart>  =  (props:ProductCart) => {
  const dispatch = useAppDispatch();
  const RemoveProductCart = (id:number) =>{
    dispatch(removeFromCard(id))
  }


  return (
    <_BodyItemList onClick={()=>RemoveProductCart(props.id)}>
      <ImageItemList>
        <ImageProduct  src={props.image} />
      </ImageItemList>

     
        <NameItemList>
          <h1>{props.amount} X {props.name}</h1>
        </NameItemList>
      
        <PriceItemList>
            <h1>${props.amount * props.price}</h1>
        </PriceItemList> 
    </_BodyItemList>
  )
}

export default ProductItemList;