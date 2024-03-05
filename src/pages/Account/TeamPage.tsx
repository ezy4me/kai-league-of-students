import {
  Box,
  Breadcrumbs,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

const TeamPage = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link color="inherit" to="/account">
          Личный кабинет
        </Link>
        <Link color="inherit" to="/account/team">
          Моя команда
        </Link>
      </Breadcrumbs>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 2,
        }}>
        <Button
          type="submit"
          color="primary"
          variant="contained"
          sx={{ mt: 3, mb: 2 }}>
          Добавить
        </Button>
      </Box>
      <Grid2 container spacing={2}>
        <Grid2 xs={12} sm={12} md={3}>
          <Card>
            <CardMedia
              component="img"
              height="194"
              image="/public/images/account/main-1.png"
              alt="img"
            />
            <CardContent>
              <Typography my={1} variant="h5" component="div">
                "Орлы сибири"
              </Typography>
              <Divider />
              <Typography my={1} variant="body2" color="text.secondary">
                1. Иванов Иван Иванович
              </Typography>
              <Divider />

              <Typography my={1} variant="body2" color="text.secondary">
                2. Иванов Иван Иванович
              </Typography>
              <Divider />

              <Typography my={1} variant="body2" color="text.secondary">
                3. Иванов Иван Иванович
              </Typography>
              <Divider />

              <Typography my={1} variant="body2" color="text.secondary">
                4. Иванов Иван Иванович
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                fullWidth
                variant="contained"
                color="error"
                endIcon={<DeleteIcon />}>
                Удалить
              </Button>
            </CardActions>
          </Card>
        </Grid2>
      </Grid2>

      <Box
        sx={{
          width: "100%",
          height: "50vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          gap: 2,
        }}>
        <Typography textTransform={"uppercase"} variant="h5" component={"p"}>
          Список команд пуст
        </Typography>
      </Box>
    </Box>
  );
};

export default TeamPage;
