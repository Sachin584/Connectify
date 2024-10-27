import React from 'react';
import { Box } from '@mui/material';
import Post from './Post';
import Feed from './Feed';


function Home() {
  return (
    <Box
      sx={{
        backgroundColor: '#F5F5F5', 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        flexDirection: 'column',
        padding: 2,
        gap:3
      }}
    >
      <Post />
      <Feed />
    </Box>
  );
}

export default Home;
