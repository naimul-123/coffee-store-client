import { Outlet, useLoaderData } from "react-router-dom"
import Navbar from "./components/Navbar"
import Header from "./components/Header"


function App() {




  return (
    <div className="max-w-[1920px] mx-auto bg-[url('/image/coffee-bg.png')]">
      <Header />
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App
