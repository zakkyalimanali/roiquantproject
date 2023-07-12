import { Outlet } from "react-router-dom";

import React from 'react'
import Navtop from "./Navtop";

function Layout() {
  return (
    <div>
      <Navtop/>
      <Outlet/>
    </div>
  )
}

export default Layout
