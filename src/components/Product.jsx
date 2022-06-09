import {
  Typography,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  Box,
  Button,
  IconButton,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

export const Product = ({ producto }) => {
  const { title, thumbnail, price } = producto;

  const navigate = useNavigate();

  console.log(producto);
  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        spacing={0.5}
      >
        <Grid
          item
          xs={8}
          md={8}
          lg={8}
          sm={8}
          style={{ padding: "15px 0px 15px 0px" }}
        >
          <IconButton
            size="small"
            onClick={() => navigate(`/`)}
            aria-label="show more"
          >
            <ArrowBackIcon
              sx={{
                color: "#FFD763",
              }}
            />
            <Typography variant="h6" component="div" color="#000">
              Atrás
            </Typography>
          </IconButton>
          <Box style={{ padding: 10, backgroundColor: "#F2F2F2" }}>
            <CardMedia
              component="img"
              sx={{ width: "360px", maxHeight: "360px" }}
              image={thumbnail}
              alt="IconFlag"
            />
          </Box>
        </Grid>
        <Grid item xs={4} md={4} lg={4} sm={4} justifyContent="end">
          <Typography variant="subtitle1" color="#303030">
            {title ? title : ""}
          </Typography>
          <Typography variant="h4" color="#303030">
            ${price}
          </Typography>
          <Button style={{ color: "#ffff", background: "#5DADE2" }}>
            Comprar
          </Button>
        </Grid>
      </Stack>
      <Stack
        direction="column"
        justifyContent="space-evenly"
        alignItems="center"
        spacing={0.5}
      >
        <Grid item xs={12} md={12} lg={12} sm={12}>
          <CardContent>
            <Typography variant="subtitle1" color="#303030">
              Descripción: {title}
            </Typography>
          </CardContent>
        </Grid>
      </Stack>
    </>
  );
};
