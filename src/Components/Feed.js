import React from 'react';
import { Card, CardContent, Typography, CardActions, Button, Box, Avatar, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';

const posts = [
  {
    id: 1,
    user: {
      name: 'John Doe',
      title: 'Software Engineer at OpenAI',
      avatar: '/path/to/avatar1.jpg', // Update this path or import images
    },
    content: "Just completed a major project with my team! Feeling proud and grateful for everyone's hard work.",
    likes: 34,
    comments: 5,
    shares: 2,
  },
  {
    id: 2,
    user: {
      name: 'Jane Smith',
      title: 'Product Manager at TechCorp',
      avatar: '/path/to/avatar2.jpg',
    },
    content: 'Exciting updates coming soon! Stay tuned for what our team has been working on.',
    likes: 58,
    comments: 12,
    shares: 7,
  },
  // Add more sample posts here
];

const Feed = () => {
  return (
    <div>
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

const PostCard = ({ post }) => {
  const StyledCard = styled(Card)({
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
  });

  return (
    <StyledCard sx={{ minWidth: 576, padding: 2 }}>
      <CardContent>
        {/* User Info */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, marginBottom: 2 }}>
          <Avatar src={post.user.avatar} alt={post.user.name} sx={{ width: 50, height: 50 }} />
          <Box>
            <Typography variant="body1" fontWeight="bold">
              {post.user.name}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {post.user.title}
            </Typography>
          </Box>
        </Box>
        
        {/* Post Content */}
        <Typography variant="body2" color="textPrimary" sx={{ marginBottom: 2 }}>
          {post.content}
        </Typography>
        
        <Divider />

        {/* Action Icons */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', padding: 1, marginTop: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <ThumbUpAltIcon style={{ fontSize: 24, color: '#378FE9' }} />
            <Typography variant="body2">{post.likes} Likes</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <ChatBubbleOutlineIcon style={{ fontSize: 24, color: '#378FE9' }} />
            <Typography variant="body2">{post.comments} Comments</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <ShareIcon style={{ fontSize: 24, color: '#378FE9' }} />
            <Typography variant="body2">{post.shares} Shares</Typography>
          </Box>
        </Box>
      </CardContent>
    </StyledCard>
  );
};

export default Feed;
