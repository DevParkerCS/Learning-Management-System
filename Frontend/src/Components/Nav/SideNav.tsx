import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  Toolbar,
} from "@mui/material";

export const SideNav = () => {
  return (
    <Box>
      <List>
        <ListItem>
          <ListItemButton href="/dashboard">User</ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton href="/dashboard">Dashboard</ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton href="/dashboard">Courses</ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton href="/dashboard">Groups</ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton href="/dashboard">Calendar</ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton href="/dashboard">Inbox</ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};
