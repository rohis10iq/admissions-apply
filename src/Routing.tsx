import { createBrowserRouter  } from "react-router-dom";
import App from "./App";
import Partnersform from "./components/Partnersform";
import Login from './components/auth/Login'
import SignUp from './components/auth/SignUp'
import Course2 from "./components/Course2";
import UniCollegeSchool from "./components/UniCollegeSchool";
export const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path:"/partner", // new route group for partners (forms , dashboard , etc)
    children:[
      {
        path:"new-partnership",
        element:<Partnersform/>
      },
    ]
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/sign-up",
    element:<SignUp/>
  },
  {
    path:"/course2",
    element:<Course2/>
  },
  {
    path:"/institutions",
    element:<UniCollegeSchool/>
  },
]);
