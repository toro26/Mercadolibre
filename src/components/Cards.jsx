import { Typography, CardContent, CardMedia, Grid, Stack } from "@mui/material";
import { Box } from "@mui/system";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

export const Cards = ({ item, setProducto }) => {
  const navigate = useNavigate();
  const location = useLocation;
  const { title, thumbnail, price, address } = item;

  const next = () => {
    navigate(`/Producto/${title}`);
    setProducto(item);
    // <NavLink to={`/Producto/${title}`} state={{ location }} />;
  };

  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        spacing={0.5}
      >
        <Grid item xs={3} md={3} lg={3} sm={3} style={{ padding: "15px 10px" }}>
          <Box
            style={{ maxWidth: 345, padding: 10, backgroundColor: "#F2F2F2" }}
          >
            <CardMedia
              component="img"
              sx={{ width: "250", maxHeight: "250px" }}
              image={thumbnail}
              alt="IconFlag"
              onClick={() => next()}
            />
          </Box>
        </Grid>
        <Grid item xs={6} md={6} lg={6} sm={6}>
          <CardContent>
            <Typography variant="h3" color="#303030">
              ${price ? price : ""}
            </Typography>
            <Typography variant="subtitle1" color="#303030">
              Descripción: {title ? title : ""}
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={3} md={3} lg={3} sm={3} justifyContent="end">
          <Typography variant="subtitle1" color="#303030" textAlign="center">
            {address?.city_name}
          </Typography>
        </Grid>
      </Stack>
    </>
  );
};
