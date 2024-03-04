import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import LoginForm from "@/components/Auth/LoginForm";
import RegistrationForm from "@/components/Auth/RegistrationForm";
import { useState } from "react";
import { Box, Button } from "@mui/material";

export default function AuthPage() {
  const [isLoginForm, setIsLoginForm] = useState<boolean>(true);

  const switchCurrentForm = () => {
    setIsLoginForm(!isLoginForm);
  };

  return (
    <Grid container component="div" sx={{ height: "calc(100vh - 70px)" }}>
      <Grid
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: "url('/public/images/sign-in.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#141414",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            height: '100%',
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 4,
            bgcolor: "#121212",
          }}>
          {isLoginForm ? <LoginForm /> : <RegistrationForm />}
          <Button onClick={switchCurrentForm}>
            {isLoginForm ? "Регистрация" : "Авторизация"}
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}
