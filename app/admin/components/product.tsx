"use client";

import { create } from "zustand";
import ProductList from "./product-list";

export type ProductStatus = "active" | "draft" | "archive";
export type ProductFilter = ProductStatus | "all";

export type ProductInfo = {
    img: string;
    name: string;
    status: ProductStatus;
    price: number;
    totalSales: number;
    createdAt: Date; 
};

export type ProductList = {
    products: ProductInfo[];
};

const listProduct: ProductInfo[] = [
    {
        img: "/products/iphone10.png",
        name: "iphone 10",
        status: "active",
        price: 999,
        totalSales: 150,
        createdAt: new Date("2026-09-13"),
    },
    {
        img: "/products/iphone11.png",
        name: "iphone 11",
        status: "active",
        price: 199,
        totalSales: 300,
        createdAt: new Date("2026-09-13"),
    },
    {
        img: "/products/iphone12.png",
        name: "iphone 12",
        status: "active",
        price: 999,
        totalSales: 150,
        createdAt: new Date("2026-09-13"),
    },
    {
        img: "/products/iphone13.png",
        name: "iphone 13",
        status: "active",
        price: 199,
        totalSales: 300,
        createdAt: new Date("2026-09-13"),
    },
    {
        img: "/products/iphone14.png",
        name: "iphone 14",
        status: "active",
        price: 999,
        totalSales: 150,
        createdAt: new Date("2026-09-13"),
    },
    {
        img: "/products/iphone15.png",
        name: "iphone 15",
        status: "active",
        price: 199,
        totalSales: 300,
        createdAt: new Date("2026-09-13"),
    },
    {
        img: "/products/iphone16.png",
        name: "iphone 16",
        status: "draft",
        price: 999,
        totalSales: 150,
        createdAt: new Date("2026-09-13"),
    },
    {
        img: "/products/iphone17.png",
        name: "iphone 17",
        status: "archive",
        price: 199,
        totalSales: 300,
        createdAt: new Date("2026-09-13"),
    },
    {
        img: "/products/iphone18.png",
        name: "iphone 18",
        status: "active",
        price: 999,
        totalSales: 150,
        createdAt: new Date("2026-09-13"),
    },
    {
        img: "/products/earbuds.jpg",
        name: "ipod 2",
        status: "active",
        price: 199,
        totalSales: 300,
        createdAt: new Date("2026-09-13"),
    },
    // ...
];

type ProductPagination = {
    filter: ProductFilter;
    currentPage: number;
    setFilter: (filter: ProductFilter) => void;
    setCurrentPage: (currentPage: number) => void;
};

export const useProductPagination = create<ProductPagination>((set) => ({
    filter: "all",
    currentPage: 0,
    setFilter: (filter) => set({filter}),
    setCurrentPage: (currentPage) => set({currentPage}),
}));

export default function Product() {
    return (
        <div className="flex h-full flex-col">
            <div className="flex flex-1">
                <ProductList products={listProduct}/>
            </div>
        </div>
    )
}