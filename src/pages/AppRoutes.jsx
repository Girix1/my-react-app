import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Home/Home"
import Article from "./Article/Article"
import About from "./About/About"
import Menu from "../components/Menu/Menu"
import Error from "./Error/Error"

export default function AppRoutes() {
  return (
    <BrowserRouter>
    <Menu />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/article" element={<Article />}/>
      <Route path="/about" element={<About />}/>


      <Route path="*" element={<Error />}/>
    </Routes>
    </BrowserRouter>
  )
}
