import Home from "./js/pages/home/Home";
import Products from "./js/pages/products/Products";
import Product from "./js/pages/product/Product";

export default [
    {
        route: '/',
        Component: Home
    },
    {
        route: '/products',
        Component: Products
    },{
        route:'/product',
        Component:Product
    }
]