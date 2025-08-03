import { useEffect, useState } from "react";
import { getProducts } from "../services/api";

export default function ProductTable({ refresh }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts()
            .then((res) => setProducts(res.data))
            .catch((err) => console.error("Error al cargar productos:", err));
    }, [refresh]);

    return (
        <div className="overflow-x-auto">
            <table className="w-full table-auto border-collapse border border-gray-300">
                <thead className="bg-gray-100">
                <tr>
                    <th className="border p-2">Nombre</th>
                    <th className="border p-2">Descripcion</th>
                    <th className="border p-2">Categoría</th>
                    <th className="border p-2">Precio</th>
                    <th className="border p-2">Stock</th>
                    <th className="border p-2">Stock Mínimo</th>
                    <th className="border p-2">Última Compra</th>
                </tr>
                </thead>
                <tbody>
                {products.map((p) => (
                    <tr key={p.id} className="text-center">
                        <td className="border p-2">{p.name}</td>
                        <td className="border p-2">{p.description}</td>
                        <td className="border p-2">{p.category}</td>
                        <td className="border p-2">${p.price.toLocaleString()}</td>
                        <td className="border p-2">{p.currentStock}</td>
                        <td className="border p-2">{p.minStock}</td>
                        <td className="border p-2">{p.lastPurchaseDate}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}
