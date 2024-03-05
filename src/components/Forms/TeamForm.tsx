import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  InputAdornment,
  FormControl,
  InputLabel,
  OutlinedInput,
  Typography,
  Stack,
  Divider,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import InputFileUpload from "../UI/InputFileUpload";

const TeamForm = () => {
  const [members, setMembers] = useState([{ id: 1, name: "" }]);
  const [uploadedFile, setUploadedFile] = useState<File>();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      name: data.get("name"),
      uploadedFile: uploadedFile,
    });
  };

  const addMemberField = () => {
    const newId = members.length + 1;
    setMembers([...members, { id: newId, name: "" }]);
  };

  const removeMemberField = (idToRemove: number) => {
    setMembers(members.filter((member) => member.id !== idToRemove));
  };

  const handleFileChange = (file: File) => {
    setUploadedFile(file);
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
          image={
            uploadedFile
              ? URL.createObjectURL(uploadedFile)
              : "/public/images/placeholder.jpg"
          }
          alt="img"
        />
        <CardContent>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <InputFileUpload onFileChange={handleFileChange} />
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}>
              <Typography variant="h6" component={"h3"}>
                Участники:
              </Typography>
              <IconButton onClick={addMemberField} aria-label="add">
                <AddCircleIcon fontSize="large" color="success" />
              </IconButton>
            </Stack>
            <Divider />
            {members.map((member) => (
              <FormControl key={member.id} variant="outlined" sx={{ m: 1 }}>
                <InputLabel htmlFor={`outlined-adornment-name-${member.id}`}>
                  Имя {member.id}
                </InputLabel>
                <OutlinedInput
                  id={`outlined-adornment-name-${member.id}`}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => removeMemberField(member.id)}
                        edge="end">
                        <DeleteIcon />
                      </IconButton>
                    </InputAdornment>
                  }
                  label={`Имя ${member.id}`}
                />
              </FormControl>
            ))}
          </Box>
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

export default TeamForm;
