import React from "react";
import { AgGridColumn, AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

const CustomPriceRenderer = ({ value }) => (
  <div>This is the price: {value}</div>
);

const App = () => {
  const [gridLoaded, setGridLoaded] = React.useState(null);

  const rowData = [
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxter", price: 72000 }
  ];

  const onGridReady = params => {
    console.log('onGridReady')
    setGridLoaded(true)
  }

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
      <p data-testid="api" style={{ position: 'absolute', left: -999 }}>{gridLoaded ? 'the grid API has been loaded' : null}</p>
      <AgGridReact
        rowData={rowData}
        onGridReady={onGridReady}>
        <AgGridColumn field="make"></AgGridColumn>
        <AgGridColumn field="model"></AgGridColumn>
        <AgGridColumn
          field="price"
          cellRendererFramework={CustomPriceRenderer}
        ></AgGridColumn>
      </AgGridReact>
    </div>
  );
};

export default App;
