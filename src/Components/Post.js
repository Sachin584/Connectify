import React from 'react'
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import { Card, CardContent, Typography, CardActions, Button, Box } from '@mui/material';
import usr from "../assets/usr.jpg";
import PermMediaIcon from '@mui/icons-material/PermMedia';
import NewspaperIcon from '@mui/icons-material/Newspaper';

function Post() {
    // Rounded TextField component
  const RoundedTextField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
      borderRadius: '20px', // Apply rounded corners
    },
  });
    // Styled Card component with shadow and rounded corners
  const StyledCard = styled(Card)({
    backgroundColor: '#ffffff', // White background for the card
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Soft shadow for the card
    height: '140px'
  });

  return (
    <div>
        <StyledCard sx={{ minWidth: 676, padding: 1 }}>
        <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, marginBottom: 5 }}>
            <img
              src={usr} // Replace with the actual logo URL
              alt="User Logo"
              style={{
                width: 50,
                height: 50,
                borderRadius: '50%', // Make the image circular
              }}
            />
            <RoundedTextField
              variant="outlined"
              placeholder="Start a post, try writing with AI"
              sx={{ width: '100%' }}
            />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
            <Box sx={{display: 'flex', alignItems: 'center', gap: 1, marginTop: -3}}>
                <PermMediaIcon style={{ fontSize: 30, color: '#378FE9' }} />
                <Typography variant="body2">
                    Media
                </Typography>
            </Box>
            <Box sx={{display: 'flex', alignItems: 'center', gap: 1, marginTop: -3}}>
                <NewspaperIcon style={{fontSize: 30, color: '#378FE9'}}/>
                <Typography variant="body2">
                    Contribute expertise
                </Typography>
            </Box>
            <Box sx={{display: 'flex', alignItems: 'center', gap: 1, marginTop: -3}}>
                <NewspaperIcon style={{fontSize: 30, color: '#378FE9'}}/>
                <Typography variant="body2">
                    Write article
                </Typography>
            </Box>
          </Box>
        </CardContent>
        {/* <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions> */}
      </StyledCard>
    </div>
  )
}

export default Post