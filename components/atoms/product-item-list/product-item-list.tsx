import Image from "next/image";
import ProductImage from "../../../assets/images/pexels-photo-675951.jpeg";
import CategorieImage from '../../../assets/icons/701965.svg';

export default function ProductItemList() {
  return (
    <div className="body-item-list">
      <div className="image-item-list">
        <Image src={ProductImage} className="image-list"/>
      </div>

     
        <div className="name-item-list">
          <h1>1 X French Fries</h1>
        </div>
      
        <div className="price-item-list">
            <h1>$0.00</h1>
        </div> 
    </div>
  )
}
