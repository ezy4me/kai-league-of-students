import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import InputFileUpload from "../UI/InputFileUpload";

const ApplicationForm = () => {
  const [team, setTeam] = useState<string>("");
  const [direction, setDirection] = useState<string>("");
  const [uploadedFile, setUploadedFile] = useState<File>();

  const handleTeamSelectChange = (event: SelectChangeEvent) => {
    setTeam(event.target.value as string);
  };

  const handleDirectionSelectChange = (event: SelectChangeEvent) => {
    setDirection(event.target.value as string);
  };

  const handleFileChange = (file: File) => {
    setUploadedFile(file);
  };

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
        <CardContent>
          <FormControl fullWidth>
            <InputLabel id="simple-select-label">Направление</InputLabel>
            <Select
              labelId="select-label"
              id="select"
              value={direction}
              label="Направление"
              onChange={handleDirectionSelectChange}>
              <MenuItem value={"Направление 1"}>Направление 1</MenuItem>
              <MenuItem value={"Направление 2"}>Направление 2</MenuItem>
              <MenuItem value={"Направление 3"}>Направление 3</MenuItem>
            </Select>
          </FormControl>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="title"
            label="Название номера"
            name="title"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="timing"
            label="Время выступления"
            name="timing"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="contacts"
            label="Контактные данные"
            name="contacts"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="superviser"
            label="Руководитель/преподаватель номера"
            name="superviser"
          />
          <FormControl margin="normal" fullWidth>
            <InputLabel id="simple-select-label">Команда</InputLabel>
            <Select
              labelId="select-label"
              id="select"
              value={team}
              label="Команда"
              onChange={handleTeamSelectChange}>
              <MenuItem value={"Команда 1"}>Команда 1</MenuItem>
              <MenuItem value={"Команда 2"}>Команда 2</MenuItem>
              <MenuItem value={"Команда 3"}>Команда 3</MenuItem>
            </Select>
          </FormControl>
          <FormControl margin="normal" fullWidth>
            <FormLabel id="radio-buttons-group-label">
              Носитель фонограммы
            </FormLabel>
            <RadioGroup
              aria-labelledby="radio-buttons-group-label"
              defaultValue="Флеш-накопитель"
              name="radio-buttons-group">
              <FormControlLabel
                value="Флеш-накопитель"
                control={<Radio />}
                label="Флеш-накопитель"
              />
              <FormControlLabel
                value="Без звукового сопровождения"
                control={<Radio />}
                label="Без звукового сопровождения"
              />
            </RadioGroup>
          </FormControl>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            multiline
            id="techcondition"
            label="Технический райдер"
            name="techcondition"
          />
          <Typography my={2} variant="body1">
            Файл для отправки:
          </Typography>
          <Typography my={2} variant="body1">
            {uploadedFile ? uploadedFile.name : "..."}
          </Typography>
          <InputFileUpload onFileChange={handleFileChange} />
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

export default ApplicationForm;
