import React, { useState, useEffect, ChangeEvent } from 'react';
import useAuthStore from '@/store/authStore';
import useProfileStore from '@/store/profileStore';
import { IProfile } from '@/types';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from '@mui/material';
import InputFileUpload from '../UI/InputFileUpload';

const ProfileForm = () => {
  const user = useAuthStore((state) => state.user);

  const { institutes, profile, getUserProfile, updateUserProfile, getAllOrganisation } = useProfileStore((state) => ({
    profile: state.profile,
    institutes: state.institutes,
    getUserProfile: state.getUserProfile,
    updateUserProfile: state.updateUserProfile,
    getAllOrganisation: state.getAllOrganisation,
  }));

  useEffect(() => {
    if (user) {
      getUserProfile(user.userId);
      getAllOrganisation();
      if(profile) {
        setProfileFio(profile.profileFio)
        setBirthday(profile.birthday)
        setGender(profile.gender)
        setInstitute(profile?.educationOrganisationId?.toString() || '')
        setPhoneNumber(profile.phoneNumber)
        setTelegramLink(profile.telegramLink)
      }
    }
  }, [user]);

  const [uploadedFile, setUploadedFile] = useState<File>();
  const handleFileChange = (file: File) => {
    setUploadedFile(file);
  };

  const [gender, setGender] = useState<string>(profile?.gender || '');
  const handleGenderSelectChange = (event: SelectChangeEvent) => {
    setGender(event.target.value as string);
  };

  const [institute, setInstitute] = useState<string>('');
  const handleInstituteSelectChange = (event: SelectChangeEvent) => {
    setInstitute(event.target.value as string);
    console.log(institute);
    
  };

  const [profileFio, setProfileFio] = useState<string>(profile?.profileFio || '');
  const handleProfileFioChange = (e: ChangeEvent<HTMLInputElement>) => {
    setProfileFio(e.target.value);
  };

  const [phoneNumber, setPhoneNumber] = useState<string>(profile?.phoneNumber || '');
  const handlePhoneNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };

  const [telegramLink, setTelegramLink] = useState<string>(profile?.telegramLink || '');
  const handleTelegramLinkChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTelegramLink(e.target.value);
  };

  const [birthday, setBirthday] = useState<string>(profile?.telegramLink || '');
  const handleBirthdayChange = (e: ChangeEvent<HTMLInputElement>) => {
    setBirthday(e.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData: IProfile = {
      userId: user?.userId!,
      profileFio,
      phoneNumber,
      telegramLink,
      gender,
      birthday: new Date(birthday).toISOString().substring(0, 10),
      educationOrganisationId: parseInt(institute),
    };
    console.log(formData);
    
    await updateUserProfile(user?.userId!, formData);
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
          <InputFileUpload onFileChange={handleFileChange} />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="fio"
            label="ФИО"
            name="profileFio"
            value={profileFio}
            onChange={handleProfileFioChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="phone"
            label="Номер телефона"
            name="phoneNumber"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="telegram"
            label="Мой телеграм"
            name="telegramLink"
            value={telegramLink}
            onChange={handleTelegramLinkChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="birthday"
            label="Дата рождения"
            name="birthday"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            value={birthday}
            onChange={handleBirthdayChange}
          />
          <FormControl margin="normal" fullWidth>
            <InputLabel id="select-gender">Ваш пол</InputLabel>
            <Select
              labelId="select-gender"
              id="gender"
              label="Ваш пол"
              value={gender}
              onChange={handleGenderSelectChange}
            >
              <MenuItem value="Мужской">Мужской</MenuItem>
              <MenuItem value="Женский">Женский</MenuItem>
            </Select>
          </FormControl>
          <FormControl margin="normal" fullWidth>
            <InputLabel id="select-organisation">Ваша организация</InputLabel>
            <Select
              labelId="select-organisation"
              id="gender"
              label="Ваша организация"
              value={institute}
              onChange={handleInstituteSelectChange}
            >
              {institutes?.map((i) => (
                <MenuItem key={i.id} value={i.id}>
                  {i.fullNameOrganisation}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
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
