// src/ProductList.js
import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  Identifier,
  RaRecord,
  ImageField,
} from "react-admin";

const BrandsList = () => {
  const handleRowClick = (
    id: Identifier,
    resource: string,
    record: RaRecord
  ) => {
    localStorage.setItem("show", JSON.stringify(record.category));
    return "show";
  };
  return (
    <List>
      <Datagrid rowClick={handleRowClick}>
        <TextField source="id" />
        <TextField source="name" />
        <ImageField source="image" />

        <EditButton />
        <DeleteButton />
        {/* <Datagrid rowClick={handleRowClick}></Datagrid> */}
      </Datagrid>{" "}
    </List>
  );
};

export default BrandsList;
