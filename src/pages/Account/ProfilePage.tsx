import ProfileForm from "@components/Forms/ProfileForm";
import { Box, Breadcrumbs, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const ProfilePage = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link color="inherit" to="/account">
          Личный кабинет
        </Link>
        <Link color="inherit" to="/account/profile">
          Мой профиль
        </Link>
      </Breadcrumbs>
      <Typography variant="h5" component={"h1"}>
        Данные профиля
      </Typography>
      <ProfileForm />
    </Box>
  );
};

export default ProfilePage;
