import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { ReactComponent as Logo } from "../Assests/Logo.svg";
import ModalCompo from "./ModalCompo";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: "black",
  },
  backGrd: {
    backgroundColor: "white",
  },
  btn: {
    color: "black",
  },
}));

export default function NavCompo(props) {
  let [open, setOpen] = React.useState(false);
  const { selectedData } = props;
  const classes = useStyles();
  const onUpdateSelectedData = (row) => {
    console.log("fjgjhdg887687", row);
    props.updateProduct(
      selectedData.map((item) => (item.id === row.id ? { ...row } : item))
    );
  };
  const bought = selectedData.filter((f) => f.status).length;
  return (
    <>
      <div className={classes.root}>
        <AppBar className={classes.backGrd} position="fixed" elevation={0}>
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <Logo />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              E-Mart
            </Typography>
            {bought > 0 && (
              <Button
                onClick={() => setOpen(true)}
                color="inherit"
                className={classes.btn}
              >
                {`Checkout (${bought})`}
              </Button>
            )}
          </Toolbar>
        </AppBar>
      </div>
      <div>
        <ModalCompo
          open={open}
          setOpen={setOpen}
          selectedData={selectedData.filter((f) => f.status)}
          onUpdateSelectedData={onUpdateSelectedData}
        />
      </div>
    </>
  );
}
