import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { MenuItems } from './MenuItems';
import { AppBar, Toolbar, Typography, makeStyles, Button, IconButton, Drawer, Link, MenuItem } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles(() => ({
    header: {
      backgroundColor: "#ffc5cd",
      paddingRight: "79px",
      paddingLeft: "118px",
      "@media (max-width: 900px)": {
        paddingLeft: 0
      },
    },
    logo: {
      fontFamily: "Open Sans, sans-serif",
      fontWeight: 600, 
      color: "#f8f8ff",
      textAlign: "left",
    },
    menuButton: {
      fontFamily: "Open Sans, sans-serif",
      fontWeight: 700,
      size: "18px",
      marginLeft: "38px"
    },
    toolbar: {
      display: "flex",
      justifyContent: "space-between",
      color: "#f8f8ff",
      fontWeight: "bolder"
    },
    drawerContainer: {
      padding: "20px 30px"
    },
    menuItem: {
    //    fontWeight: "bold",
       color: "#000000",
       fontFamily: "Open Sans, sans-serif",
       fontWeight: 700,
       fontSize: 16
    }
  }));

export default function Header() {
    const { header, logo, menuButton, toolbar, drawerContainer, menuItem } = useStyles();
  
    const [state, setState] = useState({mobileView: false, drawerOpen: false});
    const { mobileView, drawerOpen } = state;
  
    useEffect(() => {
      const setResponsiveness = () => {
        return window.innerWidth < 900
          ? setState((prevState) => ({ ...prevState, mobileView: true }))
          : setState((prevState) => ({ ...prevState, mobileView: false }));
      };
      setResponsiveness();
      window.addEventListener("resize", () => setResponsiveness());
    }, []);
  
    const displayDesktop = () => {
      return (
        <Toolbar className={toolbar}>
          {yumfullnessLogo}
          <div>{getMenuButtons()}</div>
        </Toolbar>
      );
    };
  
    const displayMobile = () => {
      const handleDrawerOpen = () => setState((prevState) => ({ ...prevState, drawerOpen: true }));
      const handleDrawerClose = () => setState((prevState) => ({ ...prevState, drawerOpen: false }));
  
      return (
        <Toolbar>
          <IconButton
            {...{
              edge: "start",
              color: "inherit",
              "aria-label": "menu",
              "aria-haspopup": "true",
              onClick: handleDrawerOpen,
            }}
          >
            <MenuIcon />
          </IconButton>
  
          <Drawer
            {...{
              anchor: "left",
              open: drawerOpen,
              onClose: handleDrawerClose,
            }}
          >
            <div className={drawerContainer}>{getDrawerChoices()}</div>
          </Drawer>
  
          <div>{yumfullnessLogo}</div>
        </Toolbar>
      );
    };
  
    const getDrawerChoices = () => {
      return MenuItems.map(({ label, url }) => {
        return (
          <Link href={url}
            {...{
            //   component: RouterLink,
              to: url,
              color: "inherit",
              style: { textDecoration: "none" },
              key: label
            }}
          >
            <MenuItem className={menuItem}>{label}</MenuItem>
          </Link>
        );
      });
    };
  
    const yumfullnessLogo = (
      <Typography variant="h6" component="h1" className={logo}>
        @Yumfullness
      </Typography>
    );
  
    const getMenuButtons = () => {
      return MenuItems.map(({ label, url }) => {
        return (
          <Button href={url}
            {...{
              key: label,
              color: "inherit",
              to: url,
            //   component: RouterLink,
              className: menuButton
            }}
          >
            {label}
          </Button>
        );
      });
    };
  
    return (
      <header>
        <AppBar className={header}>
          { mobileView ? displayMobile() : displayDesktop() }
        </AppBar>
      </header>
    );
}