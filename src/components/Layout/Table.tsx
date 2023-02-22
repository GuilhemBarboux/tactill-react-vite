import React, {FunctionComponent} from 'react';
import {TableInstance} from "react-table";

const Table: FunctionComponent<TableInstance<any>> = ({
  headerGroups,
  rows,
  prepareRow,
}) => (
  <table>
    <thead>
      {headerGroups.map(headerGroup => (
        <tr {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map(column => (
            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
          ))}
        </tr>
      ))}
    </thead>
    <tbody>
    {rows.map((row, i) => {
      prepareRow(row);
      return (
        <tr {...row.getRowProps()}>
          {row.cells.map(cell => {
            return (
              <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
            );
          })}
        </tr>
      );
    })}
    </tbody>
  </table>
);

export default Table;
