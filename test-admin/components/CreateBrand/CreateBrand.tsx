import React from "react";

import {
  Create,
  SimpleForm,
  TextInput,
  required,
  FileInput,
  ImageField,
} from "react-admin";

const CreateBrand = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" validate={required()} label="Назва Бренду" />
      <FileInput
        source="image"
        label="Фото"
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
    </SimpleForm>
  </Create>
);
export default CreateBrand;
