import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Typography, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create'; // Menggunakan CreateIcon untuk merepresentasikan pena

const NoteList = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await fetch('http://localhost:4000/notes');
        if (!response.ok) {
          throw new Error('Failed to fetch notes');
        }
        const data = await response.json();
        setNotes(data);
      } catch (error) {
        console.error('Error fetching notes:', error);
      }
    };

    fetchNotes();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:4000/notes/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        setNotes(notes.filter((note) => note.id !== id));
      } else {
        throw new Error('Failed to delete note');
      }
    } catch (error) {
      console.error('Error deleting note:', error);
    }
  };

  return (
    <div style={{ backgroundColor: '#AFEEEE', padding: '20px', minHeight: '100vh' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <Typography variant="h4" gutterBottom>
          DiabetechNotes
        </Typography>
        <Button component={Link} to="/create" variant="contained" color="primary">
          Create Note
        </Button>
      </div>
      <List>
        {notes.map((note) => (
          <ListItem key={note.id} style={{ backgroundColor: 'white', marginBottom: '10px', borderRadius: '8px' }}>
            <ListItemText
              primary={note.title}
              secondary={note.content}
              sx={{ maxWidth: 'calc(100% - 72px)' }} // Mengatur lebar maksimal untuk responsif
            />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(note.id)} style={{ color: '#FF1493' }}>
                <DeleteIcon />
              </IconButton>
              <Button component={Link} to={`/edit/${note.id}`} color="primary">
                <CreateIcon style={{ color: '#00BFFF' }} /> {/* Menggunakan style untuk warna biru */}
              </Button>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default NoteList;
