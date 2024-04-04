import { Outlet } from "react-router-dom"
import NavBar from "./Navbar"
NavBar
function Layout() {
  return (
    <>
    <NavBar/>
    <Outlet/>
    </>
  )
}

export default Layout
