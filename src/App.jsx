import { Outlet, useLoaderData } from "react-router-dom"
import Navbar from "./components/Navbar"


function App() {
 
  
  

  return (
    <div className="max-w-[1920px] mx-auto bg-[url('/image/coffee-bg.png')]">
      <Navbar />
      <Outlet/>
    </div>
  )
}

export default App
