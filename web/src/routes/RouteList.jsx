import {useRoutes}from "react-router-dom";
import { Visitor } from "../layouts";
import { Login } from "../pages";
export default function RouteList(){
    
    return useRoutes([
        {
            path:"/",
            element:<Visitor/>,
            children:[
                {
                    path:"/",
                    element:<Login />
                }
            ]
        }
    ])
}