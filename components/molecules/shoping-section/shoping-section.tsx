import ShopingCartTime from "../../atoms/shoping-cart-time/shoping-cart-time";

import ProductItemList from "../../atoms/product-item-list/product-item-list";
import PaymentModule from "../../atoms/payment-module/payment-module";

export default function ShopingSection(){
    return(
        <div>
            <ShopingCartTime/>   
            <div className="shoping-products-list">
                <ProductItemList/>
                <ProductItemList/>
                <ProductItemList/>
                <ProductItemList/>
            </div>
            <PaymentModule/>
        </div>
    );
}