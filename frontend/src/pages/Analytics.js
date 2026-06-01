function Analytics() {

  return (

    <div style={{ padding: "20px" }}>

      <h1>Vehicle Analytics</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(3,1fr)",
          gap: "20px"
        }}
      >

        <div
          style={{
            border: "1px solid gray",
            padding: "20px"
          }}
        >
          <h3>Average Speed</h3>
          <h2>72 km/h</h2>
        </div>

        <div
          style={{
            border: "1px solid gray",
            padding: "20px"
          }}
        >
          <h3>Fuel Usage</h3>
          <h2>65%</h2>
        </div>

        <div
          style={{
            border: "1px solid gray",
            padding: "20px"
          }}
        >
          <h3>Battery</h3>
          <h2>88%</h2>
        </div>

      </div>

    </div>

  );

}

export default Analytics;