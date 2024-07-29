// src/ProductList.js
import React from "react";
import {
  List,
  Datagrid,
  TextField,
  NumberField,
  EditButton,
  DeleteButton,
  Identifier,
  RaRecord,
} from "react-admin";

const ProductsList = () => {
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
        <NumberField source="price" />
        <TextField source="description" />
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  );
};

export default ProductsList;
