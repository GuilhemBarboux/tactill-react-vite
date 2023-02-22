import React, {FunctionComponent, useState} from 'react';
import {Box, Heading, Image} from "theme-ui";

interface OwnProps {
  ship: Ship
}

type Props = OwnProps;

const placeholder = "https://via.placeholder.com/521x400"

const ShipDetail: FunctionComponent<Props> = ({ship}) => {
  const [placeholderUrl, setPlaceholderUrl] = useState("");

  return <Box>
    <Heading as="h2">{ship.name}</Heading>
    <Image src={placeholderUrl || ship.image || placeholder} onError={() => setPlaceholderUrl(placeholder)}/>
  </Box>;
};

export default ShipDetail;
