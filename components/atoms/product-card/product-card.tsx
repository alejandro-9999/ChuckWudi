import Image from "next/image";
import ProductImage from "../../../assets/images/pexels-photo-675951.jpeg";
import IconStart from "../../../assets/icons/149220.svg";
import { Product } from "../../../Redux/slices/products.slice";
import tw from "tailwind-styled-components/dist/tailwind";
import styled from "styled-components";


const ProductCardHeaderBase = styled.div `
  width: 260px;
  height: 130px;
`;

const ProductCardHeader = tw(ProductCardHeaderBase)`
  relative
`;


const ProductCard:React.FC<Product> = (props:Product) => {
  return (
    <div>
      <ProductCardHeader>
        <article>
          <img
            className="product-card-image"
            src={props.image}
          />
        </article>
        <div className="product-card-time">
          <h1>
            {props.time}
          </h1>
        </div>
      </ProductCardHeader>
      <div className="product-card-data mt-5">
        <h1>{props.name}</h1>
        <div className="product-card-info">
          <div className="product-container-info">
            
            <div className="mr-1">
                <Image src={IconStart} width={"10px"} height={"10px"}/>
            </div>
              <span className="text-black">{props.qualification}</span>
            
            <div className="text-base font-normal mx-2">·</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;