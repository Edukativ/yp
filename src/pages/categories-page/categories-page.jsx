import React from "react";
import { Col, Row } from "react-bootstrap";
import PageHeader from "../../shared/page-header/page-header";
import CategoryBlock from "../../shared/category-item/category-block";
import { API_BASE_URL } from "../../../config/config";
import axios from "axios";
import { json, useLoaderData } from "react-router-dom";

export async function categoriesLoader() {
  const response = await axios.get(`${API_BASE_URL}/categories/all`);

  return json({
    data: response.data
  });
}

const CategoriesPage = () => {
  const {data} = useLoaderData()

  return (
    <>
      <PageHeader header={"Categories"}></PageHeader>
      <CategoryBlock count={5} data={data} clickable={true}></CategoryBlock>
    </>
  );
};

export default CategoriesPage;
