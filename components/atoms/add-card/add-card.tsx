import Image from "next/image";
import AddImageSrc from "../../../assets/images/headerimage.png";
import TitleImage from "../../../assets/images/d.png";
import tw from "tailwind-styled-components/dist/tailwind";
import styled from "styled-components";
import NextRow from "../next-row/next-row";


const AddCardBase = styled.div`
    border-radius:25px
`;

const _AddCard = tw(AddCardBase)`
    mt-16
    bg-delivery
    items-center
    grid
    grid-flow-row 
    grid-rows-3
    auto-rows-auto
    lg:grid-cols-4    
    lg:grid-rows-1
    
    pr-10
    pl-10
    h-96
    md:h-64
    lg:h-52
    
`;

const AddImageContainer = tw.div`

    relative
    w-full
    h-full
    col-span-1
    row-start-3    
    lg:row-start-1
`;

const AddImageBase = styled.div`

`;

const AddImage = tw(AddImageBase)`
    absolute
    w-40
    h-40
    sm:w-52
    sm:h-52 
    lg:w-64
    lg:h-64    
    sm:-bottom-4
    -bottom-3
`;

const AddMessage = tw.div`
    sm:mt-0
    lg: mt-14
    row-start-1
    lg:row-start-1
    col-span-1 
    sm:col-span-2
    justify-self-start
    lg:justify-self-center
    items-center        
`;

const Title = tw.h1`
    text-2xl
    font-sans
    sm:text-3xl
    font-semibold
    text-orange
`;

const SubTitle = tw.span`
    font-sans
    text-base
    text-black
    text-opacity-50
`;

const LinkContent = tw.div`
    
    flex
    items-center
    lg:justify-self-end
    row-start-2
    lg:row-start-1
    & > a {
        text-orange
        font-bold
    }
    lg:self-end
    mb-10
`;

const RowLink = tw.div`
    ml-5
`;



export default function AddCard() {
  return (
    <_AddCard>
      <AddImageContainer>
        <AddImage>
          <Image src={AddImageSrc} alt="Header Image"/>
        </AddImage>
      </AddImageContainer>

      <AddMessage>
        <Title>
          $0 delivery for 30 days!{" "}
          <Image
            className="add-title-image"
            width={"30px"}
            height={"30px"}
            src={TitleImage}
          />
        </Title>

        <SubTitle>$0 delivery fee for orders over $10 for 30 days</SubTitle>
      </AddMessage>
      <LinkContent>
      
        <a href="">Learn more </a> <RowLink><NextRow color={"#fb6d3b"}  width={"15px"}/></RowLink>  
      </LinkContent>
    </_AddCard>
  );
}
