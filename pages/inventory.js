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
    let newColumns = [...columns];
    let promptExpiry = true;

    if (columns.includes("Expiry Date (dd/mm/yy)")) {
      promptExpiry = false;
    } else {
      const hasExpiry = prompt(
        "Does the item have an expiry? (Y/N)"
      )?.toLowerCase();
      if (hasExpiry === "y" || hasExpiry === "yes") {
        newColumns = [...columns, "Expiry Date (dd/mm/yy)"];
      }
    }

    const newRow = {};
    newColumns.forEach((column) => {
      if (
        column === "Quantity Issued (Units)" ||
        column === "Quantity Remaining (Units)"
      ) {
        newRow[column] = ""; // Assign empty string as default value
      } else {
        const item = prompt(`Enter ${column}:`);
        newRow[column] = item || "";
      }
    });
    newRow["reorderLevel"] = prompt("Set reorder level:") || "";
    newRow["Quantity Remaining (Units)"] = newRow["Quantity Received (Units)"];
    setColumns(newColumns);
    setRows([...rows, newRow]);
  };

  const handleCellValueChange = (rowIndex, columnName, newValue) => {
    const updatedRows = [...rows];
    updatedRows[rowIndex][columnName] = newValue;

    if (
      columnName === "Quantity Received (Units)" ||
      columnName === "Quantity Issued (Units)"
    ) {
      let quantityReceived =
        parseFloat(updatedRows[rowIndex]["Quantity Received (Units)"]) || 0;
      let quantityIssued =
        parseFloat(updatedRows[rowIndex]["Quantity Issued (Units)"]) || 0;

      // Ensure the quantity values are not less than 0
      quantityReceived = Math.max(quantityReceived, 0);
      quantityIssued = Math.max(quantityIssued, 0);

      updatedRows[rowIndex]["Quantity Received (Units)"] = quantityReceived;
      updatedRows[rowIndex]["Quantity Issued (Units)"] = quantityIssued;

      updatedRows[rowIndex]["Quantity Remaining (Units)"] =
        quantityReceived - quantityIssued;
    }

    if (columnName === "Expiry Date (dd/mm/yy)") {
      const currentDate = new Date();
      const dateParts = newValue.split("/"); // Split the date string by "/"
      const day = parseInt(dateParts[0], 10); // Extract the day
      const month = parseInt(dateParts[1], 10) - 1; // Extract the month (subtract 1 because month is zero-based)
      const year = parseInt(dateParts[2], 10); // Extract the year
      const expiryDate = new Date(year, month, day); // Create a new Date object with the extracted parts
      const isExpired = currentDate >= expiryDate;
      const isWithin30Days =
        expiryDate - currentDate <= 30 * 24 * 60 * 60 * 1000;
      const cellClassName = isWithin30Days ? styles.highlightedCell : "";

      if (
        dateParts.length !== 3 ||
        isNaN(day) ||
        isNaN(month) ||
        isNaN(year) ||
        expiryDate.toString() === "Invalid Date"
      ) {
        // Invalid date format, clear the value
        updatedRows[rowIndex][columnName] = "";
      } else {
        updatedRows[rowIndex][columnName] = newValue;
      }
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
                  } else if (column === "Expiry Date (dd/mm/yy)") {
                    const currentDate = new Date();
                    const expiryDate = new Date(row[column]);
                    const isExpired = currentDate >= expiryDate;
                    const isWithin30Days =
                      expiryDate - currentDate <= 30 * 24 * 60 * 60 * 1000;
                    const cellClassName = isWithin30Days
                      ? styles.highlightedCell
                      : "";

                    return (
                      <td
                        key={columnIndex}
                        className={`${
                          columnIndex === 0 ? styles.firstColumn : ""
                        } ${cellClassName}`}
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
