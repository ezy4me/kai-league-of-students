import * as React from "react";
import {
  Container,
  IconButton,
  Divider,
  List,
  Toolbar,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { MainNavLinks, SecondaryNavLinks } from "@components/Dashboard/NavList";
import { Stack } from "@mui/material";
import Drawer from "@components/Dashboard/Drawer";
import AppBar from "@components/Dashboard/AppBar";
import { Outlet } from "react-router-dom";

const AccountPage = () => {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar elevation={0} position="absolute" open={open}>
        <Toolbar
          sx={{
            pr: "24px",
            bgcolor: "#1e1d46",
            
          }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={{
              marginRight: "36px",
              ...(open && { display: "none" }),
            }}>
            <MenuIcon />
          </IconButton>
          <Stack direction={"row"} alignItems={"center"} spacing={1}>
            <img alt="header_logo" src="/public/images/logo.png" />
          </Stack>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            px: [1],
            bgcolor: "#1e1d46",
          }}>
          <IconButton color="inherit" onClick={toggleDrawer}>
            <ChevronLeftIcon />
          </IconButton>
        </Toolbar>
        <List component="nav">
          <MainNavLinks />
          <Divider sx={{ my: 1 }} />
          <SecondaryNavLinks />
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{
          backgroundColor: "#121212",

          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
        }}>
        <Toolbar />
        <Container maxWidth={false} sx={{ mt: 4, mb: 4 }}>
          <Outlet />
        </Container>
      </Box>
    </Box>
  );
};

export default AccountPage;
