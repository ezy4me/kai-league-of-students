import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useAuthStore from "@/store/authStore";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { onRegistration, error } = useAuthStore((state) => ({
    onRegistration: state.onRegistration,
    error: state.error,
  }));

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await onRegistration({
      userEmail: email,
      userPassword: password,
    }).then((res) => {
      if (res?.status === 200) navigate("/account");
    });
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
        bgcolor: "#121212",
      }}>
      <Typography component="h1" variant="h4">
        Регистрация аккаунта
      </Typography>
      <Typography color={'red'} component="p" variant="body1">
        {error && error.message}
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
          onChange={handleEmailChange}
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
          onChange={handlePasswordChange}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}>
          Зарегистрироваться
        </Button>
      </Box>
    </Box>
  );
};

export default RegistrationForm;
