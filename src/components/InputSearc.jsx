import {
  Grid,
  InputAdornment,
  Paper,
  TextField,
  IconButton,
} from "@mui/material";

//icons
import SearchIcon from "@mui/icons-material/Search";

export const InputSearc = ({ setSearch, search, getProducto }) => {

  return (
    <Grid item xs={12} md={12} lg={12} sm={12}>
      <Paper elevation={4} sx={{ backgroundColor: "#FEE600" }}>
        <Grid container justifyContent="center">
          <Grid xs={12} sm={12} lg={1} md={1}>
            <img src="./Logo_ML.png"  alt="Logo" style={{ marginTop: "10px" }} />
          </Grid>

          <Grid xs={12} sm={12} lg={8} md={6}>
            <TextField
              variant="outlined"
              sx={{ backgroundColor: "#FFFFFF" }}
              inputProps={{
                style: {
                  color: "#212E37",
                },
              }}
              fullWidth
              placeholder="Nunca dejes de Buscar..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <IconButton onClick={() => getProducto()}>
                      <SearchIcon
                        sx={{
                          color: "#000000",
                        }}
                      />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};
