import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:8080/api",
});

export const getProducts = () => API.get("/products");
export const deleteProduct = (id) => API.delete(`/products/${id}`);

export default API;
