import React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  FileInput,
  ImageField,
} from "react-admin";

const EditBrand = () => (
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
    </SimpleForm>
  </Edit>
);

export default EditBrand;
