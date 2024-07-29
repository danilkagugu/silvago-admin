import React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  NumberInput,
  FileInput,
  ImageField,
  required,
} from "react-admin";
import { RichTextInput } from "ra-input-rich-text";

const EditProduct = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" label="Назва" />
      <FileInput
        source="image"
        label="Image"
        options={{
          accept: {
            "image/png": [".png"],
            "image/jpeg": [".jpg", ".jpeg"],
          },
        }}
      >
        <ImageField source="src" title="title" />
      </FileInput>
      <TextInput source="category" label="Категорія" />
      <TextInput source="subcategory" label="Підкатегорія" />
      <RichTextInput source="description" label="Опис" />
      <NumberInput source="price" label="Ціна" />
      <NumberInput source="quantity" label="Кількість" />
      <NumberInput source="discount" label="Знижка" />
    </SimpleForm>
  </Edit>
);

export default EditProduct;
