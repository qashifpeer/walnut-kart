import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    image: "../../img/1.jpg",
    title: "premium bed",
    author: "Shiv Khera",
    price: "50000",
    categoryName: "bedroom",
  },
  {
    _id: uuid(),
    image: "../../img/2.jpg",
    title: "luxurious round table ",
    author: "Junaid Qureshi",
    price: "3000",
    categoryName: "lounge",
  },
  {
    _id: uuid(),
    image: "../../img/3.jpg",
    title: "boat type table",
    author: "Shiv Khera",
    price: "13500",
    categoryName: "lounge",
    // featured: true,
  },
  {
    _id: uuid(),
    image: "../../img/4.jpg",
    title: "king size table",
    author: "Shiv Khera",
    price: "19000",
    categoryName: "dining",
  },
  {
    _id: uuid(),
    image: "../../img/5.jpg",
    title: "perfect office table",
    author: "Shiv Khera",
    price: "10000",
    categoryName: "office",
    featured: true,
  },
  {
    _id: uuid(),
    image: "../../img/6.jpg",
    title: "front office desk",
    author: "Shiv Khera",
    price: "15000",
    categoryName: "office",
  },
  {
    _id: uuid(),
    image: "../../img/7.jpg",
    title: "vertical desk",
    author: "Shiv Khera",
    price: "1100",
    categoryName: "lounge",
  },
  {
    _id: uuid(),
    image: "../../img/8.jpg",
    title: "premium dressing station",
    author: "Shiv Khera",
    price: "10000",
    categoryName: "bedroom",
  },
  {
    _id: uuid(),
    image: "../../img/9.jpg",
    title: "handcrafted chair",
    author: "Shiv Khera",
    price: "1700",
    categoryName: "bedroom",
    featured: true,
  },
  {
    _id: uuid(),
    image: "../../img/10.jpg",
    title: "one drawer top",
    author: "Shiv Khera",
    price: "1500",
    categoryName: "bedroom",
  },
  {
    _id: uuid(),
    image: "../../img/11.jpg",
    title: "king sized dining table",
    author: "Shiv Khera",
    price: "2000",
    categoryName: "dining",
    featured: true,
  },
  {
    _id: uuid(),
    image: "../../img/12.jpg",
    title: "wooden made chair",
    author: "Shiv Khera",
    price: "1000",
    categoryName: "office",
  },
];
