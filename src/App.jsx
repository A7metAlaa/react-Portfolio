import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
 import About from './Components/About/about'
import Home from './Components/Home/Home'
 
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/Contact/Contact'
import Products from './Components/Products/Products'

let paths= createBrowserRouter([
   {path:'',element:<Layout/>,children:[
    {index:'true' , element:<Home/>},
    {path:'Portfolio' , element:<Portfolio/>},
    {path:'about' , element:<About/>},
    {path:'Contact' , element:<Contact/>},
    {path:'products' , element:<Products/>},
    {path:'*' , element:<h2> not exist </h2>},
  ]}
])


function App() {
   
 
  return  (

    <div>
    <RouterProvider router={paths}></RouterProvider>
    </div>
  )
}

export default App
