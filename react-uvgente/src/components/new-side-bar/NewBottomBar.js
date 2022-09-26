import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Media from 'react-media';
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
    <div>
      <Media query={'(min-width: 600px)'}>
        {(matches) => {
          return matches ? null : (
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
                  {/* 
            https://stackoverflow.com/questions/67266495/how-can-i-hide-a-component-in-react-depending-on-the-screen-size

            https://mui.com/material-ui/react-bottom-navigation/#bottom-navigation

            
            */}
                  <BottomNavigationAction label="Mensajes" icon={<FaInbox />} />
                  <BottomNavigationAction
                    label="Guardados"
                    icon={<FaBookmark />}
                  />
                  <BottomNavigationAction
                    label="Mis articulos"
                    icon={<FaBriefcase />}
                  />
                  <BottomNavigationAction
                    label="Mis compras"
                    icon={<FaShoppingBag />}
                  />
                </BottomNavigation>
              </Paper>
            </Box>
          );
        }}
      </Media>
    </div>
  );
}
