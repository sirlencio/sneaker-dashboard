import type { Sneaker } from "@/types/sneakers";

export const sneakersTestData: Sneaker[] = [
    {
        id: 1,
        name: "Air Jordan 1 Chicago",
        brand: "Nike",
        price: 180,
        stock: 15,
        imageUrl: "https://images.clothes.com/aj1-chicago.jpg",
    },
    {
        id: 2,
        name: "Yeezy Boost 350 V2",
        brand: "Adidas",
        price: 220,
        stock: 8,
        imageUrl: "https://images.clothes.com/yeezy-350.jpg",
    },
    {
        id: 3,
        name: "Old Skool Classic",
        brand: "Vans",
        price: 75,
        stock: 40,
        imageUrl: "https://images.clothes.com/vans-old-skool.jpg",
    },
    {
        id: 4,
        name: "New Balance 550",
        brand: "New Balance",
        price: 120,
        stock: 0, // Probará tu lógica de 'out of stock'
    },
    {
        id: 5,
        name: "Air Force 1 Low",
        brand: "Nike",
        price: 110,
        stock: 25,
    },
    {
        id: 6,
        name: "Forum Low",
        brand: "Adidas",
        price: 100,
        stock: 12,
    },
    {
        id: 7,
        name: "Chuck Taylor All Star",
        brand: "Converse",
        price: 65,
        stock: 50,
    },
    {
        id: 8,
        name: "990v6 Grey",
        brand: "New Balance",
        price: 240,
        stock: 5,
    }
];