import {
  Box,
  Breadcrumbs,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Link } from "react-router-dom";

const MainPage = () => {
  const imageUrls = [
    "/public/images/account/main-1.png",
    "/public/images/account/main-2.png",
    "/public/images/account/main-3.png",
    "/public/images/account/main-4.png",
    "/public/images/account/main-5.png",
    "/public/images/account/main-6.png",
  ];

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link color="inherit" to="/account">
          Личный кабинет
        </Link>
      </Breadcrumbs>
      <Grid container component="div" spacing={2}>
        <Grid xs={12} sm={12} md={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              gap: 2,
            }}>
            <Typography variant="h4" component={"h1"}>
              СТУДВЕСНА
            </Typography>
            <Typography variant="h5" component={"p"}>
              Студенческая Весна Республики Татарстан берет своё историческое
              начало в 2011 году. Именно тогда был проведен первый в истории
              Татарстана региональный фестиваль, что положило начало ещё более
              бурному развитию творчества среди студентов. Республиканский этап
              фестиваля является подготовительным для формирования делегации на
              Российскую Студенческую Весну.
            </Typography>
          </Box>
        </Grid>
        <Grid xs={12} sm={12} md={6}>
          <ImageList variant="masonry" cols={3} gap={8}>
            {imageUrls.map((item) => (
              <ImageListItem key={item}>
                <img
                  srcSet={`${item}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item}?w=248&fit=crop&auto=format`}
                  alt={item}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MainPage;
