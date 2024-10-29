import React from 'react'
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material'
import HailIcon from '@mui/icons-material/Hail';

export const TopNav = ()=>{
    return (
        <AppBar position='static'>
            <Toolbar>
            <IconButton size="large" color="inherit" aria-label='Connectify logo'>
                <HailIcon/>
            </IconButton>
            <Typography variant='h6' component='div'>
                Connectify
            </Typography>
            </Toolbar>
        </AppBar>
    )
}
