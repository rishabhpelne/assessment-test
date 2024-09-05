import React from "react";
import { useParams } from "react-router-dom";
import Chart from "react-apexcharts";

const GraphDetail = () => {
  const { id } = useParams();

  const graphs = [
    {
      id: 1,
      title: "Crude Palm Oil",
      series: [{ name: "Palm Oil", data: [589, 300, 250, 1223, 509] }],
      xCategories: ['Jul"18', 'Jul"19', 'Jul"20', 'Jul"21'],
      yCategories: ["-1250.0", "-750.0", "250.0", "750.0", "1250.0"],
      xTitle: "Crude Palm Oil(Indonesia, Spot FD, USD/MT)",
    },
    {
      id: 2,
      title: "Caustic Soda",
      series: [
        { name: "Caustic Soda", data: [230, 430, 589, 185, 421, 300, 287] },
      ],
      xCategories: [2017, 2018, 2019, 2020, 2021, 2022],
      yCategories: ["-1250.0", "-750.0", "250.0", "750.0", "1250.0"],
      xTitle: "Caustic Soda(Argentina CIF, Solid, USD/MT)",
    },
  ];

  const graph = graphs.find((g) => g.id === parseInt(id));

  if (!graph) return <p>Graph not found</p>;

  const totalAmount = graph.series[0].data.reduce(
    (acc, value) => acc + value,
    0
  );

  return (
    <div className="container mt-3">
      <h3 className="my-4">{graph.title}</h3>
      <div className="row">
        <div className="col-8">
          <Chart
            type="line"
            width={800}
            height={600}
            series={graph.series}
            options={{
              title: { text: graph.title },
              xaxis: {
                title: { text: graph.xTitle },
                categories: graph.xCategories,
              },
              yaxis: {
                categories: graph.yCategories,
              },
            }}
          />
        </div>
        <div className="col-4 d-flex justify-content-end">
          <div className="card">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Total Amount: {totalAmount}</li>
              <li className="list-group-item">N/A</li>
              <li className="list-group-item">13.61%</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphDetail;
