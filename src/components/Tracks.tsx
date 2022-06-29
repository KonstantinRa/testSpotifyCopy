import { Grid } from "@mui/material";
import { ReactElement } from "react";
import { TracksResponse } from "../interfaces";
import TrackCard from "./TrackCard";

interface Props {
  allTracks: TracksResponse | undefined;
}

const Tracks = (props: Props): ReactElement => {
  return (
    <Grid container spacing={2}>
      {props.allTracks?.tracks?.items?.map((data: any, key: number) => (
        <Grid item md={6} key={key}>
          <TrackCard data={data} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Tracks;
