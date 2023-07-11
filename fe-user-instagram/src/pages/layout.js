import { Outlet } from "react-router-dom"
import LeftSidebar from "../compoments/_common/sidebar/sidebarLeft"

export default function Layout(){
    return(
        <>
        <div id="main" className="sidebar-mini layout-fixed container">
            <div className="wrapper container-fluid p-0">
                <LeftSidebar/>
                <Outlet/>
            </div>
        </div>
        </>
    )
}