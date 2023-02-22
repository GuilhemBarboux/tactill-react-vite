import React, {createContext, FunctionComponent, PropsWithChildren, useCallback, useEffect, useState} from 'react';
import {getShips} from "@services/graphql";

export const ShipContext = createContext<{
  ships: Ship[],
  getById: (id: string) => Ship | null,
  refresh: () => void
}>({
  ships: [],
  getById: () => null,
  refresh: () => null
})

const ShipProvider: FunctionComponent<PropsWithChildren> = ({children}) => {
  const [ships, setShips] = useState<Ship[]>([]);

  const getById = useCallback(
    (id: string) => {

      // Not working : name on ship entity are empty
      // getShip(shipId).then(setShip)

      return ships.find(s => s.id === id) || null
    }, [ships]
  );

  const refresh = useCallback(
    async () => getShips().then(setShips),
    [ships]
  );

  useEffect(() => {
    getShips().then(setShips)
  })

  return <ShipContext.Provider value={{
    ships,
    getById,
    refresh
  }}>
    {children}
  </ShipContext.Provider>;
};

export default ShipProvider;
