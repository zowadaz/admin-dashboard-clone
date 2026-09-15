import {
    Settings,
    Home,
    ShoppingCart,
    Package,
    Users,
    BarChart3,
    User,
    Search,
    File,
    CirclePlus,
} from "lucide-react";

export default function AdminLayout({children} : 
    {children: React.ReactNode}) {
    return (
        <div className="flex min-h-screen bg-background">
            {/* sidebar */}
            <aside className="w-20 bg-card">
                <div className="flex h-24 items-center px-6">
                    <Settings />
                </div>
                {/* navigation */}
                <nav className="p-4">
                    <div className="space-y-2">
                        <a href="admin" className="block rounded-md p-4 text-sm font-medium hover:bg-muted">
                            <Home className="h-5 w-5" />
                        </a>
                        <a href="admin/orders" className="block rouded-md p-4 text-sm font-medium hover:bg-muted">
                            <ShoppingCart className="h-5 w-5" />
                        </a>
                        <a href="admin/products" className="block rouded-md p-4 text-sm font-medium hover:bg-muted">
                            <Package className="h-5 w-5" />
                        </a>
                        <a href="admin/customers" className="block rouded-md p-4 text-sm font-medium hover:bg-muted">
                            <Users className="h-5 w-5" />
                        </a>
                        <a href="admin/analytics" className="block rouded-md p-4 text-sm font-medium hover:bg-muted">
                            <BarChart3 className="h-5 w-5" />
                        </a>
                    </div>
                </nav>
            </aside>
            {/*main*/}
            <main className="flex-1 bg-stone-100">
                <header className="flex flex-col h-24 text-sm p-4">
                    {/* route search user */}
                    <div className="flex w-full items-center">
                        {/* route */}
                        <p className="px-4">
                            Dashboard  ＞  Products  ＞  All Products 
                        </p>
                        {/* search user */}
                        <div className="flex flex-1 items-center justify-end gap-4">
                            {/* search */}
                            <div className="flex w-80 h-8 p-2 items-center border rounded-sm bg-white text-slate-500">
                               <Search className="h-4 w-4"/> 
                                <span className="ml-2">
                                    Search...
                                </span>
                            </div>
                            {/* user */}
                            <button className="rounded-full border p-2 text-slate-500">
                                <User className="h-4 w-4"/>
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
                            <div className="flex rounded-md border items-center p-2 bg-white">
                                <File className="w-4 h-4"/>
                                <p className="pl-2 text-sm font-semibold">Export</p>
                            </div>
                            {/* add products */}
                            <div className="flex rounded-md border p-2 bg-black text-white">
                                <CirclePlus className="w-4 h-4"/>
                                <p className="pl-2 text-sm">Add products</p>
                            </div>
                        </div>
                    </div>
                </header>
                {children}
            </main>
        </div>
    )
}