export default function AdminLayout({children} : 
    {children: React.ReactNode}) {
    return (
        <div className="flex min-h-screen bg-background">
            {/* sidebar */}
            <aside className="w-64 border-r bg-card">
                <div className="flex h-16 items-center border-b px-6">
                    <h1 className="text-lg font-bold">
                        Admin Dashboard
                    </h1>
                </div>
                {/* navigation */}
                <nav className="p-4">
                    <div className="space-y-2">
                        <a href="admin" className="block rouded-md p-4 text-sm font-medium hover:bg-muted">
                            Dashboard
                        </a>
                        <a href="admin/orders" className="block rouded-md p-4 text-sm font-medium hover:bg-muted">
                            orders
                        </a>
                        <a href="admin/products" className="block rouded-md p-4 text-sm font-medium hover:bg-muted">
                            products
                        </a>
                        <a href="admin/customers" className="block rouded-md p-4 text-sm font-medium hover:bg-muted">
                            customers
                        </a>
                        <a href="admin/analytics" className="block rouded-md p-4 text-sm font-medium hover:bg-muted">
                            analytics
                        </a>
                    </div>
                </nav>
            </aside>
            {/*main*/}
            <main className="flex-1">
                <header className="h-16 border-b">
                    <div className="flex h-full items-center px-6">
                        <p className="text-lg font-semibold">
                            Title
                        </p>
                        <div className="flex flex-1 items-center justify-end gap-4">
                            <span className="text-sm text-gray-500">
                                Dashboard
                            </span>
                            <button className="rounded-md border p-2">
                                logout
                            </button>
                        </div>
                    </div>
                </header>
                <div className="p-6">
                    {children}
                </div>
            </main>
        </div>
    )
}