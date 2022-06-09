import { useState } from "react";
import axiosClient from "../config/AxiosClient";
import { Card, Grid } from "@mui/material";

//Components
import { InputSearc } from "./InputSearc";
import { Cards } from "./Cards";
import { Router } from "react-router-dom";

export const Home = ({ setProducto }) => {
  const [search, setSearch] = useState("");
  const [filterData, setFilterData] = useState([]);

  const getRandomArbitrary = (max) => {
    return Math.random() * max;
  };
  const getProducto = async () => {
    try {
      const { data } = await axiosClient.get(
        `https://api.mercadolibre.com/sites/MLA/search?q=${search}`
      );
      let max = data.results.length;
      setFilterData([
        data.results[Math.ceil(getRandomArbitrary(max))],
        data.results[Math.ceil(getRandomArbitrary(max))],
        data.results[Math.ceil(getRandomArbitrary(max))],
        data.results[Math.ceil(getRandomArbitrary(max))],
      ]);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Grid container>
        <Grid
          container
          spacing={2}
          justifyContent="space-between"
          sx={{ padding: "1em 3px 30px 5px" }}
        >
          <InputSearc
            setSearch={setSearch}
            search={search}
            getProducto={getProducto}
          />
        </Grid>
      </Grid>

      <Grid container justifyContent="center" alignContent="center" spacing={2}>
        <Grid item xs={9} md={9} lg={9} sm={9}>
          <Card sx={{ backgroundColor: " #FFFFFF " }} fullWidth elevation={5}>
            {filterData.map((i, index) => (
              <Cards item={i} key={index} setProducto={setProducto} />
            ))}
          </Card>
        </Grid>
      </Grid>
    </>
  );
};
