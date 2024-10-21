import React from "react";

import styles from "./main-page.module.css";
import Banner from "./ui/banner/banner";
import FormBanner from "./ui/form-banner/form-banner";
import BlockWithItemsHeader from "../../shared/block-with-items-header/block-with-items-header";
import CategoryBlock from "../../shared/category-item/category-block";
import ProductsBlock from "../../shared/sales-block/products-block";
import { json, useLoaderData } from "react-router-dom";
import axios from "axios";
import { API_BASE_URL } from "../../../config/config";

export async function mainPageLoader() {
  const salesResponce = await axios.get(`${API_BASE_URL}/products/all`);
  const categoriesResponce = await axios.get(`${API_BASE_URL}/categories/all`);

  return json({
    salesProducts: salesResponce.data,
    categories: categoriesResponce.data,
  });
}

const MainPage = () => {
  const { categories, salesProducts } = useLoaderData();

  return (
    <div className={styles.mainPage}>
      <Banner></Banner>
      <BlockWithItemsHeader
        header={"Categories"}
        description={"All categories"}
        redirectLink={"/categories-page"}
      ></BlockWithItemsHeader>
      <CategoryBlock
        count={4}
        data={categories}
        clickable={true}
      ></CategoryBlock>
      <FormBanner></FormBanner>
      <BlockWithItemsHeader
        header={"Sales"}
        description={"All sales"}
        redirectLink={"/sales-page"}
      ></BlockWithItemsHeader>
      <ProductsBlock
        data={salesProducts}
        count={4}
        salesOnly={true}
      ></ProductsBlock>
    </div>
  );
};

export default MainPage;
