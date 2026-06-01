function Dashboard() {

  const car = {
    vehicle: "Rollr Mini",
    speed: 72,
    battery: 88,
    fuel: 65
  };

  return (
    <div style={{ padding: "20px" }}>

      <h1>AI Smart Vehicle Dashboard</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "20px"
        }}
      >

        <div style={{ border: "1px solid gray", padding: "20px" }}>
          <h3>Vehicle</h3>
          <h2>{car.vehicle}</h2>
        </div>

        <div style={{ border: "1px solid gray", padding: "20px" }}>
          <h3>Speed</h3>
          <h2>{car.speed} km/h</h2>
        </div>

        <div style={{ border: "1px solid gray", padding: "20px" }}>
          <h3>Battery</h3>
          <h2>{car.battery}%</h2>
        </div>

        <div style={{ border: "1px solid gray", padding: "20px" }}>
          <h3>Fuel</h3>
          <h2>{car.fuel}%</h2>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;