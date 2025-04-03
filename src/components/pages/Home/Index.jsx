import Header from "../../layout/Header"
import Footer from "../../layout/Footer"

import Hero from "./Hero"
import Highlight from "./Highlight"
import Testimonial from "./Testimonial"
import About from "./About"

export default function Home() {
    const menu = [
        {
          name: "Greek Salad",
          price: 12.75,
          text: 
          "A refreshing mix of cucumbers, tomatoes, red onions," +
          "and Kalamata olives, topped with feta cheese and drizzled with olive oil and lemon.",
          src: "/images/headerPic.webp"
        },
        {
          name: "Greek Salad",
          price: 12.75,
          text: 
          "A refreshing mix of cucumbers, tomatoes, red onions," +
          "and Kalamata olives, topped with feta cheese and drizzled with olive oil and lemon.",
          src: "/images/headerPic.webp"
        },
        {
          name: "Greek Salad",
          price: 12.75,
          text: 
          "A refreshing mix of cucumbers, tomatoes, red onions," +
          "and Kalamata olives, topped with feta cheese and drizzled with olive oil and lemon.",
          src: "/images/headerPic.webp"
        }
      ]
    return (
        <div>
            <Hero/>
            <Highlight menu={menu}/>
            <Testimonial/>
            <About/>
        </div>
    )
}