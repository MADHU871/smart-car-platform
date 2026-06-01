import { Link } from "react-router-dom";

function Sidebar() {
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

      <p><Link to="/">Dashboard</Link></p>

      <p><Link to="/gps">GPS Tracking</Link></p>

      <p><Link to="/trips">Trips</Link></p>

      <p><Link to="/health">Health</Link></p>

    </div>
  );
}

export default Sidebar;