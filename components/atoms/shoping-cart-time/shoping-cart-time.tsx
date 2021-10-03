import TimeIcon from '../../../assets/icons/149316.svg';
import Image from 'next/image';

export default function ShopingCartTime() {
  return (
    <div className="shoping-cart-time">
      <div className="shoping-cart-time-content">
        <div className="cart-address">
          <h1>625 St Marks Ave</h1>
        </div>
        <div className="edit-address">
          <a href="">Edit</a>
        </div>
        <div className="time-indicator" >
            <div className="time-indicator-content">
                <div className="time-indicator-icon">
                    <Image src={TimeIcon}></Image>
                </div>
                <h1>
                    35m
                </h1>
            </div>
            
        </div>
        <div className="choosetime">
            <a href="">Choose Time</a>
        </div>
      </div>
    </div>
  );
}
