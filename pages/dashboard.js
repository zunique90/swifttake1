import { useState } from "react";
import style from "../styles/dash.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Dashboard() {
  const [inventories, setInventories] = useState([
    { name: "Inventory 1", totalItems: 10 },
    { name: "Inventory 2", totalItems: 15 },
    { name: "Inventory 3", totalItems: 8 },
  ]);

  const handleAddInventory = () => {
    const newInventory = {
      name: `Inventory ${inventories.length + 1}`,
      totalItems: 0,
    };
    setInventories([...inventories, newInventory]);
  };

  return (
    <>
      <div className={style.searchBarContainer}>
        <input
          type="text"
          placeholder="Search..."
          className={style.searchBar}
        />
      </div>
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
              <p className={style.totalItems}>
                Total Items: {inventory.totalItems}
              </p>
              <Link href="/inventory" style={{ paddingTop: "80px" }}>View/Add Items</Link>
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
