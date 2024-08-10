export const categoryOptions = [
  { id: "heir", name: "Волосся" },
  { id: "clothing", name: "Обличчя" },
  { id: "body", name: "Тіло" },
  { id: "make-up", name: "Make-up" },
  { id: "child", name: "Для дітей" },
  { id: "pafrum", name: "Парфуми" },
  { id: "for-home", name: "Для дому" },
];
export const categoryBrand = [
  { id: "Masil", name: "Masil" },
  { id: "Daeng Gi Meo Ri", name: "Daeng Gi Meo Ri" },
  { id: "Inebrya", name: "Inebrya" },
  { id: "nevitaly", name: "Nevitaly" },
  { id: "elgon", name: "Elgon" },
  { id: "top-beauty", name: "Top Beauty" },
  { id: "mood", name: "Mood" },
  { id: "Bilou", name: "Bilou" },
  { id: "Medi Peel", name: "Medi Peel" },
];
export const countryList = [
  { id: "південна корея", name: "Південна Корея" },
  { id: "україна", name: "Україна" },
  { id: "польща", name: "Польща" },
  { id: "США", name: "США" },
  { id: "Італія", name: "Італія" },
  { id: "Німеччина", name: "Німеччина" },
];
export const categoryList = [
  { id: "Догляд за обличчям", name: "Догляд за обличчям" },
  { id: "Догляд за волоссям", name: "Догляд за волоссям" },
  { id: "Догляд за тілом", name: "Догляд за тілом" },
  { id: "Make-up", name: "Make-up" },
  { id: "Для дітей", name: "Для дітей" },
  { id: "Для дому", name: "Для дому" },
  { id: "Парфуми", name: "Парфуми" },
];

export const subcategoryOptions = [
  { id: "Догляд за обличчям", name: "Догляд за обличчям" },
  { id: "Догляд за волоссям", name: "Догляд за волоссям" },
  { id: "Догляд за тілом", name: "Догляд за тілом" },
  { id: "Make-up", name: "Make-up" },
  { id: "Для дітей", name: "Для дітей" },
  { id: "Для дому", name: "Для дому" },
  { id: "Парфуми", name: "Парфуми" },
];
import axios from "axios";

export const BASE_URL = "http://localhost:3030/";

const createAxiosInstance = () => {
  return axios.create({
    baseURL: BASE_URL,
  });
};
export const getCategories = async () => {
  const instance = createAxiosInstance();
  const { data } = await instance.get("/api/product/category");
  return data;
};
export const getBrands = async () => {
  const instance = createAxiosInstance();
  const { data } = await instance.get("/api/admin/brands");
  return data;
};
