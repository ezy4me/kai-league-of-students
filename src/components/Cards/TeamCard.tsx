import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const TeamCard = () => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="200"
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
      <Divider />
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
  );
};

export default TeamCard;
