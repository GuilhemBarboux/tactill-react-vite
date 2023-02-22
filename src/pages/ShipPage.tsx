import React, {FunctionComponent, useEffect, useState} from 'react';
import {useNavigate, useNavigation, useOutletContext, useParams} from "react-router-dom";
import {getShip} from "@services/graphql";
import {Container} from "theme-ui";
import { Themed } from '@theme-ui/mdx';

interface OwnProps {}

type Props = OwnProps;

const ShipPage: FunctionComponent<Props> = () => {
  // Not working : name on ship entity are empty
  // const [ship, setShip] = useState<Ship>(null)
  // const { shipId } = useParams();
  // useEffect(() => {
  //   if(shipId) getShip(shipId).then(setShip)
  // }, [shipId, setShip])

  // Workaround : get ship from ships request and send by outlet context
  const {ship, close} = useOutletContext<{
    ship: Ship,
    close: () => void
  }>();

  return <Container>
    {ship && (
      <>
        <Themed.h1>{ship.name}</Themed.h1>
        <Themed.img src={ship.image} />
      </>
    )}
  </Container>;
};

export default ShipPage;
