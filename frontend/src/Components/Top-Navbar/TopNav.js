import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Box } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import WorkIcon from '@mui/icons-material/Work';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const TopNav = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                {/* Logo Icon */}
                <IconButton size="large" color="inherit" aria-label="Connectify logo">
                    <LinkedInIcon fontSize="large" />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, ml: 1 }}>
                    Connectify
                </Typography>

                {/* Navigation Icons */}
                <Box sx={{ display: 'flex', gap: 2 }}>
                    <IconButton size="large" color="inherit" aria-label="Home">
                        <HomeIcon />
                        <Typography variant="body2" sx={{ ml: 0.5 }}>Home</Typography>
                    </IconButton>

                    <IconButton size="large" color="inherit" aria-label="My Network">
                        <PeopleIcon />
                        <Typography variant="body2" sx={{ ml: 0.5 }}>My Network</Typography>
                    </IconButton>

                    <IconButton size="large" color="inherit" aria-label="Jobs">
                        <WorkIcon />
                        <Typography variant="body2" sx={{ ml: 0.5 }}>Jobs</Typography>
                    </IconButton>

                    <IconButton size="large" color="inherit" aria-label="Messaging">
                        <ChatIcon />
                        <Typography variant="body2" sx={{ ml: 0.5 }}>Messaging</Typography>
                    </IconButton>

                    <IconButton size="large" color="inherit" aria-label="Notifications">
                        <NotificationsIcon />
                        <Typography variant="body2" sx={{ ml: 0.5 }}>Notifications</Typography>
                    </IconButton>

                    <IconButton size="large" color="inherit" aria-label="Me">
                        <AccountCircleIcon />
                        <Typography variant="body2" sx={{ ml: 0.5 }}>Me</Typography>
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    );
};
