import './App.css'
import ProductTable from "./components/ProductTable";

function App() {

    return (
        <div className="min-h-screen bg-zinc-100 text-zinc-800 p-6">
            <h1 className="text-3xl font-bold mb-6">SmartStock Frontend</h1>
            <ProductTable />
        </div>
    );
}

export default App
