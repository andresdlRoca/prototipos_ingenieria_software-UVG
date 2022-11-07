import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Media from 'react-media';
import {
  FaInbox,
  FaShoppingBag,
  FaBookmark,
  FaBriefcase,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function NewBottomBar() {
  const pathname = window.location.pathname;
  const [value, setValue] = React.useState(pathname);

  return (
    <div>
      <Media query={'(min-width: 600px)'}>
        {(matches) => {
          return matches ? null : (
            <Box sx={{ pb: 5 }}>
              <Paper
                sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
                elevation={3}
              >
                <BottomNavigation
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                  sx={{
                    '& .MuiBottomNavigationAction-root, .Mui-selected, svg': {
                      color: '#225122',
                    },
                  }}
                >
                  {/* 
            https://stackoverflow.com/questions/67266495/how-can-i-hide-a-component-in-react-depending-on-the-screen-size

            https://mui.com/material-ui/react-bottom-navigation/#bottom-navigation

            
            */}

                  <BottomNavigationAction
                    label="Mensajes"
                    icon={<FaInbox />}
                    LinkComponent={Link}
                    to={'/bandeja-de-entrada'}
                    data-testid="hola"
                  />
                  <BottomNavigationAction
                    label="Guardados"
                    icon={<FaBookmark />}
                    LinkComponent={Link}
                    to={'/favorites'}
                  />
                  <BottomNavigationAction
                    label="Articulos"
                    icon={<FaBriefcase />}
                    LinkComponent={Link}
                    to={'/articulos-publicados'}
                  />
                  <BottomNavigationAction
                    label="Compras"
                    icon={<FaShoppingBag />}
                    LinkComponent={Link}
                    to={'/mis-compras'}
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
