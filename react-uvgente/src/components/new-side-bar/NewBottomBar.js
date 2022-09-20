import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import {
  FaInbox,
  FaCog,
  FaQuestion,
  FaExclamationTriangle,
  FaShoppingBag,
  FaBookmark,
  FaBriefcase,
} from 'react-icons/fa';

export default function NewBottomBar() {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);

  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <Paper
        sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          {/* TODO: ARREGLAR LA BARRA Y QUITAR LA OTRA CON MEDIA QUERY O UN hook:
            
            https://stackoverflow.com/questions/67266495/how-can-i-hide-a-component-in-react-depending-on-the-screen-size

            https://mui.com/material-ui/react-bottom-navigation/#bottom-navigation

            
            */}
          <BottomNavigationAction label="Recents" icon={<FaInbox />} />
          <BottomNavigationAction label="Favorites" icon={<FaBookmark />} />
          <BottomNavigationAction label="Archive" icon={<FaBriefcase />} />
          <BottomNavigationAction label="Articulos" icon={<FaShoppingBag />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
