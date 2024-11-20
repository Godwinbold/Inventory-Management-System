import React from "react";
import InventoryList from "../components/Admin/InventoryList";
import AddItem from "../components/Admin/AddItem";

const AdminPage = () => {
  return (
    <div>
      <AddItem />
      <InventoryList />
    </div>
  );
};

export default AdminPage;
