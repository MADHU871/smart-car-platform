import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>

      <div style={{ display: "flex" }}>

        <Sidebar />

        <div style={{ flex: 1 }}>
          <Routes>

            <Route
              path="/"
              element={<Dashboard />}
            />

          </Routes>
        </div>

      </div>

    </BrowserRouter>
  );
}

export default App;