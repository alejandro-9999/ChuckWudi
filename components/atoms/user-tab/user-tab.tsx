import tw from "tailwind-styled-components/dist/tailwind";
import Image from "next/dist/client/image";
import UserIcon from  "../../../assets/icons/747376.svg";
import LogoutIcon from  "../../../assets/icons/logout.svg";
import firebase from 'firebase';
import { useSelector } from "react-redux";
import { getShopingCartSelector, ProductCart } from "../../../Redux/slices/shopingcart.slice";
import React from "react";


const _UserTab = tw.div`
  absolute
  
  right-16
  top-10
  flex
`;


const ProductsCount  = tw.div`
 
  w-10
  h-10
  rounded
  text-center
  bg-yellow
  p-2
  ml-1
  xl:ml-8
`;


const ImageUser = tw.div`
  ml-1
  xl:ml-8
  mt-2
  `;

const UserTab:React.FC = () =>{
  const products:ProductCart[] = useSelector (getShopingCartSelector);
  const [total,setTotal] = React.useState(0);
  React.useEffect(()=>{
    let tl:number = 0;
    products.map(Element=>{
      tl+= Element.amount ;
    })
    setTotal(tl);
  },[products]);
  return(
    <_UserTab>
      <Image src={LogoutIcon} height={"25px"} width={"25px"} onClick={() => firebase.auth().signOut()} />
      <ImageUser>
        <Image src={UserIcon} height={"25px"} width={"25px"} />
      </ImageUser>
      <ProductsCount>
        <h1>{total}</h1>
      </ProductsCount>
    </_UserTab>
    );
}

export default UserTab;