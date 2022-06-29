import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { ReactElement } from "react";
import ReactAudioPlayer from "react-audio-player";
import { Item } from "../interfaces";

interface Props {
  data: Item;
}

const digits = (num: number): string => {
  return num.toString().padStart(2, "0");
};

const duration = (milliseconds: number): string => {
  let seconds = Math.floor(milliseconds / 1000);
  let minutes = Math.floor(seconds / 60);

  seconds = seconds % 60;
  minutes = minutes % 60;
  return `${digits(minutes)}:${digits(seconds)}`;
};

const TrackCard = (props: Props): ReactElement => {
  return (
    <Card
      sx={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-end",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <a href={props.data.external_urls.spotify}>
            <Typography component="div" variant="h6">
              {props.data.name}
            </Typography>
          </a>
          <Typography variant="subtitle2" color="initial">
            {duration(props.data.duration_ms)}
          </Typography>
          <a href={props.data.artists[0]?.external_urls?.spotify}>
            <Typography
              variant="subtitle2"
              color="text.secondary"
              component="div"
            >
              Artist: {props.data.artists[0].name}
            </Typography>
          </a>
          <a href={props.data.album?.external_urls?.spotify}>
            <Typography
              variant="subtitle2"
              color="text.secondary"
              component="div"
            >
              Album: {props.data.album.name}
            </Typography>
          </a>
          <ReactAudioPlayer src={props.data.preview_url} controls />
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ height: "100%", maxHeight:"250px", maxWidth: "250px" }}
        image={props.data.album.images[0].url}
        alt="Live from space album cover"
      />
    </Card>
  );
};

export default TrackCard;
