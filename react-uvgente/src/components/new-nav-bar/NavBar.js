import React, { useState } from 'react';
import './nav-bar-style.css';
import logo from '../../media/newLogo.png';
import { Link } from 'react-router-dom';
import { FaFilter, FaSearch } from 'react-icons/fa';
import DefaultImageUser from '../../media/cat_pp.jpg';
import NewNavBarItem from './NewNavBarItem';
import Media from 'react-media';

const NavBar = () => {
  const [userLogged, setUserLogged] = useState(null);

  return (
    <>
      <Media query={'(min-width: 600px)'}>
        {(matches) => {
          return matches ? (
            <div id="main-container-nav-bar">
              <div id="dark-green-section">
                <Link to="/" id="logo-container">
                  <img src={logo} id="logo-in-navbar" alt="UVGente logo" />
                </Link>
                <div id="nav-bar-searcher-container">
                  <input
                    className="new-input"
                    id="nav-bar-input-search"
                    placeholder="Busca un producto o servicio de tutoria :p"
                  />
                  <button id="nav-bar-filtr-button" className="new-button">
                    <FaFilter />
                  </button>
                  <button id="nav-bar-search-button" className="new-button">
                    <FaSearch />
                  </button>
                </div>
                <div id="nav-bar-user-info">
                  <Link id="container-nav-bar-profile-pic" to="/profile">
                    <img
                      src={DefaultImageUser}
                      id="nav-bar-profile-pic"
                      alt="logo"
                    />
                  </Link>
                  {userLogged}
                  {!userLogged && (
                    <Link
                      className="subtitle-gray"
                      to="/login"
                      id="log-in-user-info-nav-bar"
                    >
                      Log in
                    </Link>
                  )}
                </div>
              </div>
              <ul id="light-green-section">
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
            </div>
          ) : null;
        }}
      </Media>
    </>
  );
};

export default NavBar;
