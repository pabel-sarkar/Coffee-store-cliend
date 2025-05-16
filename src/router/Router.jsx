import {
    createBrowserRouter,
  } from "react-router";
import Root from "../Layout/Root";
import Home from "../component/Home/Home";
import CoffeeAdd from "../component/Page/CoffeeAdd";
import CoffeeVew from "../component/Page/CoffeeVew";
import CoffeeEdet from "../component/Page/CoffeeEdet";
import Error from "../component/Page/Error";
import LearnMore from "../component/Page/LearnMore";
// import Login from "../component/Login/Login";
// import SignUp from "../component/SignUp/SignUp";




  export const router = createBrowserRouter([
    {
      path: "/",
      Component:Root,
      children:[
        {   
            index:true,
            path:'/',
            loader:()=>fetch('http://localhost:4000/coffees'),
            Component:Home,
        },
        {
         path:'*',
         Component:Error
       },
       {
      path:'/coffeeAdd',
      Component:CoffeeAdd,
     },
     {
      path:'/coffeeVew/:id',
      loader:({params}) => fetch(`http://localhost:4000/coffees/${params.id}`),
      Component:CoffeeVew,
     },
     {
      path:'/coffeeEdit/:id',
      loader:({params}) =>  fetch(`http://localhost:4000/coffees/${params.id}`),
      Component:CoffeeEdet
     },
     {
      path:'/learn',
      Component:LearnMore
     }
      ]
    },
    
    
  ]);
  