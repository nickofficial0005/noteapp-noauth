import React from 'react';
import NoteItem from './NoteItem';

interface Note {
    _id: string;
    title: string;
    content: string;
    createdAt: string;
}

interface NoteListProps {
    notes: Note[];
    onEdit: (note: Note) => void;
    onDelete: (id: string) => void;
}

const NoteList: React.FC<NoteListProps> = ({ notes, onEdit, onDelete }) => {
    if (notes.length === 0) {
        return <div className="empty-state">No notes found. Create one!</div>;
    }

    return (
        <div className="note-list">
            {notes.map((note) => (
                <NoteItem key={note._id} note={note} onEdit={onEdit} onDelete={onDelete} />
            ))}
        </div>
    );
};

export default NoteList;
