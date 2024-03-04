import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";

const LoginForm = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Box
      sx={{
        width: '100%',
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
        bgcolor: "#121212",
      }}>
      <Avatar sx={{ m: 1, bgcolor: "primary.main", width: 128, height: 128 }}>
        <LockOutlinedIcon style={{ width: 64, height: 64 }} />
      </Avatar>
      <Typography component="h1" variant="h4">
        Вход в личный кабинет
      </Typography>
      <Box
        component="form"
        noValidate
        onSubmit={handleSubmit}
        sx={{
          mt: 1,
          display: "flex",
          flexDirection: "column",
          gap: 2,
          width: "50%",
        }}>
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
          name="password"
          label="Пароль"
          type="password"
          id="password"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}>
          Войти
        </Button>
      </Box>
    </Box>
  );
};

export default LoginForm;
