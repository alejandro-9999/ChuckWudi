import tw from "tailwind-styled-components/dist/tailwind";
import Image from "next/dist/client/image";
import IconSrc from "../../../assets/icons/icon.svg";

const TitleLogo = tw.section`
    flex
    items-center 
    flex-shrink-0
    mr-6
    & > span {
        font-semibold
        text-xl
        tracking-tight     
    }

`;

const Icon = tw.div`
    mr-5
    mt-1
`;

export default function Title() {
  return (
    <TitleLogo>
      <Icon>
        <Image
          src={IconSrc}
          alt="icono chuckwudi"
          width={"30px"}
          height={"20px"}
        ></Image>
      </Icon>

      <span>Chukwudi</span>
    </TitleLogo>
  );
}
