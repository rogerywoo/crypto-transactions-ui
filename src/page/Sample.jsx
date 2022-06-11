import * as React from 'react';
import Button from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';
import { Fragment } from "react";

const Sample = () => {
  const [checkboxSelection, setCheckboxSelection] = React.useState(true);

  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 10,
    maxColumns: 5,
  });

  return (
    <Fragment>
    <h1>Sample</h1>
    <div style={{ width: '100%' }}>
      {/* <Button
        sx={{ mb: 2 }}
        onClick={() => setCheckboxSelection(!checkboxSelection)}
      >
        Toggle checkbox selection
      </Button> */}
      <div style={{ height: 400 }}>
        <DataGrid checkboxSelection={true} {...data} />
      </div>
    </div>
    </Fragment>
  );
}

export default Sample;
