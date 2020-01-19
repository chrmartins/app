import React from "react";
import {
  FormControl,
  InputAdornment,
  InputLabel,
  Input
} from "@material-ui/core";
import { Search } from "@material-ui/icons";

const SearchComponent = ({ label, value, onChange }) => {
  return (
    <FormControl fullWidth>
      <InputLabel variant="standard" htmlFor="search">
        {label}
      </InputLabel>
      <Input
        id="search"
        fullWidth
        value={value}
        onChange={onChange}
        endAdornment={
          <InputAdornment position="end">
            <Search />
          </InputAdornment>
        }
      />
    </FormControl>
  );
};

export default SearchComponent;
