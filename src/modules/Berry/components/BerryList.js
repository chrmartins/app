import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  Grid,
  LinearProgress,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from "@material-ui/core";
import TitleComponent from "../../../components/TitleComponent";
import Berry from "./Berry";
import SearchComponent from "../../../components/SearchComponent";

const FLAVOR_DEFAULT = "selecione";

const BerryList = () => {
  const [searchText, setSearchText] = useState("");
  const [flavors, setFlavors] = useState("");
  const [selectedFlavor, setSelectedFlavor] = useState(FLAVOR_DEFAULT);
  const { berryList, berryDetail } = useSelector(state => state.berrySlice);

  useEffect(() => {
    if (berryDetail["cheri"]) {
      setFlavors(berryDetail["cheri"].flavors.map(f => f.flavor.name));
    }
  }, [berryDetail]);

  // useEffect(() => {
  //   if (flavors) {
  //     setSelectedFlavor(flavors[0]);
  //   }
  // }, [flavors]);

  const handleOnChange = event => {
    setSearchText(event.target.value);
  };

  const handleOnChangeFlavor = event => {
    setSelectedFlavor(event.target.value);
  };

  if (!berryList) {
    return <LinearProgress />;
  }

  // Primeiro filtra por nome
  let berryListFiltered = berryList.filter(
    berry => berry.name.indexOf(searchText) >= 0
  );

  // Depois filtra por sabor
  berryListFiltered = berryListFiltered.filter(berry => {
    if (selectedFlavor !== FLAVOR_DEFAULT) {
      let flavorsPotency = {};
      berryDetail[berry.name].flavors.forEach(flavor => {
        flavorsPotency[flavor.flavor.name] = flavor.potency;
      });
      return flavorsPotency[selectedFlavor] > 0;
    }
    return true;
  });

  return (
    <Grid container>
      <Grid item xs={12}>
        <TitleComponent title="Lista de Berries" />
      </Grid>
      <Grid item xs={12}>
        <Grid
          container
          justify="center"
          spacing={2}
          style={{ marginBottom: 16 }}
        >
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel id="flavors">Filtrar por Sabores</InputLabel>
              {selectedFlavor ? (
                <Select
                  fullWidth
                  labelId="flavors"
                  value={selectedFlavor}
                  onChange={handleOnChangeFlavor}
                >
                  <MenuItem value={FLAVOR_DEFAULT}>Selecione...</MenuItem>
                  {flavors &&
                    flavors.map(flavor => (
                      <MenuItem key={flavor} value={flavor}>
                        {flavor}
                      </MenuItem>
                    ))}
                </Select>
              ) : (
                <LinearProgress />
              )}
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <SearchComponent
              label="Filtrar por nome"
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
