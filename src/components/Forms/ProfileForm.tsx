import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  TextField,
} from "@mui/material";

const ProfileForm = () => {
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
      component="form"
      noValidate
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        width: 600,
      }}>
      <Card>
        <CardMedia
          component="img"
          height="250"
          image="/public/images/placeholder.jpg"
          alt="img"
        />
        <CardContent>
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
        </CardContent>
        <Divider />
        <CardActions>
          <Button type="submit" fullWidth variant="contained">
            Сохранить
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default ProfileForm;
