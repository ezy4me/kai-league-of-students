import React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Link } from "react-router-dom";

interface NavLinkProps {
  to: string;
  icon: React.ReactNode;
  primary: string;
}

const MainNavLinks = () => {
  return (
    <>
      <NavLink to="/account/" icon={<DashboardIcon />} primary="Главная" />
      <NavLink to="/account/profile" icon={<AccountCircleIcon />} primary="Мой профиль" />
    </>
  );
};

const SecondaryNavLinks = () => {
  return (
    <ListItemButton>
      <ListItemIcon>
        <ExitToAppIcon color="error" />
      </ListItemIcon>
      <ListItemText primary="Выход" />
    </ListItemButton>
  );
};

const NavLink = ({ to, icon, primary }: NavLinkProps) => {
  return (
    <ListItemButton component={Link} to={to}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={primary} />
    </ListItemButton>
  );
};

export { MainNavLinks, SecondaryNavLinks };
