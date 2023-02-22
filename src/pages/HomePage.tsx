import React, {FC, useCallback, useContext} from 'react'
import {Button, Container, Flex, Heading} from "theme-ui";
import ShipTable from "@components/Ship/ShipTable"
import {Outlet, useNavigate, useParams} from "react-router-dom";
import {ShipContext} from "@components/Ship/ShipProvider";
import Refresh from "@components/icons/Refresh";

interface OwnProps {}

type Props = OwnProps;

const HomePage: FC<Props> = () => {
  const navigate = useNavigate();
  const { shipId } = useParams();
  const { ships, refresh } = useContext(ShipContext);

  const onShipSelected = useCallback(
    (selected: Ship) => {
      navigate("/ship/" + selected.id);
    },
    [navigate],
  );

  return (
    <>
      <Container>
        <Flex sx={{
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2
        }}>
          <Heading as="h1">List of ships </Heading>
          <Button variant="refresh" onClick={() => refresh()}><Refresh/></Button>
        </Flex>
        <ShipTable onShipSelected={onShipSelected} ships={ships}/>
      </Container>
      {shipId && <Outlet />}
    </>
  )
}

export default HomePage
