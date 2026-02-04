import express from 'express'
import type { Request, Response, Router } from 'express'
import Note from '../models/Note.js'
import { noteSchema } from '../schemas/noteSchema.js'

const router: Router = express.Router()

// GET all notes
router.get('/', async (req: Request, res: Response, next) => {
  try {
    const notes = await Note.find().sort({ createdAt: -1 })
    res.json(notes)
  } catch (err) {
    next(err)
  }
})

// GET single note
router.get('/:id', async (req: Request, res: Response, next) => {
  try {
    const note = await Note.findById(req.params.id)
    if (!note) {
      return res.status(404).json({ message: 'Note not found' })
    }
    res.json(note)
  } catch (err) {
    next(err)
  }
})

// POST create note
router.post('/', async (req: Request, res: Response, next) => {
  try {
    // Validate input
    const validation = noteSchema.safeParse(req.body);

    if (!validation.success) {
      return res.status(400).json({
        message: 'Validation Error',
        errors: validation.error.format()
      });
    }

    const { title, content } = validation.data;

    const noteData: { title: string; content?: string } = { title };
    if (content !== undefined) {
      noteData.content = content;
    }

    const newNote = await Note.create(noteData)
    res.status(201).json(newNote)
  } catch (err) {
    next(err)
  }
})

// PUT update note
router.put('/:id', async (req: Request, res: Response, next) => {
  try {
    // Validate input
    const validation = noteSchema.safeParse(req.body);

    if (!validation.success) {
      return res.status(400).json({
        message: 'Validation Error',
        errors: validation.error.format()
      });
    }

    const { title, content } = validation.data;

    const updateData: { title: string; content?: string } = { title };
    if (content !== undefined) {
      updateData.content = content;
    }

    const note = await Note.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    )

    if (!note) {
      return res.status(404).json({ message: 'Note not found' })
    }

    res.json(note)
  } catch (err) {
    next(err)
  }
})

// DELETE delete note
router.delete('/:id', async (req: Request, res: Response, next) => {
  try {
    const note = await Note.findByIdAndDelete(req.params.id)

    if (!note) {
      return res.status(404).json({ message: 'Note not found' })
    }

    res.json({ message: 'Note deleted' })
  } catch (err) {
    next(err)
  }
})

export default router
