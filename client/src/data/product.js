// src/data/products.js
import grayShirt from "../images/product-images/gray-tshirt.png";
import indoorPlant11 from "../images/product-images/indoor-plant.png";
import grayCap from "../images/product-images/gray-cap.png";
import wallClock from "../images/product-images/wood-wall-clock.png";
import ceramicVase from "../images/product-images/ceramic-vases.png";
import sneakers from "../images/product-images/sneakers.png";
import wallDecor from "../images/product-images/vintage-decor-wall.webp";
import naturalPlant from "../images/product-images/natural-plant.png";
import dinnerWareSets from "../images/product-images/dinnerware-sets.png";
import pinkSweater from "../images/product-images/pink-shirt.webp";

/* shared product data used across Home, Shop, product-detail, cart, anywhere a product needs to be displayed */
const products = [
  {
    id: "basic-gray-tshirt",
    name: "Basic gray t-shirt",
    category: "Fashion",
    price: 29.99,
    originalPrice: 39.99,
    image: grayShirt,
  },
  {
    id: "11-inch-indoor-plant",
    name: "11-inch indoor plant",
    category: "garden",
    price: 16.99,
    originalPrice: 19.99,
    image: indoorPlant11,
  },
  {
    id: "basic-gray-cap",
    name: "basic gray cap",
    category: "Fashion",
    price: 7.99,
    originalPrice: 10.99,
    image: grayCap,
  },
  {
    id: "solid-wood-wall-clock",
    name: "solid wood wall clock",
    category: "decoration",
    price: 29.99,
    originalPrice: 39.99,
    image: wallClock,
  },
  {
    id: "ceramic-flower-vases",
    name: "ceramic flower vases",
    category: "decoration",
    price: 19.99,
    originalPrice: 21.99,
    image: ceramicVase,
  },
  {
    id: "white-sneakers",
    name: "white sneakers",
    category: "Fashion",
    price: 49.99,
    originalPrice: 99.99,
    image: sneakers,
  },
  {
    id: "vintage-wall-decor",
    name: "vintage wall decor",
    category: "decoration",
    price: 29.99,
    originalPrice: 39.99,
    image: wallDecor,
  },
  {
    id: "12-inch-natural-plant",
    name: "12-inch natural plant",
    category: "garden",
    price: 29.99,
    originalPrice: 39.99,
    image: naturalPlant,
  },
  {
    id: "dinnerware-sets",
    name: "dinnerware sets",
    category: "decoration",
    price: 29.99,
    originalPrice: 39.99,
    image: dinnerWareSets,
  },
  {
    id: "pink-sweater",
    name: "pink sweater",
    category: "Fashion",
    price: 29.99,
    originalPrice: 39.99,
    image: pinkSweater,
  },
];

export default products;