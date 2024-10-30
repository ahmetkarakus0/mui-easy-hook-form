import { Grid2 as Grid } from "@mui/material";
import ShortWay from "./components/short-way";
import LongWay from "./components/long-way";

const App = () => {
  return (
    <Grid container>
      <Grid size={{ sm: 12, md: 6 }}>
        <ShortWay />
      </Grid>
      <Grid size={{ sm: 12, md: 6 }}>
        <LongWay />
      </Grid>
    </Grid>
  );
};

export default App;
