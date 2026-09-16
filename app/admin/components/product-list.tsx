"use client";
import { ChartNoAxesGanttIcon } from "lucide-react";
import  { type ProductInfo, useProductPagination } from "./product";
import Image from "next/image";

const PRODUCT_PER_PAGE = 5;

export default function ProductList({ products } : {products: ProductInfo[]}) {
    const {filter, currentPage, setCurrentPage} = useProductPagination();
    console.log(filter);
    const filteredProducts = filter === "all" ? products : products.filter(
        (product) => product.status === filter
    );
    
    // empty
    if (filteredProducts.length === 0) {
        return (
            <div></div>
        )
    }

    const productLength = filteredProducts.length;
    const maxPage = Math.ceil(productLength / PRODUCT_PER_PAGE);
    const changingPage = Math.min(maxPage - 1, currentPage);
    const startIndex = changingPage * PRODUCT_PER_PAGE;
    const endIndex = Math.min(productLength, (currentPage + 1) * PRODUCT_PER_PAGE) - 1;
    const currentProducts = filteredProducts.slice(startIndex, endIndex + 1);

    // list
    return (
        <div className="w-full">
            {/* header */}
            <div className="grid w-full grid-cols-[1.5fr_2fr_2fr_2fr_2fr_2fr_1.5fr] items-center border-b px-5 py-4 text-sm font-medium text-slate-500 text-left gap-4">
                <div>Image</div>
                <div>name</div>
                <div className="text-center">Status</div>
                <div>Price</div>
                <div>Total Sales</div>
                <div>Created At</div>
            </div>
            {/* list */}
            {currentProducts.map(product => (
                <div key={product.name} className="grid grid-cols-[1.5fr_2fr_2fr_2fr_2fr_2fr_1.5fr] items-center border-b px-5 py-5 text-left text-sm gap-4">
                    <div>
                        <Image src={product.img} alt={product.description} width={120} height={40}/>
                    </div>
                    <div>{product.name}</div>
                    <div className="border rounded-sm text-center w-fit justify-self-center">{product.status}</div>
                    <div>{product.price}</div>
                    <div>{product.totalSales}</div>
                    <div>{product.createdAt.toDateString()}</div>
                    <div>
                        <button className="w-full text-center">...</button>
                    </div>
                </div>
            ))}
            <div className="flex items-center">
                {/* footer */}
                {/* page index */}
                <div className="text-slate-500">
                    {`Showing ${startIndex + 1}-${endIndex + 1} of ${productLength}`}
                </div>
                <div className="flex flex-1 justify-end gap-5">
                    {/* prev */}
                    <button disabled={changingPage <= 0}  className={`pr-2 ${changingPage <= 0 ? "text-slate-500" : "text-black"}`}
                    onClick={() => setCurrentPage(changingPage - 1)}
                    >
                        {"< prev"}
                    </button>
                    {/* next */}
                    <button disabled={changingPage >= maxPage - 1} className={`pl-2 ${changingPage >= maxPage - 1 ? "text-slate-500" : "text-black"}`}
                    onClick={() => setCurrentPage(changingPage + 1)}
                    >
                        {"next >"}
                    </button>
                </div>
            </div>
        </div>
    )
}