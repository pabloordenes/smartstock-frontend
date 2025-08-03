import { useState } from "react";
import axios from "axios";

const initialState = {
    name: "",
    description: "",
    category: "",
    price: "",
    currentStock: "",
    minStock: "",
    lastPurchaseDate: "",
};

export default function AddProductForm({ onAdd }) {
    const [form, setForm] = useState(initialState);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8080/api/products", {
                ...form,
                price: parseFloat(form.price),
                currentStock: parseInt(form.currentStock),
                minStock: parseInt(form.minStock),
            });
            setForm(initialState);
            onAdd(); // Actualiza tabla tras agregar
        } catch (err) {
            console.error("Error al agregar producto:", err);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 bg-white p-4 rounded shadow mb-6">
            <h2 className="text-xl font-bold">Agregar Producto</h2>
            <div className="grid grid-cols-2 gap-4">
                <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Nombre" className="border p-2 rounded" required />
                <input type="text" name="category" value={form.category} onChange={handleChange} placeholder="Categoría" className="border p-2 rounded" required />
                <input type="text" name="description" value={form.description} onChange={handleChange} placeholder="Descripción" className="border p-2 rounded" />
                <input type="number" name="price" value={form.price} onChange={handleChange} placeholder="Precio" className="border p-2 rounded" required />
                <input type="number" name="currentStock" value={form.currentStock} onChange={handleChange} placeholder="Stock actual" className="border p-2 rounded" required />
                <input type="number" name="minStock" value={form.minStock} onChange={handleChange} placeholder="Stock mínimo" className="border p-2 rounded" required />
                <input type="date" name="lastPurchaseDate" value={form.lastPurchaseDate} onChange={handleChange} className="border p-2 rounded col-span-2" required />
            </div>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Agregar Producto
            </button>
        </form>
    );
}
