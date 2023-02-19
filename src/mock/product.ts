import { ProductCategory } from "./../schemas/productCategory";
import { Product } from "../schemas/product";

const categories: ProductCategory[] = [
    {
        id: 1,
        name: "Meat",
        image: "img1",
    },
    {
        id: 2,
        name: "Juice",
        image: "img2",
    },
];

export const products: Product[] = [
    {
        id: 1,
        images: [
            "/images/featured/feature-1.jpg",
            "/images/featured/feature-2.jpg",
            "/images/featured/feature-3.jpg",
            "/images/featured/feature-4.jpg",
            "/images/featured/feature-5.jpg",
        ],
        name: "Pork",
        price: 100,
        quantity: 12,
        categories,
    },
    {
        id: 2,
        images: ["/images/featured/feature-2.jpg"],
        name: "Banana",
        price: 200,
        quantity: 12,
        categories,
        salePercent: 20,
    },
    {
        id: 3,
        images: ["/images/featured/feature-3.jpg"],
        name: "Guava",
        price: 300,
        quantity: 12,
        categories,
    },
    {
        id: 4,
        images: ["/images/featured/feature-4.jpg"],
        name: "Watermelon",
        price: 400,
        quantity: 12,
        categories,
    },
    {
        id: 5,
        images: ["/images/featured/feature-5.jpg"],
        name: "Grape",
        price: 500,
        quantity: 12,
        categories,
    },
    {
        id: 6,
        images: ["/images/featured/feature-6.jpg"],
        name: "Hamburger",
        price: 500,
        quantity: 12,
        categories,
    },
    {
        id: 7,
        images: ["/images/featured/feature-7.jpg"],
        name: "Mango",
        price: 500,
        quantity: 12,
        categories,
    },
    {
        id: 8,
        images: ["/images/featured/feature-8.jpg"],
        name: "Apple",
        price: 500,
        quantity: 12,
        categories,
    },
];
