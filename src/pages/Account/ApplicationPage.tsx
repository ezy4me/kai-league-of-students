import {
  Box,
  Breadcrumbs,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import BookmarkIcon from "@mui/icons-material/Bookmark";
const ApplicationPage = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link color="inherit" to="/account">
          Личный кабинет
        </Link>
        <Link color="inherit" to="/account/application">
          Мои заявки
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
        <Grid2>
          <Card>
            <CardContent>
              <Box
                my={2}
                sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <BookmarkIcon style={{ color: "yellow" }} />
                <Typography variant="h5" component="div">
                  Заявка №1
                </Typography>
              </Box>

              <Divider />
              <Typography my={1} variant="body2" color="text.secondary">
                Направление: "Танцевальное" - Народный танец (соло)
              </Typography>
              <Divider />
              <Typography my={1} variant="body2" color="text.secondary">
                Описание
              </Typography>
              <Divider />
              <Typography my={1} variant="body2" color="text.secondary">
                Время выступления: [3:00]
              </Typography>
              <Divider />
              <Typography my={1} variant="body2" color="text.secondary">
                Контакты: Иванов Иван Иванович, +7-(910)-000-00-00
              </Typography>
              <Divider />
              <Typography my={1} variant="body2" color="text.secondary">
                Технические особенности
              </Typography>
              <Divider />
              <Typography my={1} variant="body2" color="text.secondary">
                Реквизит: Флеш-накопитель (флеш-карта)
              </Typography>
              <Divider />
              <Typography textAlign={"end"} mt={1} variant="h6">
                23.04.24
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                fullWidth
                variant="contained"
                color="error"
                endIcon={<DeleteIcon />}>
                Отменить
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
          Список заявок пуст
        </Typography>
      </Box>
    </Box>
  );
};

export default ApplicationPage;
