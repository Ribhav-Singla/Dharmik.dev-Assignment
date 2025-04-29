import React from 'react';

function Note({ note, onDelete }) {
  if (!note || typeof note !== 'object') {
    return null;
  }
  
  const { _id, title, content, createdAt } = note;
  
  const formattedDate = createdAt ? new Date(createdAt).toLocaleString() : '';
  
  return (
    <div className="card w-100 shadow-sm">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-start">
          <h5 className="card-title">{title || 'Untitled'}</h5>
          <small className="text-muted">{formattedDate}</small>
        </div>
        <p className="card-text">{content || 'No content'}</p>
      </div>
      <div className="card-footer bg-transparent">
        <button
          className="btn btn-outline-danger btn-sm"
          onClick={() => onDelete && _id && onDelete(_id)}
          disabled={!_id}
        >
          <i className="bi bi-trash me-1"></i> Delete
        </button>
      </div>
    </div>
  );
}

export default Note; 