import { Route, Routes } from "react-router-dom"
import NoPage from "./components/NoPage"
import ArtworkPage from "./components/ArtworkPage"
import Drawings from "./components/Drawings"
import Paintings from "./components/Paintings"
import Home from "./components/Home"
import Layout from "./components/Layout"

const AppRoutes = () => {
  return(
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/paintings" element={<Paintings />} />
          <Route path="/drawings" element={<Drawings />} />
          <Route path=":page/:id" element={<ArtworkPage />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
  )
}

export default AppRoutes;
