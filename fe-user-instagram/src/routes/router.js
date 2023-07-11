import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/layout";
import Home from "../pages";
import React from "react";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <Home />,
            }
        ]

    }
])

export default router