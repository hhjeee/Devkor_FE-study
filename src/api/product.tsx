import axios from "axios";

const ENDPOINT =
  "https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";
const getProducts = async () => {
  const { data } = await axios.get(ENDPOINT);
  return data;
};

export default getProducts;

//async function getProducts()
