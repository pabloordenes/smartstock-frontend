import './App.css'
import { useState } from "react";
import ProductTable from "./components/ProductTable";
import AddProductForm from "./components/AddProductForm";

function App() {

    const [refresh, setRefresh] = useState(false);

    const reloadProducts = () => setRefresh(!refresh);

    return (
        <div className="min-h-screen bg-zinc-100 text-zinc-800 p-6">
            <h1 className="text-3xl font-bold mb-6">SmartStock Frontend</h1>
            <AddProductForm onAdd={reloadProducts} />
            <ProductTable refresh={refresh} />
        </div>
    );
}

export default App
