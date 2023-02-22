import React from 'react'
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ShipPage from "./pages/ShipPage";

const App = () => {
  return (
    <Routes>
      <Route index element={<HomePage/>} />
      <Route path="/" element={<HomePage/>}>
        <Route index />
        <Route path="ship/:shipId" element={<ShipPage />} />
        <Route path="*" element={<div>No match</div>} />
      </Route>
    </Routes>
  )
}

export default App
