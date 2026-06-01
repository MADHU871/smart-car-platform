import { Link } from "react-router-dom";

function Sidebar() {

  const handleLogout = () => {

    localStorage.removeItem("isLoggedIn");

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
          style={{
            color: "white",
            textDecoration: "none"
          }}
        >
          Dashboard
        </Link>
      </p>

      <p>
        <Link
          to="/gps"
          style={{
            color: "white",
            textDecoration: "none"
          }}
        >
          GPS Tracking
        </Link>
      </p>

      <p>
        <Link
          to="/trips"
          style={{
            color: "white",
            textDecoration: "none"
          }}
        >
          Trips
        </Link>
      </p>

      <p>
        <Link
          to="/health"
          style={{
            color: "white",
            textDecoration: "none"
          }}
        >
          Health
        </Link>
      </p>

      <hr />

      <button
        onClick={handleLogout}
        style={{
          padding: "10px",
          width: "100%",
          cursor: "pointer"
        }}
      >
        Logout
      </button>

    </div>
  );
}

export default Sidebar;