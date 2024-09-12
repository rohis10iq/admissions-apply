import { createBrowserRouter  } from "react-router-dom";
import App from "./App";
import Partnersform from "./components/Partnersform";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />, //represents global layout for overall application
  },
  {
    path:"/partner", // new route group for partners (forms , dashboard , etc)
    children:[
      {
        path:"new-partnership",
        element:<Partnersform/>
      },
    ]
  }
]);
