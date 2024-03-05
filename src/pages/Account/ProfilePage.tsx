import { Box, Breadcrumbs, Button, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const ProfilePage = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

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
      <Box
        component="form"
        noValidate
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          width: 600,
        }}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="surname"
          label="Фамилия"
          name="surname"
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="name"
          label="Имя"
          id="name"
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="lastname"
          label="Отчество"
          id="lastname"
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="phone"
          label="Номер телефона"
          id="phone"
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="telegram"
          label="Мой телеграм"
          id="telegram"
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Почта"
          name="email"
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="company"
          label="Образовательная организация"
          name="company"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}>
          Сохранить
        </Button>
      </Box>
    </Box>
  );
};

export default ProfilePage;
