export function DataBinding() {
  var TableData = [
    {
      Team: "India",
      Matches: 9,
      Won: 9,
      Lost: 0,
      PTS: 18,
      NRR: "+2.576",
      Image: "ind.png",
    },
    {
      Team: "South Africa",
      Matches: 9,
      Won: 7,
      Lost: 2,
      PTS: 14,
      NRR: "+1.261",
      Image: "sa.png",
    },
    {
      Team: "Australia",
      Matches: 9,
      Won: 7,
      Lost: 2,
      PTS: 14,
      NRR: "+0.841",
      Image: "aus.png",
    },
  ];

  return (
    <>
      <h1>ICC Worldcup 2023 Table</h1>
      <table className="table table-hover table-striped p-2 m-2 w-75">
        <thead>
          <tr>
            <th>Team</th>
            <th>Matches</th>
            <th>Won</th>
            <th>Lost</th>
            <th>PTS</th>
            <th>NRR</th>
          </tr>
        </thead>
        <tbody>
          {TableData.map((data) => (
            <tr key={data.Team}>
              <td className="d-flex">
                <span>
                  <img src={data.Image} alt="" width={40} className="pe-2" />
                </span>
                {data.Team}
              </td>
              <td>{data.Matches}</td>
              <td>{data.Won}</td>
              <td>{data.Lost}</td>
              <td>{data.PTS}</td>
              <td>{data.NRR}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

