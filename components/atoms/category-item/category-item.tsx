import { Category } from '../../../Redux/slices/categories.slice';
import styled from 'styled-components';
import tw from 'tailwind-styled-components/dist/tailwind';


const CategoryCardBase = styled.div`
    width: 70px;
    height: 120px;
    padding: 5px;
    border-radius: 100px;
`;

const CategoryCard = tw(CategoryCardBase)`
    shadow-md
    text-center
    hover:bg-yellow
    h1{
        mt-3
    }

`;

const AvatarCategoryBase = styled.div`
    width: 60px;
    height: 60px;
    padding: 12px;
    border-radius: 100px;
`;

const AvatarCategory = tw(AvatarCategoryBase)`
    bg-white
    border-2
    border-gray
`;

const CategoryName = tw.div`
    text-xs
    font-semibold
`;

const CategoryItem:React.FC<Category> = (props:Category) => {
       return(
            <CategoryCard>
                <AvatarCategory>
                    <img src={props.icon}/>
                </AvatarCategory>
                <CategoryName>
                   <h1>{props.name}</h1>     
                </CategoryName>
            </CategoryCard>
       );
}

export default CategoryItem;