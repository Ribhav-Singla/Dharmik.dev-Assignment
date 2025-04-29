import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NoteForm from './components/NoteForm'
import NoteList from './components/NoteList'
import './App.css'

const API_URL = import.meta.env.VITE_BACKEND_URL || 'https://notes-app-server-b0zk.onrender.com/notes'

function App() {
  const [notes, setNotes] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const fetchNotes = async () => {
    setLoading(true)
    setError('')
    try {
      const response = await axios.get(API_URL)
      setNotes(Array.isArray(response.data) ? response.data : [])
    } catch (err) {
      setError('Failed to fetch notes. Please try again later.')
      console.error('Error fetching notes:', err)
      setNotes([])
    } finally {
      setLoading(false)
    }
  }

  const handleAddNote = async (note) => {
    setLoading(true)
    setError('')
    try {
      const response = await axios.post(API_URL, note)
      if (response.data && response.data._id) {
        setNotes([response.data, ...notes])
      }
      return true
    } catch (err) {
      setError('Failed to add note. Please try again.')
      console.error('Error adding note:', err)
      return false
    } finally {
      setLoading(false)
    }
  }

  const handleDeleteNote = async (noteId) => {
    setLoading(true)
    setError('')
    try {
      await axios.delete(`${API_URL}/${noteId}`)
      setNotes(notes.filter(note => note._id !== noteId))
    } catch (err) {
      setError('Failed to delete note. Please try again.')
      console.error('Error deleting note:', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchNotes()
  }, [])

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Notes App</h1>
      <h1 className="text-center mb-4 text-muted h3">Backend is on render might take some time to load!</h1>
      
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
      
      <NoteForm onAddNote={handleAddNote} isLoading={loading} />
      
      {loading ? (
        <div className="d-flex justify-content-center mt-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <NoteList 
          notes={notes || []} 
          onDeleteNote={handleDeleteNote} 
          isLoading={loading} 
        />
      )}
    </div>
  )
}

export default App
