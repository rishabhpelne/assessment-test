import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Chart from 'react-apexcharts';

const GraphList = () => {
  const navigate = useNavigate();

  const [graphs, setGraphs] = useState([
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
      series: [{ name: "Caustic Soda", data: [230, 430, 589, 185, 421, 300, 287] }],
      xCategories: [2017, 2018, 2019, 2020, 2021, 2022],
      yCategories: ["-1250.0", "-750.0", "250.0", "750.0", "1250.0"],
      xTitle: "Caustic Soda(Argentina CIF, Solid, USD/MT)",
    }
  ]);

  const deleteGraph = (id) => {
    setGraphs(graphs.filter(graph => graph.id !== id));
  };

  const viewDetails = (id) => {
    navigate(`/graph-detail/${id}`);
  };

  return (
    <div className='container mt-3'>
      <div className="row">
        <h3 className='my-4'>Graph Listing</h3>
        {graphs.length > 0 ? (
          graphs.map((graph) => (
            <div className="col-6 mb-4" key={graph.id}>
              <button
                className="btn btn-primary mt-3"
                onClick={() => viewDetails(graph.id)}
              >
               <i class="fa-solid fa-eye"></i> View
              </button>
              <button
                className="btn btn-danger mt-3 ms-2"
                onClick={() => deleteGraph(graph.id)}
              >
                <i className="fa-solid fa-trash"></i>
              </button>
              <Chart
                type='line'
                width={500}
                height={400}
                series={graph.series}
                options={{
                  title: { text: graph.title },
                  xaxis: {
                    title: { text: graph.xTitle },
                    categories: graph.xCategories
                  },
                  yaxis: {
                    categories: graph.yCategories
                  }
                }}
              />
            </div>
          ))
        ) : (
          <p>No graphs available</p>
        )}
      </div>
    </div>
  );
};

export default GraphList;
