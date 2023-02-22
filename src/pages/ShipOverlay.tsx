import React, {FunctionComponent, useContext, useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {Button, Container, Heading, Image} from "theme-ui";
import {ShipContext} from "@components/Ship/ShipProvider";
import ShipDetail from "@components/Ship/ShipDetail";

interface OwnProps {}

type Props = OwnProps;

const ShipOverlay: FunctionComponent<Props> = () => {
  const [ship, setShip] = useState<Ship | null>(null)
  const navigate = useNavigate();
  const { shipId } = useParams();
  const { getById } = useContext(ShipContext);

  useEffect(() => {
    if (shipId) {
      setShip(getById(shipId))
    }
  }, [shipId, getById]);


  return <Container variant="overlay" onClick={() => navigate("/")}>
    <Container variant="side" onClick={e => e.stopPropagation()}>
      {ship && <ShipDetail ship={ship}/>}
    </Container>
    <Button variant="close">x</Button>
  </Container>;
};

export default ShipOverlay;
