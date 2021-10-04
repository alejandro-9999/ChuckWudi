import tw from "tailwind-styled-components";
import ContentPanel from "../../organisms/content-panel/content-panel";
import ShopingCart from "../../organisms/shoging-cart/shoping-cart";
import UserTab from "../../atoms/user-tab/user-tab";


const DashboardBody = tw.div`
    w-full
    h-screen
    grid
    grid-cols-4
    relative
`;





const Dashboard: React.FC = () => {
    return (
        <DashboardBody>
            <UserTab/>
            <ContentPanel/>
            <ShopingCart/>
        </DashboardBody>
    );
} 


export default Dashboard;