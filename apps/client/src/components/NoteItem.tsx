import React from 'react';
import { Pencil, Trash2 } from 'lucide-react';

interface Note {
    _id: string;
    title: string;
    content: string;
    createdAt: string;
}

interface NoteItemProps {
    note: Note;
    onEdit: (note: Note) => void;
    onDelete: (id: string) => void;
}

const NoteItem: React.FC<NoteItemProps> = ({ note, onEdit, onDelete }) => {
    return (
        <div className="note-card">
            <div className="note-header">
                <h3>{note.title}</h3>
                <div className="note-actions">
                    <button onClick={() => onEdit(note)} className="icon-btn edit-btn">
                        <Pencil size={18} />
                    </button>
                    <button onClick={() => onDelete(note._id)} className="icon-btn delete-btn">
                        <Trash2 size={18} />
                    </button>
                </div>
            </div>
            <p className="note-content">{note.content}</p>
            <small className="note-date">{new Date(note.createdAt).toLocaleDateString()}</small>
        </div>
    );
};

export default NoteItem;
