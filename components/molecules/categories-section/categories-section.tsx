import Image from "next/image";
import BurguerIcon from "../../../assets/icons/1046784.svg";
import DropdownDelivery from "../../atoms/dropdown-delivery/dropdown-delivery";
import CategoryItem from "../../atoms/category-item/category-item";
import ProductCard from "../../atoms/product-card/product-card";
import { connect, useSelector } from "react-redux";
import React from "react";

import { getCategoriesSelector } from "../../../Redux/slices/categories.slice";
import { getProductsSelector } from "../../../Redux/slices/products.slice";

import tw from "tailwind-styled-components/dist/tailwind";
import styled from "styled-components";

export default function CategoriesSection() {
  const categories = useSelector(getCategoriesSelector);
  const products = useSelector(getProductsSelector);

  const CategoriesSection = tw.div`
        w-full
        mt-10
        mb-10
        sm:mb-0
    `;

  const TitleCategoriesSecion = tw.div`
        flex
        grid
        grid-cols-2
    `;

  

  const DropdowCategories = tw.div`
        col-span-2
        lg:col-span-1
        justify-self-start
        lg:justify-self-end
    `;

  const TitleImageCategories = tw.div`
        col-span-2
        lg:col-span-1
        justify-self-start
        flex
        items-center
        text-3xl
        font-semibold
        h1 {
            mr-4
        }
    `;
  const IconTitle = tw.div`
        ml-4
    `;
  
  const CategoriesSlider = tw.div`
    mt-2
    grid 
    grid-flow-col 
    auto-cols-max
    gap-5
    overflow-x-auto
    pb-5
  `; 

  const ProductSlider = tw.div`
    gap-10
    h-full
    mt-8
    grid
    grid-flow-col
    auto-cols-max
    justify-between
    overflow-x-auto
  `;

  return (
    <CategoriesSection>
      <TitleCategoriesSecion>
        
          <TitleImageCategories>
            <h1>Products</h1>
            <IconTitle>
              <Image src={BurguerIcon} width={"30px"} height={"30px"}></Image>
            </IconTitle>
          </TitleImageCategories>
        <DropdowCategories>
          <DropdownDelivery />
        </DropdowCategories>
      </TitleCategoriesSecion>


      <CategoriesSlider>
        {categories.map((Element) => (
          <CategoryItem
            {...Element}
            key={Element.id}
          />
        ))}
      </CategoriesSlider>
      <ProductSlider>
        {products.map((Element, key) => (
          <ProductCard {...Element} key={key} />
        ))}
      </ProductSlider>
    </CategoriesSection>
  );
}
