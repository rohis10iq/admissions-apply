import { Outlet } from "react-router-dom"

function Layout() {
  return (
    <div className="bg-[#E2E2E2]">
        <Outlet/>
    </div>
  )
}

export default Layout