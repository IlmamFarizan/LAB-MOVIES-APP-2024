import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
//import { useNavigate } from "react-router-dom";
//import { useTheme } from "@mui/material/styles";
import AccountCircle from "@mui/icons-material/AccountCircle";
//import useMediaQuery from "@mui/material/useMediaQuery";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Switch from "@mui/material/Switch";

const styles = {
  title: {
    flexGrow: 1,
  },
  appbar: {
    // background: 'none',
  },
  // offset: theme.mixins.toolbar,
};

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

const SiteHeader: React.FC = () => {
  const [anchorElM1, setAnchorElM1] = useState<HTMLButtonElement | null>(null);
  const open1 = Boolean(anchorElM1);
  const [anchorElM2, setAnchorElM2] = useState<HTMLButtonElement | null>(null);
  const open2 = Boolean(anchorElM2);

  const [anchorElTVShows, setAnchorElTVShows] =
    useState<HTMLButtonElement | null>(null);
  const openTVShows = Boolean(anchorElTVShows);

  const [anchorElPeople, setAnchorElPeople] =
    useState<HTMLButtonElement | null>(null);
  const openPeople = Boolean(anchorElPeople);

  const [anchorElIcon, setAnchorElIcon] = React.useState<null | HTMLElement>(
    null
  );

  const [auth, setAuth] = React.useState(true);
  const handleClickM1 = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElM1(event.currentTarget);
  };
  const handleCloseM1 = () => {
    setAnchorElM1(null);
  };

  const handleClickM2 = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElM2(event.currentTarget);
  };
  const handleCloseM2 = () => {
    setAnchorElM2(null);
  };

  const handleClickTVShows = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElTVShows(event.currentTarget);
  };
  const handleCloseTVShows = () => {
    setAnchorElTVShows(null);
  };

  const handleClickPeople = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElPeople(event.currentTarget);
  };
  const handleClosePeople = () => {
    setAnchorElPeople(null);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElIcon(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorElIcon(null);
  };

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <AppBar
          sx={styles.appbar}
          position="fixed"
          elevation={10}
          color="primary"
        >
          <Box sx={{ flexGrow: 1 }}>
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                TMDB Client
              </Typography>

              <Typography variant="body1" sx={styles.title}></Typography>
              <Typography variant="h6" sx={styles.title}>
                Welcome
              </Typography>
              <div>
                <Button
                  id="basic-button"
                  aria-controls={open1 ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open1 ? "true" : undefined}
                  onClick={handleClickM1}
                >
                  Movies
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorElM1}
                  open={open1}
                  onClose={handleCloseM1}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem onClick={handleCloseM1}>
                    <NavLink
                      to="/"
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      HOME
                    </NavLink>
                  </MenuItem>
                  <MenuItem onClick={handleCloseM1}>
                    <NavLink
                      to="/movies/upcoming"
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      UPCOMING
                    </NavLink>
                  </MenuItem>
                  <MenuItem onClick={handleCloseM1}>
                    <NavLink
                      to="/movies/favourites"
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      FAVOURITE
                    </NavLink>
                  </MenuItem>
                  <MenuItem onClick={handleCloseM2}>
                    <NavLink
                      to="/movies/playlist"
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      PLAYLIST
                    </NavLink>
                  </MenuItem>
                  <MenuItem onClick={handleCloseM1}>
                    <NavLink
                      to="/movies/search"
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      SEARCH
                    </NavLink>
                  </MenuItem>
                </Menu>
              </div>

              <div>
                <Button
                  id="tv-button"
                  aria-controls={openTVShows ? "tv-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={openTVShows ? "true" : undefined}
                  onClick={handleClickTVShows}
                >
                  TV Shows
                </Button>

                <Menu
                  id="tv-menu"
                  anchorEl={anchorElTVShows}
                  open={openTVShows}
                  onClose={handleCloseTVShows}
                  MenuListProps={{
                    "aria-labelledby": "tv-button",
                  }}
                >
                  <MenuItem onClick={handleCloseTVShows}>
                    <NavLink
                      to="/tvshows/"
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      HOME
                    </NavLink>
                  </MenuItem>
                  <MenuItem onClick={handleCloseTVShows}>
                    <NavLink
                      to="/tvshows/today"
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      LATEST
                    </NavLink>
                  </MenuItem>
                  <MenuItem onClick={handleCloseTVShows}>
                    <NavLink
                      to="/tvshows/favourites/"
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      FAVOURITE
                    </NavLink>
                  </MenuItem>
                  <MenuItem onClick={handleCloseTVShows}>
                    <NavLink
                      to="/tvshows/search/"
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      SEARCH
                    </NavLink>
                  </MenuItem>
                </Menu>
              </div>

              <div>
                <Button
                  id="people-button"
                  aria-controls={openPeople ? "people-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={openPeople ? "true" : undefined}
                  onClick={handleClickPeople}
                >
                  People
                </Button>

                <Menu
                  id="people-menu"
                  anchorEl={anchorElPeople}
                  open={openPeople}
                  onClose={handleClosePeople}
                  MenuListProps={{
                    "aria-labelledby": "people-button",
                  }}
                >
                  <MenuItem onClick={handleClosePeople}>
                    <NavLink
                      to="/people"
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      ACTORS
                    </NavLink>
                  </MenuItem>
                  <MenuItem onClick={handleClosePeople}>
                    <NavLink
                      to="/people/favourites"
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      FAVOURITE
                    </NavLink>
                  </MenuItem>
                  <MenuItem onClick={handleClosePeople}>
                    <NavLink
                      to="/people/search"
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      SEARCH
                    </NavLink>
                  </MenuItem>
                </Menu>
              </div>
            </Toolbar>
          </Box>
        </AppBar>
        <Offset />
      </ThemeProvider>
    </>
  );
};

export default SiteHeader;
