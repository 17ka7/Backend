import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Alert } from '@mui/material';
import axios from 'axios';
import { Link } from 'react-router-dom';

const CreateNote = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/notes', { title, content });
      if (response.status === 201) {
        setMessage('Note created successfully!');
        setTitle('');
        setContent('');
      }
    } catch (error) {
      console.error('Error creating note:', error);
      setMessage('Error creating note');
    }
  };

  return (
    <Container style={{ backgroundColor: '#F0FFFF', padding: '20px', minHeight: '100vh' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <Typography variant="h4" component="h1">
          Create Note
        </Typography>
        <Button
          component={Link}
          to="/"
          variant="contained"
          color="primary"
          sx={{
            borderRadius: '10px', // Radius border untuk tombol
            color: '#FF1493', // Warna teks
            bgcolor: '#fff', // Warna latar belakang transparan
            '&:hover': {
              bgcolor: '#FF1493', // Warna latar belakang saat hover
              color: '#fff', // Warna teks saat hover
            },
          }}
        >
          Note List
        </Button>
      </div>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Title"
          variant="outlined"
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          margin="normal"
          sx={{ backgroundColor: '#FFFFFF', borderRadius: '5px', marginBottom: '1rem' }} // Gaya khusus untuk TextField title
        />
        <TextField
          label="Content"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          margin="normal"
          sx={{ backgroundColor: '#FFFFFF', borderRadius: '5px', marginBottom: '1rem' }} // Gaya khusus untuk TextField content
        />
        <Button type="submit" variant="contained" color="primary">
          Create Note
        </Button>
      </form>
      {message && <Alert severity="info" style={{ marginTop: '20px' }}>{message}</Alert>}
    </Container>
  );
};

export default CreateNote;
