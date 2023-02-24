import React from 'react';
import {AppBar, Box, Button, IconButton, Toolbar, Typography} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const NavBar = () => {
    return (
        <AppBar position="static">
            <Toolbar sx={{display: "flex"}}>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <MenuIcon/>
                </IconButton>
                <Typography
                    variant="h6"
                    sx={{flexGrow: 1}}>
                    Image parser
                </Typography>
                <Box sx={{display: "flex"}}>
                    <Button color="inherit" variant="outlined">
                        Login
                    </Button>
                    <Button color="secondary" variant="contained" sx={{ml: 2}}>
                        SignIn
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;