import React from "react";
import Header from "../headerTVShowSearch";
import Grid from "@mui/material/Grid";
import SearchTVShows from "../searchTVShows";

const styles = {
  root: {
    backgroundColor: "#f5f5f5",
  },
};

interface TemplateTVShowSearchProps {
  children: React.ReactElement;
}
const TVShowSearchPageTemplate: React.FC<TemplateTVShowSearchProps> = () => {
  return (
    <Grid container sx={styles.root}>
      <Grid item xs={12}>
        <Header />
      </Grid>

      <SearchTVShows></SearchTVShows>
    </Grid>
  );
};
export default TVShowSearchPageTemplate;
