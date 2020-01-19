import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Grid, LinearProgress, Paper } from "@material-ui/core";
import TitleComponent from "../../../components/TitleComponent";
import Berry from "./Berry";
import SearchComponent from "../../../components/SearchComponent";

const BerryList = () => {
  const [searchText, setSearchText] = useState("");
  const { berryList, berryDetail } = useSelector(state => state.berrySlice);

  const handleOnChange = event => {
    setSearchText(event.target.value);
  };

  if (!berryList) {
    return <LinearProgress />;
  }

  const berryListFiltered = berryList.filter(
    berry => berry.name.indexOf(searchText) >= 0
  );

  return (
    <Grid container>
      <Grid item xs={12}>
        <TitleComponent title="Lista de Berries" />
      </Grid>
      <Grid item xs={12}>
        <Grid container justify="center" style={{ marginBottom: 16 }}>
          <Grid item xs={6}>
            <SearchComponent
              label="Buscar Berry"
              value={searchText}
              onChange={handleOnChange}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          {berryListFiltered.map(berry => (
            <Grid key={berry.name} item xs={12} md={4}>
              <Paper style={{ padding: 16 }}>
                <Berry berryName={berry.name} />
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default BerryList;
