import React from 'react';
import {AppBar, IconButton, Toolbar, Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import {useNavigate} from 'react-router-dom'
import {MAIN_ROUTE} from "../routes/consts";



const Navbar = () => {

    const navigate = useNavigate()

    return (
        <AppBar position="fixed" style={{background: 'lightcoral'}}>
            <Toolbar variant="dense" >
                <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={() => navigate(MAIN_ROUTE)}>
                    <MenuIcon/>
                </IconButton>
                <Typography variant="h6" color="inherit" component="div">
                    Photo service
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;