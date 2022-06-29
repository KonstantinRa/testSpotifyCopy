import { FormControl, Grid, IconButton, TextField } from "@mui/material";
import React, { ReactElement, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import { TracksResponse } from "../interfaces";

const SearchField = (props: any): ReactElement => {
  const [search, setSearch] = useState<string>("i'm beggin' you");

  const searchFormHandler = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const { data, status } = await axios.get<TracksResponse>(
        `https://api.spotify.com/v1/search?q=${search}&type=track`,
        {
          headers: {
            Accept: "application/json",
            Authorization:
              "Authorization: Bearer BQBsYipqD9v-o787cWlMPLZNOPLOeRmm0NEzBkumTmpYtKXQCDadT_H2jkpH42I5YqH6TBrC_4jd-vzP2LWhpEBbCPIDsvTVQng8KKTeepYnF15EORzvKWMU09FvyalcqB-gPziSumtRvHvp0CjVYj6Gtw2lgnTGYWmJBodg4n4MOYAX2DUeiOGSTE61JV0",
          },
        }
      );
      console.log(status);
      props.onSearchResults(data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log("error message: ", error.message);
        return error.message;
      } else {
        console.log("unexpected error: ", error);
        return "An unexpected error occurred";
      }
    }
  };

  return (
    <FormControl fullWidth sx={{mb:2}}>
      <form onSubmit={searchFormHandler}>
        <Grid container spacing={2}>
          <Grid item md={5}>
            <TextField
              fullWidth
              required
              onChange={(e) => setSearch(e.target.value)}
              name="search"
              label="Search field"
              size="small"
            />
          </Grid>
          <Grid item md={1}>
            <IconButton color="primary" aria-label="Search" type="submit">
              <SearchIcon />
            </IconButton>
          </Grid>
        </Grid>
      </form>
    </FormControl>
  );
};

export default SearchField;
