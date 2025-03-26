import "bootstrap/dist/css/bootstrap.min.css"

import Header from "./components/Header"
import Hero from "./components/Hero"
import Highlight from "./components/Highlight"


function App() {
  const menu = [
    {
      name: "Greek Salad",
      price: 12.75,
      description: "",
      imgSrc: ""
    }
  ]
  return (
    <>
     <Header/>
     <Hero/>
     
    </>
  )
}

export default App
