
import Hero from "@/Pages/Hero.tsx"
import Instruct from "./Pages/Instruct"
import RedirectComponent from "./Pages/redirect"
import { Routes, Route } from 'react-router-dom';

import page from "./Pages/images/page"


export default function App() {
  return (
    <div>
       <Hero/>
       <Instruct />
       <RedirectComponent/>
       <Route path="/images" element={<path/>} />

    </div>
  )
}
