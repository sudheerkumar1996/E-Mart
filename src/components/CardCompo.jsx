import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CustomizedSelects from "../components/DropDown";
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 400,
  },
});

export default function CardCompo(props) {
  const { onBuyProduct } = props;
  const [count, setCount] = useState(1);
  const { row } = props;
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          title={row.name}
          image={`${row.imageUrl}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {row.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Price : {row.price}
          </Typography>
          {row.available === 0 && (
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              style={{ color: "red" }}
            >
              Out of Stock
            </Typography>
          )}
        </CardContent>
      </CardActionArea>
      {row.available === 1 && (
        <CardActions
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {row.status ? (
            <Button
              size="small"
              color="primary"
              style={{ color: "red" }}
              onClick={() => {
                onBuyProduct({
                  ...row,
                  status: false,
                  quantity: count,
                  total: 0,
                });
              }}
            >
              Remove
            </Button>
          ) : (
            <Button
              size="small"
              color="primary"
              onClick={() => {
                onBuyProduct({
                  ...row,
                  status: true,
                  quantity: count,
                  total: count * Number(row.price),
                });
              }}
            >
              Buy
            </Button>
          )}

          {!row.status && (
            <CustomizedSelects count={count} setCount={setCount} />
          )}
        </CardActions>
      )}
    </Card>
  );
}
