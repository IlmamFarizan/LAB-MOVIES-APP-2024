import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import { MovieT } from "../../types/interfaces";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Avatar from "@mui/material/Avatar";

const styles = {
  root: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    padding: 1.5,
  },
};

const MovieHeader: React.FC<MovieT> = (props) => {
  return (
    <Paper component="div" sx={styles.root}>
      {props.favourite && (
        <Avatar sx={{ backgroundColor: "rgb(255, 0, 0)" }}>
          <FavoriteIcon />
        </Avatar>
      )}

      <Typography variant="h4" component="h3">
        {props.title}
        {"   "}
        <a href={props.homepage}>
          <HomeIcon color="primary" fontSize="large" />
        </a>
        <br />
        <span>{`${props.tagline}`} </span>
      </Typography>
    </Paper>
  );
};

export default MovieHeader;
