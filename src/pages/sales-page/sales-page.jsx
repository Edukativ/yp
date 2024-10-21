import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import PageHeader from "../../shared/page-header/page-header";
import ProductsBlock from "../../shared/sales-block/products-block";
import Filter from "../../shared/filter/filter";
import { useLoaderData } from "react-router-dom";

const SalesPage = () => {
  const {data} = useLoaderData()

  const [filteredData, setFilteredData] = useState(data);

  return (
    <>
      <PageHeader header={"Discounted items"}></PageHeader>
      <Filter
        data={data}
        onFilter={setFilteredData}
        discountedItems={true}
      ></Filter>
      <ProductsBlock data={filteredData} salesOnly={true}></ProductsBlock>
    </>
  );
};

export default SalesPage;
