import tw from "tailwind-styled-components";
import ContentPanel from "../../organisms/content-panel/content-panel";
import ShopingCart from "../../organisms/shoging-cart/shoping-cart";



const DashboardBody = tw.div`
    w-full
    h-screen
    grid
    grid-cols-4
`;





const Dashboard: React.FC = () => {
    return (
        <DashboardBody>
            <ContentPanel/>
            <ShopingCart/>
        </DashboardBody>
    );
} 


export default Dashboard;