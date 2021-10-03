import Image from "next/image";
import EmojiImage from "../../../assets/icons/emoji_v.png";
import ShopingSection from "../../molecules/shoping-section/shoping-section";

export default function ShopingCart() {
  return (
    <div className="shoping-cart">
      <div className="emoji">
        <h1>My Order</h1>
        <div className="emoji-icon">
          <Image src={EmojiImage} width={"40px"} height={"40px"} />
        </div>
      </div>
      <ShopingSection/>
    </div>
  );
}
