import React from "react";

import { Grid } from "grommet";

const GridComponent = ({ children }) => (
  <Grid
    rows={["auto", "medium", "small"]}
    columns={["auto", "flex"]}
    areas={[
      { name: "header", start: [0, 0], end: [1, 0] },
      { name: "sidebar", start: [0, 1], end: [0, 1] },
      { name: "main", start: [1, 1], end: [1, 2] }
    ]}
  >
    {children}
  </Grid>
);

export default GridComponent;
