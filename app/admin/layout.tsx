export default function AdminLayout({children} : 
    {children: React.ReactNode}) {
    return (
        <div className="flex min-h-screen bg-background">
            {/* sidebar */}
            <aside className="w-64 border-r bg-card">
                <div className="flex h-24 items-center border-b px-6">
                    <h1 className="text-lg font-bold">
                        Admin Dashboard
                    </h1>
                </div>
                {/* navigation */}
                <nav className="p-4">
                    <div className="space-y-2">
                        <a href="admin" className="block rounded-md p-4 text-sm font-medium hover:bg-muted">
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
            <main className="flex-1 bg-stone-50">
                <header className="flex flex-col h-24 border-b text-sm">
                    {/* route search logout */}
                    <div className="flex w-full items-center">
                        {/* route */}
                        <p className="px-4">
                            Dashboard  ＞  Products  ＞  All Products 
                        </p>
                        {/* search logout */}
                        <div className="flex flex-1 items-center justify-end gap-4">
                            {/* search */}
                            <span className="text-md">
                                Search...
                            </span>
                            {/* logout */}
                            <button className="rounded-md border p-2">
                                logout
                            </button>
                        </div>
                    </div>
                    {/* tab export addProducts */}
                    <div className="flex items-center py-2">
                        {/* tab */}
                        <div className="flex bg-stone-200 ml-4">
                            <button className="p-2">All</button>
                            <button className="p-2">Active</button>
                            <button className="p-2">Draft</button>
                            <button className="p-2">Archive</button>   
                        </div>
                        {/* export addProducts */}
                        <div className="flex flex-1 items-center justify-end gap-4">
                            {/* export */}
                            <button className="rounded-sm border p-2 bg-gray-100">
                                Export
                            </button>
                            {/* add products */}
                            <button className="rounded-md border p-2 bg-black text-white">
                                add products
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