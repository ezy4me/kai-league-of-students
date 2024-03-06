import { Button, Card, CardActions, CardContent, CardMedia, Divider, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import useTeamStore from '@/store/teamStore';

interface TeamCardProps {
  team: any;
}

const TeamCard = ({ team }: TeamCardProps) => {
  const url = import.meta.env.VITE_PUBLIC_URL

  const { deleteUserTeam } = useTeamStore((state) => ({
    deleteUserTeam: state.deleteUserTeam,
  }));

  const onDelete = async (teamId: number) => {
    await deleteUserTeam(teamId);
  };

  return (
    <Card>
      <CardMedia component="img" height="200" image={url + team.teamAvatar} alt="img" />
      <CardContent>
        <Typography my={1} variant="h5" component="div">
          {team.teamName}
        </Typography>
        <Divider />
        {team.participant_teams.map((i: any, index: number) => (
          <Typography key={i.id} my={1} variant="body2" color="text.secondary">
            {index+1}. {i.participant.participantName}
          </Typography>
        ))}
        <Divider />
      </CardContent>
      <Divider />
      <CardActions>
        <Button onClick={() => onDelete(team.id)} fullWidth variant="contained" color="error" endIcon={<DeleteIcon />}>
          Удалить
        </Button>
      </CardActions>
    </Card>
  );
};

export default TeamCard;
