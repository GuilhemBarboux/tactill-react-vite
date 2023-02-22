import React, {FunctionComponent} from 'react';
import {Row, TableInstance} from "react-table";
import {Themed} from "@theme-ui/mdx"
import {Button, Text} from 'theme-ui';

interface OwnProps {
  onRowClick?: (row: Row<any>) => void
}

type Props = OwnProps;

const Table: FunctionComponent<TableInstance<any> & Props> = ({onRowClick, page, headerGroups, prepareRow}) => (
  <Themed.table>
    <thead>
    {headerGroups.map(headerGroup => (
      <tr {...headerGroup.getHeaderGroupProps()}>
        {headerGroup.headers.map(column => (
          <th {...column.getHeaderProps()}>{column.render('Header')}</th>
        ))}
        {onRowClick && (<th></th>)}
      </tr>
    ))}
    </thead>
    <tbody>
    {page.map((row, i) => {
      prepareRow(row);
      return (
        <tr className={onRowClick ? "is-clickable" : ""} {...row.getRowProps()}
            onClick={() => onRowClick ? onRowClick(row) : null}>
          {row.cells.map(cell => {
            return (
              <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
            );
          })}
          {onRowClick && (<td>{'-->'}</td>)}
        </tr>
      );
    })}
    </tbody>
  </Themed.table>
);

export const Pagination: FunctionComponent<TableInstance<any>> = ({
                                                                    canPreviousPage,
                                                                    canNextPage,
                                                                    pageOptions,
                                                                    pageCount,
                                                                    gotoPage,
                                                                    nextPage,
                                                                    previousPage,
                                                                    state: {pageIndex}
                                                                  }) => (
  <>
    <Button variant='secondary' onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
      {'<<'}
    </Button>
    {' '}
    <Button variant='secondary' onClick={() => previousPage()} disabled={!canPreviousPage}>
      {'<'}
    </Button>
    {' '}
    <Button variant='secondary' onClick={() => nextPage()} disabled={!canNextPage}>
      {'>'}
    </Button>
    {' '}
    <Button variant='secondary' onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
      {'>>'}
    </Button>
    {' '}
    <Text>
      Page{' '}
      <strong>
        {pageIndex + 1} of {pageOptions.length}
      </strong>{' '}
    </Text>
  </>
)

export default Table;
