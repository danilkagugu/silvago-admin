import React from "react";
import {
  Show,
  SimpleShowLayout,
  TextField,
  RichTextField,
  ImageField,
  DeleteButton,
  EditButton,
  NumberInput,
} from "react-admin";

const BrandShow = () => (
  <Show>
    <SimpleShowLayout>
      <div className="show-actions">
        <DeleteButton />
        <EditButton />
      </div>
      <TextField source="id" label="ID" />
      <ImageField source="image" src="url" title="desc" />
      <TextField source="name" label="Назва" />
    </SimpleShowLayout>
  </Show>
);
export default BrandShow;
