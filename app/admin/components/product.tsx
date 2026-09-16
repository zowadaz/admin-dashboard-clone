"use client";

import { create } from "zustand";
import ProductList from "./product-list";

export type ProductStatus = "active" | "draft" | "archive";
export type ProductFilter = ProductStatus | "all";

export type ProductInfo = {
    img: string;
    name: string;
    description: string;
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
        img: "/products/iphone10.jpg",
        name: "iphone 10",
        description: "iphone 10",
        status: "active",
        price: 999,
        totalSales: 150,
        createdAt: new Date("2026-09-13"),
    },
    {
        img: "/products/iphone11.jpg",
        name: "iphone 11",
        description: "iphone 11",
        status: "active",
        price: 199,
        totalSales: 300,
        createdAt: new Date("2026-09-13"),
    },
    {
        img: "/products/iphone12.jpg",
        name: "iphone 12",
        description: "iphone 12",
        status: "active",
        price: 999,
        totalSales: 150,
        createdAt: new Date("2026-09-13"),
    },
    {
        img: "/products/iphone13.jpg",
        name: "iphone 13",
        description: "iphone 13",
        status: "active",
        price: 199,
        totalSales: 300,
        createdAt: new Date("2026-09-13"),
    },
    {
        img: "/products/iphone14.jpg",
        name: "iphone 14",
        description: "iphone 14",
        status: "active",
        price: 999,
        totalSales: 150,
        createdAt: new Date("2026-09-13"),
    },
    {
        img: "/products/iphone15.jpg",
        name: "iphone 15",
        description: "iphone 15",
        status: "active",
        price: 199,
        totalSales: 300,
        createdAt: new Date("2026-09-13"),
    },
    {
        img: "/products/iphone16.jpg",
        name: "iphone 16",
        description: "iphone 16",
        status: "draft",
        price: 999,
        totalSales: 150,
        createdAt: new Date("2026-09-13"),
    },
    {
        img: "/products/iphone17.jpg",
        name: "iphone 17",
        description: "iphone 17",
        status: "archive",
        price: 199,
        totalSales: 300,
        createdAt: new Date("2026-09-13"),
    },
    {
        img: "/products/iphone18.jpg",
        name: "iphone 18",
        description: "iphone 18",
        status: "active",
        price: 999,
        totalSales: 150,
        createdAt: new Date("2026-09-13"),
    },
    {
        img: "/products/ipod2.jpg",
        name: "ipod 2",
        description: "ipod 2",
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