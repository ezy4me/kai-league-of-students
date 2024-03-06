import React, { ChangeEvent, useState } from 'react';
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
  TextField,
} from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import InputFileUpload from '../UI/InputFileUpload';
import useTeamStore from '@/store/teamStore';
import useAuthStore from '@/store/authStore';
import { ITeam } from '@/types';

interface TeamFormProps {
  callback: () => void;
}

const TeamForm = ({ callback }: TeamFormProps) => {
  const user = useAuthStore((state) => state.user);

  const { createUserTeam } = useTeamStore((state) => ({
    createUserTeam: state.createUserTeam,
  }));

  const [members, setMembers] = useState([{ id: 1, name: '' }]);
  const [uploadedFile, setUploadedFile] = useState<File>();

  const addMemberField = () => {
    const newId = members.length + 1;
    setMembers([...members, { id: newId, name: '' }]);
  };

  const removeMemberField = (idToRemove: number) => {
    setMembers(members.filter((member) => member.id !== idToRemove));
  };

  const handleFileChange = (file: File) => {
    setUploadedFile(file);
  };

  const [teamName, setTeamName] = useState<string>('');
  const handleTeamNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTeamName(e.target.value);
  };

  const handleMemberNameChange = (id: number, newName: string) => {
    setMembers(members.map((member) => (member.id === id ? { ...member, name: newName } : member)));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const memberNames = members.map((member) => member.name);
    data.append('teamName', teamName);

    if (uploadedFile) {
      data.append('teamAvatar', uploadedFile);
    }

    data.append('members', memberNames.join(','));

    const teamData: ITeam = {
      teamName: teamName,
      teamAvatar: uploadedFile!,
      fio: memberNames,
    };
    console.log(teamData);

    await createUserTeam(user?.userId!, teamData);

    callback();
  };

  return (
    <Box
      component="form"
      noValidate
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        width: 600,
      }}
    >
      <Card>
        <CardMedia
          component="img"
          height="250"
          image={uploadedFile ? URL.createObjectURL(uploadedFile) : '/public/images/placeholder.jpg'}
          alt="img"
        />
        <CardContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <InputFileUpload onFileChange={handleFileChange} />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="teamName"
              label="Название"
              name="teamName"
              onChange={handleTeamNameChange}
            />
            <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
              <Typography variant="h6" component={'h3'}>
                Участники:
              </Typography>
              <IconButton onClick={addMemberField} aria-label="add">
                <AddCircleIcon fontSize="large" color="success" />
              </IconButton>
            </Stack>
            <Divider />
            {members.map((member) => (
              <FormControl key={member.id} variant="outlined" sx={{ m: 1 }}>
                <InputLabel htmlFor={`outlined-adornment-name-${member.id}`}>Имя {member.id}</InputLabel>
                <OutlinedInput
                  onChange={(e) => handleMemberNameChange(member.id, e.target.value)}
                  id={`outlined-adornment-name-${member.id}`}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton onClick={() => removeMemberField(member.id)} edge="end">
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
