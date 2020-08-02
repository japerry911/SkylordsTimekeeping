import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { useStyles } from "./DrawerStyles";

const MyDrawer = ({ open, onClose, setTitle }) => {
  const classes = useStyles();

  return (
    <Drawer variant="temporary" open={open} onClose={onClose}>
      <List>
        <ListItem
          button
          onClick={() => {
            setTitle("Home");
            onClose();
          }}
        >
          <ListItemText>Home</ListItemText>
        </ListItem>
        <ListItem
          button
          onClick={() => {
            setTitle("About");
            onClose();
          }}
        >
          <ListItemText>About</ListItemText>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default MyDrawer;
