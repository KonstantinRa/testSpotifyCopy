import { Grid, Typography } from "@mui/material";
import { ReactElement, useState } from "react";
import SearchField from "./components/SearchField";
import Tracks from "./components/Tracks";
import { TracksResponse } from "./interfaces";
import logo from "./logo.png";

const App = (): ReactElement => {
  const [results, setResults] = useState<TracksResponse>();

  return (
    <Grid container>
      <Grid item md={2} className="sidebar">
        <img src={logo} alt="" />
        <Typography variant="overline" display="block" gutterBottom>
          Spotify API Test Assignment
        </Typography>
      </Grid>
      <Grid item md={10} className="mainContent">
        <SearchField onSearchResults={setResults} />
        <Tracks allTracks={results} />
      </Grid>
    </Grid>
  );
};

export default App;
