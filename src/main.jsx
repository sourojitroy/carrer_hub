import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import ErrorPage from './components/ErrorPage/ErrorPage'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './components/Header/Header';
import Blog from './components/Blog/Blog';
import Graph from './components/Graph/Graph';
import Home from './components/Home/Home';
import SingleCard from './components/SingleCard/SingleCard';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import { productsAndCartData } from './components/utilities/getproandcarddata';


const router= createBrowserRouter([
  {
    path:'/',
    element: <App></App>,
    errorElement: <ErrorPage />,
    
    
    children:[
      {
        path:'/',
        element: <Home></Home>,
        loader: ()=>fetch('data.json'),
      },
      {
        path:'/blog',
        element: <Blog></Blog>
      },
      {
        path:'/graph',
        element: <Graph></Graph>
      },
      {
        path:'/jobslist',
        element: <AppliedJobs></AppliedJobs>,
        loader: ()=>fetch('data.json'),  
      },
      {
        path:'/:loadId',
        element: <SingleCard></SingleCard>,
        loader:()=>fetch('/data.json')
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
