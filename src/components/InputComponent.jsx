import React from "react";
import TextField from "@material-ui/core/TextField";
export default function InputCompo({ handleChange, value }) {
  return (
    <TextField
      value={value||""}
      onChange={(e) => {
        handleChange(e.target.value);
      }}
      size="small"
      id="outlined-basic"
      label="Search Product"
      variant="outlined"
    />
  );
}
