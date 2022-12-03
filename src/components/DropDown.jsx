import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton, Typography } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function CustomizedSelects({ count, setCount }) {
  const classes = useStyles();
  return (
    <div
      style={{
        width: 80,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <IconButton
        onClick={() => {
          if (count <= 1) {
            return;
          }
          setCount(count - 1);
        }}
        size="small"
      >
        <ArrowBackIosIcon fontSize="24" />
      </IconButton>
      <Typography
        style={{
          textAlign: "center",
          padding: "2px",
        }}
      >
        {count}
      </Typography>
      <IconButton
        size="small"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </div>
  );
}
