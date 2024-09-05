import React, { useState } from "react";

const GrapthForm = () => {
  const [rows, setRows] = useState([{ type: "", description: "" }]);

  const addRow = () => {
    setRows([...rows, { type: "", description: "" }]);
  };

  const handleInputChange = (index, e) => {
    const { name, value } = e.target;
    const newRows = [...rows];
    newRows[index][name] = value;
    setRows(newRows);
  };

  const removeRow = (index) => {
    const newRows = [...rows];
    newRows.splice(index, 1);
    setRows(newRows);
  };

  return (
    <div className="container mt-4">
      <h5 className="my-3">Manage Product Price Trends</h5>
      <form>
        {rows.map((row, index) => (
          <div key={index} className="row mb-3 align-items-center">
            <div className="col-md-5">
              <input
                type="text"
                className="form-control"
                name="type"
                placeholder="Type (e.g., Crude Palm Oil)"
                value={row.type}
                onChange={(e) => handleInputChange(index, e)}
              />
            </div>
            <div className="col-md-5">
              <input
                type="text"
                className="form-control"
                name="description"
                placeholder="Short Description"
                value={row.description}
                onChange={(e) => handleInputChange(index, e)}
              />
            </div>
            <div className="col-md-2">
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => removeRow(index)}
                disabled={rows.length === 1}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </form>

      <button className="btn btn-primary" type="button" onClick={addRow}>
        Add Row
      </button>
    </div>
  );
};

export default GrapthForm;
