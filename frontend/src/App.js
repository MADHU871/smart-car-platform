import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

function App() {

  const isLoggedIn =
    localStorage.getItem("isLoggedIn");

  return (
    <BrowserRouter>

      {isLoggedIn ? (

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

      ) : (

        <Routes>

          <Route
            path="/"
            element={<Login />}
          />

          <Route
            path="/login"
            element={<Login />}
          />

        </Routes>

      )}

    </BrowserRouter>
  );
}

export default App;