import React, {useState, useEffect, useCallback} from 'react'
import { getShips } from './services/graphql'
import {Container} from "theme-ui";
import ShipTable from "@components/Ship/ShipTable"
import { Themed } from '@theme-ui/mdx';

const App = () => {
  const [ships, setShips] = useState<Ship[]>([])

  useEffect(() => {
    getShips().then(setShips)
  })

  const onShipSelected = useCallback(
    (selected: Ship) => {
      console.info(selected)
    },
    [],
  );

  return (
    <Container>
      <Themed.h1>List of ships</Themed.h1>
      <ShipTable onShipSelected={onShipSelected} ships={ships}/>
    </Container>
  )
}

export default App
