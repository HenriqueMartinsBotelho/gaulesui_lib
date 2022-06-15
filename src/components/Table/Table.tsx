import React from "react";
import "./Table.css";

export interface ITableProps {
  columns: any[];
  rows: any[];
}

const Table = ({ columns, rows }: ITableProps) => {
  return (
    <>
      <table className="gau_table">
        <thead>
          <tr>
            {columns.map((column) => (
              <th className="gau_th" key={column.label}>
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <TableRow key={row.id} row={row} />
          ))}
        </tbody>
      </table>
    </>
  );
};

const TableRow = ({ row }) => {
  return (
    <tr>
      {Object.keys(row).map((val) => (
        <td className="gau_td">{row[val]}</td>
      ))}
    </tr>
  );
};

export default Table;
