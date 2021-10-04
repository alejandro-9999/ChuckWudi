import ShopingCartTime from "../../atoms/shoping-cart-time/shoping-cart-time";

import ProductItemList from "../../atoms/product-item-list/product-item-list";
import PaymentModule from "../../atoms/payment-module/payment-module";
import tw from "tailwind-styled-components/dist/tailwind";
import { getShopingCartSelector, ProductCart} from "../../../Redux/slices/shopingcart.slice";
import { useSelector } from "react-redux";

const ShopingProductsList = tw.div`
    mt-5
    grid
    overflow-y-auto
    max-h-80
    p-2
`;

export default function ShopingSection() {
    const products:ProductCart[] = useSelector (getShopingCartSelector);
    return (
    <div>
      <ShopingCartTime />
      <ShopingProductsList>
        {
            products.map((Element,key) =>(
                <ProductItemList {...Element} key={key}/>
            ))

        }            
       
      </ShopingProductsList>
      <PaymentModule products={products} />
    </div>
  );
}


