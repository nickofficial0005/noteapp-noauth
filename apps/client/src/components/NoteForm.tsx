import React, { useState, useEffect } from 'react';

interface NoteFormProps {
    onSubmit: (note: { title: string; content: string }) => void;
    initialData?: { title: string; content: string };
    onCancel?: () => void;
}

const NoteForm: React.FC<NoteFormProps> = ({ onSubmit, initialData, onCancel }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    useEffect(() => {
        if (initialData) {
            setTitle(initialData.title);
            setContent(initialData.content);
        }
    }, [initialData]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({ title, content });
        setTitle('');
        setContent('');
    };

    return (
        <form onSubmit={handleSubmit} className="note-form">
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="form-input"
            />
            <textarea
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
                className="form-textarea"
                rows={5}
            />
            <div className="form-actions">
                <button type="submit" className="btn btn-primary">
                    {initialData ? 'Update Note' : 'Add Note'}
                </button>
                {onCancel && (
                    <button type="button" onClick={onCancel} className="btn btn-secondary">
                        Cancel
                    </button>
                )}
            </div>
        </form>
    );
};

export default NoteForm;
