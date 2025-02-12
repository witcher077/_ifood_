import Layout from './layout';
import { createBrowserRouter, Route, RouterProvider, Routes } from 'react-router';
import Home from './components/Pages/home';
import About from './components/Pages/about';
import Products from './components/Pages/CatList';
import Category from './components/Pages/category';
import Ingredients from './components/Pages/Ingredients';
import OneIngredient from './components/Pages/OneIngredient';
import DetailsPage from './components/Pages/detailsPage';
import Cart from './components/Pages/Cart';
import Login from './components/Pages/login';
import Payment from './components/Pages/Payment';

const router=createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"catogories",
        element:<Products/>
      },
      {
        path:"payments",
        element:<Payment/>
      },
      {
        path:"ingredients",
        element:<Ingredients/>
      },
      {
        path:"foodcategori/:foodcat",
        element:<Category/>
      },
      {
        path:"ingredient/:foodingredient",
        element:<OneIngredient/>
      },
      {
        path:"fooddetails/:food",
        element:<DetailsPage/>
      },
      {
        path:"about",
        element:<About/>
      },
      {
        path:"cart",
        element:<Cart/>
      },
      {
        path:"login",
        element:<Login/>
      },

    ]
  }
])

function Router() {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default Router;
