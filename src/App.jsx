import 
{
  Route,
  Routes
} 
from "react-router-dom"

import routes from "./routes"

import "bootstrap/dist/css/bootstrap.min.css"

import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer"


function App() {
  return (
    <>
    <Header/>
     <Routes>
      {routes.map((route,index) => (
        <Route path={route.path} element={route.element} key={index}></Route>
      ))}
     </Routes>
     <Footer/>
    </>
  )
}

export default App
