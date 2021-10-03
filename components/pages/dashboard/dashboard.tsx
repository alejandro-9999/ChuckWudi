import tw from "tailwind-styled-components";
import ContentPanel from "../../organisms/content-panel/content-panel";


const DashboardBody = tw.div`
    w-full
    h-screen
    grid
    grid-cols-4
`;


const ShoppingCartPanel = tw.section `
    w-full
    col-span-4 
    xl:col-span-1 
    bg-gray
`;



const Dashboard: React.FC = () => {
    return (
        <DashboardBody>
            <ContentPanel/>
            <ShoppingCartPanel/>
        </DashboardBody>
    );
} 


export default Dashboard;