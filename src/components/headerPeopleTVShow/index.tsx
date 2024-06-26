import React, { useState, useEffect, FC } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import Avatar from "@mui/material/Avatar";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CardHeader from "@mui/material/CardHeader";
import { PersonT } from "../../types/interfaces";

const styles = {
  root: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    padding: 1.5,
  },
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
};

const PeopleHeader: React.FC<PersonT> = (props) => {
  const favourites = localStorage.getItem("favourites");

  console.log(favourites);
  return (
    <Paper component="div" sx={styles.root}>
      <CardHeader
        avatar={
          props.favourite ? (
            <Avatar sx={styles.avatar}>
              <FavoriteIcon />
            </Avatar>
          ) : null
        }
      />

      <Typography variant="h4" component="h3">
        {"TV Shows starring   "}
        {props.name}
        <a href={props.profile_path}>
          <HomeIcon color="primary" fontSize="large" />
        </a>
      </Typography>
      <br></br>
    </Paper>
  );
};

export default PeopleHeader;
