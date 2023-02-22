import React, { FunctionComponent } from 'react';
import {Column, useTable} from "react-table"
import Table from "@components/Layout/Table";

interface OwnProps {
  ships: Ship[]
}

type Props = OwnProps;

const ShipTable: FunctionComponent<Props> = ({ships}) => {
  const columns: Column<Ship>[] = React.useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'name', // accessor is the "key" in the data
      },
      {
        Header: 'Type',
        accessor: 'type',
      },
      {
        Header: 'Home',
        accessor: 'home_port',
      },
      {
        Header: 'Image',
        accessor: 'image',
      },
    ],
    []
  )

  const tableInstance = useTable<Ship>({ columns, data: ships })

  return <Table {...tableInstance} />;
}

export default ShipTable;
