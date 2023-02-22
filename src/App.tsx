import React, { useState, useEffect } from 'react'
import { getShips } from './services/graphql'
import {Container} from "theme-ui";
import ShipTable from "@components/Ship/ShipTable"

const App = () => {
  const [ships, setShips] = useState<Ship[]>([])

  useEffect(() => {
    getShips().then(setShips)
  })

  console.log(ships);

  return (
    <Container>
      <ShipTable ships={ships}/>
    </Container>
  )
}

export default App
