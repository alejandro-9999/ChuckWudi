import ShopingCartTime from "../../atoms/shoping-cart-time/shoping-cart-time";

import ProductItemList from "../../atoms/product-item-list/product-item-list";
import PaymentModule from "../../atoms/payment-module/payment-module";
import tw from "tailwind-styled-components/dist/tailwind";

const ShopingProductsList = tw.div`
    mt-5
    grid
    overflow-y-auto
    max-h-80
    p-2
`;

export default function ShopingSection() {
  return (
    <div>
      <ShopingCartTime />
      <ShopingProductsList>
        <ProductItemList />
        <ProductItemList />
        <ProductItemList />
        <ProductItemList />
      </ShopingProductsList>
      <PaymentModule />
    </div>
  );
}
