
import Counter from "../counter/counter";
export default function PaymentModule() {
  return (
    <div className="payment-module-body">
      <div className="payment-module-content">
        <div className="payment-total-label">
          <h1>Total:</h1>
        </div>
        <div className="payment-total">
          <a href="">$25.97</a>
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
