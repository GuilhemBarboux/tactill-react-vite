import React from 'react'
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ShipOverlay from "./pages/ShipOverlay";
import ShipProvider from "@components/Ship/ShipProvider";

const App = () => {
  return (
    <ShipProvider>
      <Routes>
        <Route index element={<HomePage/>} />
          <Route path="/" element={<HomePage/>}>
            <Route index />
            <Route path="ship/:shipId" element={<ShipOverlay />} />
            <Route path="*" element={<div>No match</div>} />
          </Route>
      </Routes>
  </ShipProvider>
  )
}

export default App
