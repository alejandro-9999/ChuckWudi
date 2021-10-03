import Image from "next/image";
import ProductImage from "../../../assets/images/pexels-photo-675951.jpeg";
import IconStart from "../../../assets/icons/149220.svg";
import { Product } from "../../../Redux/slices/products.slice";
import tw from "tailwind-styled-components/dist/tailwind";
import styled from "styled-components";


const _ProductCard  = tw.div`

`;

const ProductCardHeaderBase = styled.div`
  width: 260px;
  height: 130px;
`;

const ProductCardHeader = tw(ProductCardHeaderBase)`
  relative
`;

const ProductCardImage = styled.img`
  border-radius: 15px;
  flex: 1;
  max-width: 100%;
  width: 260px;
  height: 130px;
  object-fit: cover;
  position: absolute;
`;

const ProductCardTimeBase = styled.div`
  height: 35px;
  width: 80px;
  position: absolute;
  bottom: 0;
  text-align: center;
  opacity: 90%;
  align-items: center;
  border-bottom-left-radius: 15px;
  border-top-right-radius: 15px;
`;

const ProductCardTime = tw(ProductCardTimeBase)`
  bg-gray
  pt-2
  h1{
    
    font-semibold
    text-xs
  }
  span{
    font-thin
    text-xs
  }
`;

const ProductCardData = tw.div` 
  mt-5
  transition 
  duration-500 
  ease-in-out
  transform 
  hover:-translate-y-1
  hover:scale-110
`;

const ProductCardInfo = tw.div`
  col-start-1
  row-start-2
  sm:pb-16
  flex
  items-center 
  text-sm 
  font-medium 
  sm:mb-4
  & > span{
    text-black
    
  }



`;





const Price = tw.span`
  text-base 
  font-normal 
  mx-2`;

const ProductCard: React.FC<Product> = (props: Product) => {
  return (
    <_ProductCard>
      <ProductCardHeader>
        <article>
          <ProductCardImage src={props.image} />
        </article>
        <ProductCardTime>
          <h1>{props.time}</h1>
        </ProductCardTime>
      </ProductCardHeader>
      <ProductCardData>
        <h1>{props.name}</h1>
        <ProductCardInfo>
          
          <Image src={IconStart} width={"10px"} height={"10px"} />
          
          <span>{props.qualification}</span>

          <Price>{"$"+props.price}</Price>
        </ProductCardInfo>
      </ProductCardData>
    </_ProductCard>
  );
};

export default ProductCard;
