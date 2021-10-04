
import Counter from "../counter/counter";
import {  ProductCart} from "../../../Redux/slices/shopingcart.slice";
import React from "react";
interface paymentModule{
  products:ProductCart[]
}

const  PaymentModule:React.FC<paymentModule> = (props:paymentModule) => {
  const [total,setTotal] = React.useState(0);

  React.useEffect(()=>{
    let valor:number = 0;
    
    props.products?.map((Element)=>{
      valor += Element.amount * Element.price;
    });
    setTotal(valor);
  },[props.products])
  return (
    <div className="payment-module-body">
      <div className="payment-module-content">
        <div className="payment-total-label">
          <h1>Total:</h1>
        </div>
        <div className="payment-total">
          <a href="#">${total}</a>
        </div>
        <div className="divider-payment">
        <hr />
        </div>
        <div className="pesons-counter" >
            <Counter/>
        </div>
        <div className="submit-button">
            <button className="button-payment">Check out</button>
        </div>
      </div>
    </div>
  );
}

export default PaymentModule;