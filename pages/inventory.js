import { useState } from "react";
import styles from "../styles/table.module.css";

export default function InventoryTable() {
  const [columns, setColumns] = useState([
    "ID",
    "Item Description",
    "Quantity Received (Units)",
    "Quantity Issued (Units)",
    "Quantity Remaining (Units)",
  ]);
  const [rows, setRows] = useState([]);

  const handleAddRow = () => {
    const newRow = {};
    columns.forEach((column) => {
      const item = prompt(`Enter item for ${column}:`);
      newRow[column] = item || "";
    });
    newRow["reorderLevel"] = prompt("Set reorder level:") || "";
    newRow["Quantity Remaining (Units)"] = newRow["Quantity Received (Units)"];
    setRows([...rows, newRow]);
  };

  const handleCellValueChange = (rowIndex, columnName, newValue) => {
    const updatedRows = [...rows];
    updatedRows[rowIndex][columnName] = newValue;

    if (
      columnName === "Quantity Received (Units)" ||
      columnName === "Quantity Issued (Units)"
    ) {
      const quantityReceived =
        parseFloat(updatedRows[rowIndex]["Quantity Received (Units)"]) || 0;
      const quantityIssued =
        parseFloat(updatedRows[rowIndex]["Quantity Issued (Units)"]) || 0;
      updatedRows[rowIndex]["Quantity Remaining (Units)"] =
        quantityReceived - quantityIssued;
    }

    setRows(updatedRows);
  };

  return (
    <div className="container-img">
      <div className={styles.inventoryTable}>
        <button onClick={handleAddRow}>Add Item</button>
        <button>Save</button>

        <table>
          <thead>
            <tr>
              {columns.map((column, index) => (
                <th
                  key={index}
                  className={index === 0 ? styles.firstColumn : ""}
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {columns.map((column, columnIndex) => {
                  if (
                    column === "Quantity Issued (Units)" ||
                    column === "Quantity Received (Units)"
                  ) {
                    return (
                      <td
                        key={columnIndex}
                        className={columnIndex === 0 ? styles.firstColumn : ""}
                      >
                        <input
                          type="number"
                          value={row[column]}
                          onChange={(e) =>
                            handleCellValueChange(
                              rowIndex,
                              column,
                              e.target.value
                            )
                          }
                        />
                      </td>
                    );
                  } else if (column === "Quantity Remaining (Units)") {
                    const isBelowReorderLevel =
                      parseFloat(row[column]) <=
                      parseFloat(row["reorderLevel"]);
                    const cellClassName = isBelowReorderLevel
                      ? styles.highlightedCell
                      : "";

                    return (
                      <td
                        key={columnIndex}
                        className={`${
                          columnIndex === 0 ? styles.firstColumn : ""
                        } ${cellClassName}`}
                      >
                        {row[column]}
                      </td>
                    );
                  } else {
                    return (
                      <td
                        key={columnIndex}
                        className={columnIndex === 0 ? styles.firstColumn : ""}
                      >
                        <input
                          type="text"
                          value={row[column]}
                          onChange={(e) =>
                            handleCellValueChange(
                              rowIndex,
                              column,
                              e.target.value
                            )
                          }
                        />
                      </td>
                    );
                  }
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
