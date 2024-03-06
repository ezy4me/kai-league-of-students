import { Box, Breadcrumbs, Button, CircularProgress, Modal, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { useEffect, useState } from 'react';
import { ModalStyle } from '@components/Modal/Modal';

import TeamCard from '@components/Cards/TeamCard';
import TeamForm from '@components/Forms/TeamForm';
import useTeamStore from '@/store/teamStore';
import useAuthStore from '@/store/authStore';

const TeamPage = () => {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const user = useAuthStore((state) => state.user);

  const { teams, getUserTeams } = useTeamStore((state) => ({
    teams: state.teams,
    getUserTeams: state.getUserTeams,
  }));

  const fetchData = async () => {
    if (user) await getUserTeams(user.userId);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Проверка на загрузку данных
  if (!teams) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
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
          display: 'flex',
          flexDirection: 'row',
          gap: 2,
        }}
      >
        <Button onClick={handleOpen} type="submit" color="primary" variant="contained" sx={{ mt: 3, mb: 2 }}>
          Добавить
        </Button>
      </Box>
      <Grid2 container spacing={2}>
        {teams.map((i: any) => (
          <Grid2 key={i.id} xs={12} sm={12} md={3}>
            <TeamCard key={i.id} team={i}/>
          </Grid2>
        ))}
      </Grid2>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={ModalStyle}>
          <Stack direction={'column'} alignItems={'center'} justifyContent={'center'}>
            <Typography mb={4} id="modal-modal-title" variant="h5" component="h2">
              Добавление команды
            </Typography>
            <TeamForm callback={fetchData}/>
          </Stack>
        </Box>
      </Modal>
    </Box>
  );
};

export default TeamPage;
