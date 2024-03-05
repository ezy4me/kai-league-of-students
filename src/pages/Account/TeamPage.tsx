import {
  Box,
  Breadcrumbs,
  Button,
  Modal,
  Stack,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { useState } from "react";
import { ModalStyle } from "@components/Modal/Modal";

import TeamCard from "@components/Cards/TeamCard";
import TeamForm from "@components/Forms/TeamForm";

const TeamPage = () => {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
          onClick={handleOpen}
          type="submit"
          color="primary"
          variant="contained"
          sx={{ mt: 3, mb: 2 }}>
          Добавить
        </Button>
      </Box>
      <Grid2 container spacing={2}>
        <Grid2 xs={12} sm={12} md={3}>
          <TeamCard />
        </Grid2>
        <Grid2 xs={12} sm={12} md={3}>
          <TeamCard />
        </Grid2>
        <Grid2 xs={12} sm={12} md={3}>
          <TeamCard />
        </Grid2>
      </Grid2>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={ModalStyle}>
          <Stack
            direction={"column"}
            alignItems={"center"}
            justifyContent={"center"}>
            <Typography
              mb={4}
              id="modal-modal-title"
              variant="h5"
              component="h2">
              Добавление команды
            </Typography>
            <TeamForm />
          </Stack>
        </Box>
      </Modal>
    </Box>
  );
};

export default TeamPage;
