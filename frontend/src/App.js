import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Sidebar from "./components/Sidebar";
import GPS from "./pages/GPS";
import Trips from "./pages/Trips";
import Health from "./pages/Health";
import Analytics from "./pages/Analytics";

function App() {

  const token = localStorage.getItem("token");

  return (

    <BrowserRouter>

      {token ? (

        <div
          style={{
            display: "flex"
          }}
        >

          <Sidebar />

          <div
            style={{
              flex: 1
            }}
          >

            <Routes>

              <Route
                path="/"
                element={<Dashboard />}
              />

              <Route
                path="/gps"
                element={<GPS />}
              />

              <Route
                path="/trips"
                element={<Trips />}
              />

              <Route
                path="/health"
                element={<Health />}
              />

              <Route
                path="/analytics"
                element={<Analytics />}
              />

              <Route
                path="*"
                element={<Navigate to="/" />}
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

          <Route
            path="*"
            element={<Navigate to="/login" />}
          />

        </Routes>

      )}

    </BrowserRouter>

  );

}

export default App;