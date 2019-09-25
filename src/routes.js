import Home from "./js/pages/home/Home";
import Products from "./js/pages/products/Products";
import Product from "./js/pages/product/Product";
import Order from "./js/pages/order/Order";

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
    },{
        route:'/order',
        Component:Order
    }
]