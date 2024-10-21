import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { json, useLoaderData, useParams } from "react-router-dom";
import PageHeader from "../../shared/page-header/page-header";
import Filter from "../../shared/filter/filter";
import ProductsBlock from "../../shared/sales-block/products-block";
import { API_BASE_URL } from "../../../config/config";
import axios from "axios";

export async function categoryLoader({ params }) {
  const response = await axios.get(`${API_BASE_URL}/categories/${params.id}`);

  return json({
    loadedData: response.data
  });
}


const SelectedCategoryPage = () => {

const {loadedData} = useLoaderData()

  const [filteredData, setFilteredData] = useState(loadedData.data);

  return (
    <>
      <PageHeader header={loadedData.category.title}></PageHeader>
      <Filter
        data={loadedData.data}
        onFilter={setFilteredData}
        discountedItems={false}
      ></Filter>
      <ProductsBlock data={filteredData} salesOnly={false}></ProductsBlock>
    </>
  );
};

export default SelectedCategoryPage;
