import { Link } from "react-router-dom";

function Sidebar() {

  const logout = () => {

    localStorage.removeItem("token");

    window.location.reload();
  };

  return (

    <div
      style={{
        width: "220px",
        height: "100vh",
        background: "#222",
        color: "white",
        padding: "20px"
      }}
    >

      <h2>Smart Car</h2>

      <p>
        <Link
          to="/"
          style={{ color: "white" }}
        >
          Dashboard
        </Link>
      </p>

      <p>
        <Link
          to="/gps"
          style={{ color: "white" }}
        >
          GPS Tracking
        </Link>
      </p>

      <p>
        <Link
          to="/trips"
          style={{ color: "white" }}
        >
          Trip History
        </Link>
      </p>

      <p>
        <Link
          to="/health"
          style={{ color: "white" }}
        >
          Vehicle Health
        </Link>
      </p>

      <p>
        <Link
          to="/analytics"
          style={{ color: "white" }}
        >
          Analytics
        </Link>
      </p>

      <hr />

      <button
        onClick={logout}
      >
        Logout
      </button>

    </div>

  );

}

export default Sidebar;