import React, {FunctionComponent} from 'react';
import {Column, usePagination, useTable} from "react-table"
import Table, {Pagination} from "@components/Layout/Table";

interface OwnProps {
  ships: Ship[],
  onShipSelected: (selected: Ship) => void
}

type Props = OwnProps;

/**
 * ShipTable is based react-table component
 * create a table of ship information with clickable row
 * @param ships array of ship
 * @param onShipSelected callback on row ship click
 * @constructor
 */
const ShipTable: FunctionComponent<Props> = ({ships, onShipSelected}) => {
  // React-table : declare typed colums https://react-table-v7.tanstack.com/docs/api/useTable
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
      }
    ],
    []
  )

  // React-table : create table with pagination
  // - https://react-table-v7.tanstack.com/docs/api/useTable
  // - https://react-table-v7.tanstack.com/docs/api/usePagination
  const tableInstance = useTable(
    {
      columns,
      data: ships,
      initialState: {pageIndex: 0, pageSize: 10},
    },
    usePagination
  )

  return (
    <>
      <Table {...tableInstance} onRowClick={row => onShipSelected(row.original)}/>
      <Pagination {...tableInstance} />
    </>
  );
}

export default ShipTable;
