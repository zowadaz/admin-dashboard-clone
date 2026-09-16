"use client";

import { useProductPagination } from "./product";

export default function ProductFilter() {
    const {filter, setFilter} = useProductPagination();
    return (
        <div className="flex bg-stone-200 ml-4">
            <button className={`p-2 ${filter === "all" ? "bg-black text-white" : ""}`} onClick={() => setFilter("all")}>All</button>
            <button className={`p-2 ${filter === "active" ? "bg-black text-white" : ""}`} onClick={() => setFilter("active")}>Active</button>
            <button className={`p-2 ${filter === "draft" ? "bg-black text-white" : ""}`} onClick={() => setFilter("draft")}>Draft</button>
            <button className={`p-2 ${filter === "archive" ? "bg-black text-white" : ""}`} onClick={() => setFilter("archive")}>Archive</button>   
        </div>
    )
}