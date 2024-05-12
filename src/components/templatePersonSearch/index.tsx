import React from "react";
import Header from "../headerPeopleSearch";
import Grid from "@mui/material/Grid";
import SearchPerson from "../searchPerson";

const styles = {
  root: {
    backgroundColor: "#f5f5f5",
  },
};

interface TemplatePersonSearchProps {
  children: React.ReactElement;
}
const PersonSearchPageTemplate: React.FC<TemplatePersonSearchProps> = () => {
  return (
    <Grid container sx={styles.root}>
      <Grid item xs={12}>
        <Header />
      </Grid>

      <SearchPerson></SearchPerson>
    </Grid>
  );
};
export default PersonSearchPageTemplate;
