import { useEffect, useState } from "react";
import { getProducts, deleteProduct } from "../services/api";

export default function ProductTable({ refresh }) {
    const [products, setProducts] = useState([]);

    const fetchProducts = () => {
        getProducts()
            .then((res) => setProducts(res.data))
            .catch((err) => console.error("Error al cargar productos:", err));
    };

    useEffect(() => {
        fetchProducts();
    }, [refresh]);

    const handleDelete = async (id) => {
        if (confirm("¿Estás seguro de que deseas eliminar este producto?")) {
            try {
                await deleteProduct(id);
                fetchProducts();
            } catch (err) {
                console.error("Error al eliminar producto:", err);
            }
        }
    };

    return (
        <div className="overflow-x-auto">
            <table className="w-full table-auto border-collapse border border-gray-300">
                <thead className="bg-gray-100">
                <tr>
                    <th className="border p-2">Nombre</th>
                    <th className="border p-2">Categoría</th>
                    <th className="border p-2">Precio</th>
                    <th className="border p-2">Stock</th>
                    <th className="border p-2">Stock Mínimo</th>
                    <th className="border p-2">Última Compra</th>
                    <th className="border p-2">Acciones</th>
                </tr>
                </thead>
                <tbody>
                {products.map((p) => (
                    <tr key={p.id} className="text-center">
                        <td className="border p-2">{p.name}</td>
                        <td className="border p-2">{p.category}</td>
                        <td className="border p-2">${p.price.toLocaleString()}</td>
                        <td className="border p-2">{p.currentStock}</td>
                        <td className="border p-2">{p.minStock}</td>
                        <td className="border p-2">{p.lastPurchaseDate}</td>
                        <td className="border p-2">
                            <button
                                onClick={() => handleDelete(p.id)}
                                className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                            >
                                Eliminar
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}
