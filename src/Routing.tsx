import { createBrowserRouter  } from "react-router-dom";
import Layout from './layout/Layout'
import App from "./App";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, //represents global layout for overall application
    children: [
      {
        path: "/", //index page , home
        element:<App/>,
      },
      {
        path:"/partner", // new route group for partners (forms , dashboard , etc)
        element:<h1>Partners Layout</h1>,
        children:[
          {
            path:"new-partnership",
            element:<div>new partnership</div>
          }

        ]
      }
    ],
  },
]);
