import { useState } from "react";

export default function InventoryTable() {
  const [columns, setColumns] = useState([]);
  const [rows, setRows] = useState([]);

  const handleAddColumn = () => {
    const columnName = prompt("Enter column name:");
    if (columnName) {
      setColumns([...columns, columnName]);
    }
  };

  const handleAddRow = () => {
    const newRow = {};
    columns.forEach((column) => {
      const item = prompt(`Enter item for ${column}:`);
      newRow[column] = item || "";
    });
    setRows([...rows, newRow]);
  };

  return (
    <div>
      <button onClick={handleAddColumn}>Add Column</button>
      <button onClick={handleAddRow}>Add Row</button>

      <table>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column, columnIndex) => (
                <td key={columnIndex}>{row[column]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
