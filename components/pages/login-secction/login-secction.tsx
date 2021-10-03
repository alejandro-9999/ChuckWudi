import tw from "tailwind-styled-components";
import LoginWithFirebase from "../../../firebase";


const LoginArea = tw.div`
    flex
    h-screen
    justify-center
    items-center
    flex-col
    bg-gray
`;


const TitleLogin = tw.h1`
    text-6xl
    font-bold
    mb-5
    animate-bounce
`;




const LonginSecction: React.FC =  () =>{
    return <LoginArea>
        <TitleLogin>Chukwudi</TitleLogin>
        <LoginWithFirebase/>
    </LoginArea>
} 

export default LonginSecction;