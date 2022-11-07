import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Media from 'react-media';
import { Link } from 'react-router-dom';
import { AiOutlineBars } from 'react-icons/ai';
import logo from '../../media/newLogo.png';
import NewNavBarItem from './NewNavBarItem';
import './nav-bar-style.css';

const pages = ['Ayuda', 'Reportar problema', 'Ajustes'];
const settings = ['Mi perfil', 'Cerrar sesion'];

const MobileNavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <Media query={'(min-width: 600px)'}>
        {(matches) => {
          return matches ? null : (
            <>
              <AppBar position="static" style={{ background: '#112c11' }}>
                <Container maxWidth="xl">
                  <Toolbar disableGutters>
                    <Box
                      sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                      <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        id="OpenNav"
                        data-testid="OpenNav"
                        color="inherit"
                      >
                        <AiOutlineBars />
                      </IconButton>
                      <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                          vertical: 'bottom',
                          horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                          vertical: 'top',
                          horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                          display: { xs: 'block', md: 'none' },
                        }}
                      >
                        {pages.map((page) => (
                          <MenuItem key={page} onClick={handleCloseNavMenu}>
                            <Typography textAlign="center">{page}</Typography>
                          </MenuItem>
                        ))}
                      </Menu>
                    </Box>

                    <Box
                      sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}
                    >
                      {pages.map((page) => (
                        <Button
                          key={page}
                          onClick={handleCloseNavMenu}
                          data-testid={page}
                          sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                          {page}
                        </Button>
                      ))}
                    </Box>

                    <Box
                      component={Link}
                      to={'/'}
                      sx={{
                        flexGrow: 1,
                      }}
                    >
                      <img src={logo} alt="alt"></img>
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                      <Tooltip title="Open settings">
                        <IconButton
                          data-testid="OpenMenu"
                          onClick={handleOpenUserMenu}
                          sx={{ p: 0 }}
                        >
                          <Avatar
                            alt="Remy Sharp"
                            src="/static/images/avatar/2.jpg"
                          />
                        </IconButton>
                      </Tooltip>
                      <Menu
                        sx={{ mt: '45px' }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                          vertical: 'top',
                          horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                          vertical: 'top',
                          horizontal: 'right',
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                      >
                        {settings.map((setting) => (
                          <MenuItem
                            key={setting}
                            onClick={handleCloseUserMenu}
                            data-testid={setting}
                          >
                            <Typography textAlign="center">
                              {setting}
                            </Typography>
                          </MenuItem>
                        ))}
                      </Menu>
                    </Box>
                  </Toolbar>
                </Container>
              </AppBar>
              {/* <div id="main-container-nav-bar">
                <ul id="light-green-section" className="responsive-fix">
                  <NewNavBarItem
                    TypeOfItem="Link"
                    text="Vender" 
                    PageReference="/vender"
                  />
                  <NewNavBarItem
                    TypeOfItem="Link"
                    text="Comprar"
                    PageReference="/ventas"
                  />
                  <NewNavBarItem
                    TypeOfItem="Link"
                    text="Lo mas vendido"
                    PageReference="/top-ventas"
                  />
                  <NewNavBarItem
                    TypeOfItem="Link"
                    text="Servicios"
                    PageReference="/servicios"
                  />
                  <NewNavBarItem
                    TypeOfItem="Link"
                    text="Top Servicios"
                    PageReference="/top-servicios"
                  />
                </ul>
              </div> */}
            </>
          );
        }}
      </Media>
    </>
  );
};
export default MobileNavBar;
