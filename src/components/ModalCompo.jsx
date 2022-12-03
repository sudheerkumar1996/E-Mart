import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { Avatar, IconButton, Typography } from "@material-ui/core";
import CustomizedSelects from "./DropDown";
export default function ModalCompo({
  selectedData,
  open,
  setOpen,
  onUpdateSelectedData,
}) {
  return (
    <div>
      <Dialog
        open={open}
        maxWidth={"md"}
        fullWidth
        onClose={() => setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Checkout"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {selectedData.map((row, index) => {
              return (
                <div
                  key={row.name + index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    border: "solid 1px black",
                    borderRadius: 8,
                    padding: 2,
                    marginBottom: 5,
                  }}
                >
                  <div
                    style={{
                      width: "40%",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Avatar src={`${row.imageUrl}`} />
                    <Typography style={{ paddingLeft: 2 }}>
                      {row.name}
                    </Typography>
                  </div>
                  <div style={{ width: "10%" }}>
                    <IconButton
                      size="small"
                      onClick={() => {
                        onUpdateSelectedData({
                          ...row,
                          status: false,
                        });
                      }}
                    >
                      <HighlightOffIcon />
                    </IconButton>
                  </div>
                  <div style={{ width: "20%" }}>
                    <CustomizedSelects
                      count={row.quantity}
                      setCount={(cnt) =>
                        onUpdateSelectedData({
                          ...row,
                          quantity: cnt,
                          total: cnt * Number(row.price),
                        })
                      }
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "30%",
                    }}
                  >
                    <Typography>Price: {row.price}</Typography>
                    <Typography> Total: {row.total}</Typography>
                  </div>
                </div>
              );
            })}
            <div style={{ textAlign: "end" }}>
              <Typography>
                Grand Total :{" "}
                {selectedData
                  .map((f) => f.total)
                  .reduce((t, acc) => t + acc, 0)}
              </Typography>
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="primary">
            Cancel
          </Button>
          <Button color="primary" autoFocus>
            Pay
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
