import NavBar from "../../molecules/navbar/navbar";
import CategoriesSection from "../../molecules/categories-section/categories-section";
import tw from "tailwind-styled-components/dist/tailwind";
import AddCard from "../../atoms/add-card/add-card";



const _ContentPanel = tw.section `
    w-full
    border-2
    border-gray_dark
    col-span-4
    xl:col-span-3
    bg-white
    pt-10
    pl-16 
    pr-16
`;


const  ContentPanel:React.FC = () =>  {

    return (
        <_ContentPanel>
            <NavBar />
            <AddCard/>
            <CategoriesSection/>
        </_ContentPanel>
    );


}

export default ContentPanel;