import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminPage from "./pages/AdminPage";
import BuyerPage from "./pages/BuyerPage";


export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/buyer" element={<BuyerPage />} />

      </Routes>
    </BrowserRouter>
  );
}
