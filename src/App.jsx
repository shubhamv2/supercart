import { createBrowserRouter, RouterProvider } from "react-router"
import Layout from "./components/layout/Layout"
import Home from "./pages/Home"
const App = () =>{
  const router = createBrowserRouter([
    {
      path:'/',
      Component:Layout,
      children:[
        {
          index:true,
          Component:Home
        }
      ]
    }
  ])
  return(
    <RouterProvider router={router}/>
  )
}

export default App