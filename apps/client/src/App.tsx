import { useState, useEffect } from 'react';
import { getNotes, createNote, updateNote, deleteNote } from './api';
import Navbar from './components/Navbar';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import ToastContainer, { type Toast } from './components/Toast';
import './App.css';

interface Note {
  _id: string;
  title: string;
  content: string;
  createdAt: string;
}

function App() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [editingNote, setEditingNote] = useState<Note | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = (message: string, type: 'success' | 'error') => {
    const id = Math.random().toString(36).substr(2, 9);
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => removeToast(id), 3000);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const fetchNotes = async () => {
    try {
      const data = await getNotes();
      setNotes(data);
    } catch (error) {
      console.error('Error fetching notes:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const handleCreate = async (noteData: { title: string; content: string }) => {
    try {
      const newNote = await createNote(noteData);
      setNotes([newNote, ...notes]);
      addToast('Note created successfully!', 'success');
    } catch (error) {
      console.error('Error creating note:', error);
      addToast('Failed to create note.', 'error');
    }
  };

  const handleUpdate = async (noteData: { title: string; content: string }) => {
    if (!editingNote) return;
    try {
      const updatedNote = await updateNote(editingNote._id, noteData);
      setNotes(notes.map((n) => (n._id === editingNote._id ? updatedNote : n)));
      setEditingNote(undefined);
      addToast('Note updated successfully!', 'success');
    } catch (error) {
      console.error('Error updating note:', error);
      addToast('Failed to update note.', 'error');
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this note?')) return;
    try {
      await deleteNote(id);
      setNotes(notes.filter((n) => n._id !== id));
      addToast('Note deleted successfully!', 'success');
    } catch (error) {
      console.error('Error deleting note:', error);
      addToast('Failed to delete note.', 'error');
    }
  };

  return (
    <div className="app">
      <Navbar />
      <ToastContainer toasts={toasts} removeToast={removeToast} />
      <main className="container main-content">
        <div className="content-wrapper">
          <section className="form-section">
            <h2>{editingNote ? 'Edit Note' : 'Create Note'}</h2>
            <NoteForm
              onSubmit={editingNote ? handleUpdate : handleCreate}
              initialData={editingNote}
              onCancel={editingNote ? () => setEditingNote(undefined) : undefined}
            />
          </section>

          <section className="list-section">
            <h2>Your Notes</h2>
            {loading ? (
              <p>Loading notes...</p>
            ) : (
              <NoteList
                notes={notes}
                onEdit={setEditingNote}
                onDelete={handleDelete}
              />
            )}
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
