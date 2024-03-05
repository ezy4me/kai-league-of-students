import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import BookmarkIcon from "@mui/icons-material/Bookmark";
const ApplicationCard = () => {
  return (
    <Card>
      <CardContent>
        <Box my={2} sx={{ display: "flex", alignItems: "center", gap: 2 }}>
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
      <Divider />
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
  );
};

export default ApplicationCard;
