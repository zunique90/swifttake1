import { useState } from "react";
import style from "../styles/dash.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Dashboard() {
  const [inventories, setInventories] = useState([]);

  const handleAddInventory = () => {
    const inventoryName = prompt("Enter the name of the new inventory:");
    if (inventoryName) {
      const newInventory = {
        name: inventoryName,
      };
      setInventories([...inventories, newInventory]);
    }
  };

  return (
    <>
      <div className={style.container}>
        <h1>Dashboard</h1>
        <div>
          {inventories.map((inventory, index) => (
            <div key={index} className={style.categoryBox}>
              <Image
                src="/images/inventory-management.png"
                width={100}
                height={100}
              ></Image>
              <h3 className={style.categoryName}>{inventory.name}</h3>
              <Link href="/inventory">View/Add Items</Link>
            </div>
          ))}
        </div>

        <button className={style.button} onClick={handleAddInventory}>
          New Inventory
        </button>
      </div>
    </>
  );
}
