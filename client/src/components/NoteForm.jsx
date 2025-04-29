import React, { useState } from 'react'

function NoteForm({ onAddNote, isLoading }) {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [formError, setFormError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!title.trim()) {
      setFormError('Title is required')
      return
    }
    
    if (!content.trim()) {
      setFormError('Content is required')
      return
    }
    
    setFormError('')
    
    const success = await onAddNote({ title, content })
    
    if (success) {
      setTitle('')
      setContent('')
    }
  }

  return (
    <div className="card mb-4">
      <div className="card-header bg-primary text-white">
        <h5 className="mb-0">Add a New Note</h5>
      </div>
      <div className="card-body">
        {formError && (
          <div className="alert alert-danger" role="alert">
            {formError}
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              disabled={isLoading}
              placeholder="Enter title"
            />
          </div>
          
          <div className="mb-3">
            <label htmlFor="content" className="form-label">Content</label>
            <textarea
              className="form-control"
              id="content"
              rows="4"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              disabled={isLoading}
              placeholder="Enter note content"
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            className="btn btn-primary"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                Saving...
              </>
            ) : 'Add Note'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default NoteForm 