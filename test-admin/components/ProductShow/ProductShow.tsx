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

const ProductShow = () => (
  <Show>
    <SimpleShowLayout>
      <div className="show-actions">
        <DeleteButton />
        <EditButton />
      </div>
      <ImageField source="image" src="url" title="desc" />
      <TextField source="name" label="Назва" />
      <TextField source="category" label="Категорія" />
      <TextField source="subcategory" label="Підкатегорія" />
      <RichTextField source="description" label="" />
      <TextField source="price" label="Ціна" />
      <TextField source="quantity" label="Кількість" />
      <TextField source="discount" label="Знижка" />
    </SimpleShowLayout>
  </Show>
);
export default ProductShow;
