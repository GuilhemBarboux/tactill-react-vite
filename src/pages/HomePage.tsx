import React, {FC, useCallback, useEffect, useState} from 'react'
import {Container} from "theme-ui";
import {getShips} from '@services/graphql'
import ShipTable from "@components/Ship/ShipTable"
import {Themed} from '@theme-ui/mdx';
import {Outlet, useNavigate, useParams} from "react-router-dom";

interface OwnProps {}

type Props = OwnProps;

const HomePage: FC<Props> = () => {
  const navigate = useNavigate();
  const { shipId } = useParams();

  const [ships, setShips] = useState<Ship[]>([])
  const [selectedShip, setSelectedShip] = useState<Ship | null>(null)

  useEffect(() => {
    getShips().then(setShips)
  })

  useEffect(() => {
    if (selectedShip) {
      navigate("/ship/" + selectedShip.id, {
        state: {
          ship: selectedShip
        }
      });
    } else {
      navigate("/")
    }
  }, [selectedShip]);

  const onShipSelected = useCallback(
    (selected: Ship) => {
      setSelectedShip(selected)
    },
    [setSelectedShip],
  );

  return (
    <>
      <Container>
        <Themed.h1>List of ships</Themed.h1>
        <ShipTable onShipSelected={onShipSelected} ships={ships}/>
      </Container>
      {shipId && <Outlet context={{ ship: selectedShip, close: () => setSelectedShip(null)}}/>}
    </>
  )
}

export default HomePage
