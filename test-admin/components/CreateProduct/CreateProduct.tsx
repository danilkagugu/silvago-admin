import React from "react";

import {
  Create,
  SimpleForm,
  TextInput,
  required,
  NumberInput,
  FileInput,
  ImageField,
} from "react-admin";
import { RichTextInput } from "ra-input-rich-text";

const CreateProduct = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" validate={required()} label="Назва" />
      <FileInput
        source="image"
        label="Image"
        options={{
          accept: {
            "image/png": [".png"],
            "image/jpeg": [".jpg", ".jpeg"],
          },
        }}
        validate={required()}
      >
        <ImageField source="src" title="title" />
      </FileInput>
      <TextInput source="category" validate={required()} label="Категорія" />
      <TextInput
        source="subcategory"
        validate={required()}
        label="Підкатегорія"
      />
      <RichTextInput source="description" validate={required()} label="Опис" />
      <NumberInput source="price" validate={required()} label="Ціна" />
      <NumberInput source="quantity" validate={required()} label="Кількість" />
      <NumberInput source="discount" label="Знижка" />
    </SimpleForm>
  </Create>
);
export default CreateProduct;
{
  /* <RichTextInput source="body" /> */
}
