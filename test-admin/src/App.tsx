import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
} from "react-admin";
import { Layout } from "./Layout";
import { authProvider } from "./authProvider";
import UserList from "../components/UserList/UserList";
import ProductsList from "../components/ProductsList/ProductsList";
import ProductShow from "../components/ProductShow/ProductShow";
import CreateProduct from "../components/CreateProduct/CreateProduct";
import EditProduct from "../components/EditProduct/EditProduct";
import dataProvider from "./dataProvider";

export const App = () => (
  <Admin
    layout={Layout}
    authProvider={authProvider}
    dataProvider={dataProvider}
  >
    <Resource name="users" list={UserList} />
    <Resource
      name="products"
      list={ProductsList}
      show={ProductShow}
      edit={EditProduct}
    />
    <Resource name="add-product" list={CreateProduct} />
  </Admin>
);
