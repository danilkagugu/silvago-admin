import React, { useState, useEffect } from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  required,
  NumberInput,
  FileInput,
  ImageField,
  SelectInput,
  SimpleFormIterator,
  ArrayInput,
  BooleanInput,
} from "react-admin";
import { RichTextInput } from "ra-input-rich-text";
import {
  categoryBrand,
  countryList,
  getCategories,
  getBrands,
} from "../radioOptions/radioOptions.js";

interface Category {
  slug: string;
  name: string;
  items: { slug: string; name: string }[];
}
interface Brands {
  _id: string;
  name: string;
  country: string;
}

const sunscreenTypeChoices = [
  { id: "Хімічні фільтри", name: "Хімічні фільтри" },
  { id: "Фізичні фільтри", name: "Фізичні фільтри" },
  { id: "Мікс фільтрів", name: "Мікс фільтрів" },
];

const CreateProduct = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  console.log("categories: ", categories);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [subcategories, setSubcategories] = useState<
    {
      slug: string;
      name: string;
    }[]
  >([]);
  const [brands, setBrands] = useState<Brands[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getCategories();
        const brands = await getBrands();
        setCategories(data);
        setBrands(brands);
      } catch (error) {
        console.log("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      const category = categories.find((cat) => cat.name === selectedCategory);
      setSubcategories(category?.items || []);
    } else {
      setSubcategories([]);
    }
  }, [selectedCategory, categories]);

  return (
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
              "image/webp": [".webp"],
            },
          }}
          validate={required()}
        >
          <ImageField source="src" title="title" />
        </FileInput>
        <NumberInput source="article" validate={required()} label="Штрихкод" />
        <SelectInput
          source="category"
          label="Категорія"
          validate={required()}
          choices={categories.map((cat) => ({ id: cat.name, name: cat.name }))}
          onChange={(e) => setSelectedCategory(e.target.value)}
        />
        <SelectInput
          source="subcategory"
          label="Підкатегорія"
          validate={required()}
          choices={subcategories.map((item) => ({
            id: item.name,
            name: item.name,
          }))}
        />

        <SelectInput
          source="brand"
          label="Бренд"
          validate={required()}
          choices={brands.map((cat) => ({ id: cat.name, name: cat.name }))}
          // onChange={(e) => setSelectedBrand(e.target.value)}
        />

        <SelectInput
          source="country"
          label="Країна"
          validate={required()}
          choices={countryList}
        />

        <RichTextInput
          source="description"
          validate={required()}
          label="Опис"
        />
        <ArrayInput source="characteristics">
          <SimpleFormIterator>
            <TextInput source="country" validate={required()} label="Країна" />
            <TextInput
              source="productClass"
              validate={required()}
              label="Клас Продукту"
            />
            <TextInput
              source="appointment"
              validate={required()}
              label="Призначення"
            />
            <TextInput
              source="skinType"
              validate={required()}
              label="Тип шкіри"
            />
            <TextInput source="series" validate={required()} label="Серія" />
            <TextInput
              source="productType"
              validate={required()}
              label="Тип Продукту"
            />
            <TextInput source="age" validate={required()} label="Вік" />
          </SimpleFormIterator>
        </ArrayInput>
        <SelectInput
          source="filters.sunscreenType"
          label="Тип сонцезахисних фільтрів"
          choices={sunscreenTypeChoices}
        />
        <BooleanInput
          source="filters.forSensitiveSkin"
          label="Для чутливої шкіри"
        />
        <BooleanInput source="filters.acneTreatment" label="Боротьба з акне" />
        <BooleanInput source="filters.antiAge" label="Anti-age" />
        <BooleanInput source="filters.hydration" label="Зволоження" />
        <BooleanInput source="filters.nourishment" label="Живлення" />
        <BooleanInput
          source="filters.pigmentationTreatment"
          label="Освітлення пігментації"
        />
        <BooleanInput source="filters.seboRegulation" label="Себорегуляція" />
        <BooleanInput
          source="filters.couperoseTreatment"
          label="Лікування куперозу"
        />
        <BooleanInput source="filters.regeneration" label="Відновлення" />
        <BooleanInput source="filters.cleaning" label="Очищення" />
        <BooleanInput source="filters.soothing" label="Заспокоєння" />
        <BooleanInput
          source="filters.uvProtection"
          label="Захист від ультрафіолету"
        />

        <ArrayInput source="volumes">
          <SimpleFormIterator>
            <NumberInput
              source="volume"
              label="Обсяг (ml)"
              validate={required()}
            />
            <NumberInput source="price" label="Ціна" validate={required()} />
            <NumberInput
              source="quantity"
              label="Кількість"
              validate={required()}
            />
            <NumberInput
              source="barcode"
              label="Штрихкод"
              validate={required()}
            />
          </SimpleFormIterator>
        </ArrayInput>
        {/* <NumberInput source="quantity" label="Кількість" /> */}
        <NumberInput source="discount" label="Знижка" defaultValue={0} />
      </SimpleForm>
    </Create>
  );
};

export default CreateProduct;
