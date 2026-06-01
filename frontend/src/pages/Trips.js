function Trips() {

  const trips = [

    {
      from: "Hyderabad",
      to: "Vijayawada",
      distance: "275 KM"
    },

    {
      from: "Vijayawada",
      to: "Guntur",
      distance: "35 KM"
    },

    {
      from: "Guntur",
      to: "Hyderabad",
      distance: "270 KM"
    }

  ];

  return (

    <div style={{ padding: "20px" }}>

      <h1>Trip History</h1>

      {trips.map((trip, index) => (

        <div
          key={index}
          style={{
            border: "1px solid gray",
            marginBottom: "10px",
            padding: "10px"
          }}
        >

          <h3>
            {trip.from} → {trip.to}
          </h3>

          <p>
            Distance:
            {trip.distance}
          </p>

        </div>

      ))}

    </div>

  );

}

export default Trips;