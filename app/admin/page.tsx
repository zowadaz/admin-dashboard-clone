import Product from "./components/product"

export default function AdminPage() {
    return (
        <div className="m-4 h-full bg-white rounded-lg p-4">
            <h1 className="text-2xl font-semibolt">
                Products
            </h1>
            <p className="mt-2 text-sm text-gray-500">
                Manage your products and view their sales performance.
            </p>
            <Product />
        </div>
    )
}