import React from 'react';
import { MapPin, Clock, Bookmark, BookmarkCheck } from 'lucide-react';
import './SessionCard.css';

const SessionCard = ({ session, onToggleSave }) => {
  return (
    <div className="session-card card">
      <div className="session-header">
        <span className={`badge badge-${session.track === 'Keynote' ? 'brand' : 'accent'}`}>
          {session.track}
        </span>
        <button className="save-btn" onClick={() => onToggleSave && onToggleSave(session.id)}>
          {session.saved ? (
            <BookmarkCheck size={20} className="text-brand" />
          ) : (
            <Bookmark size={20} className="text-secondary" />
          )}
        </button>
      </div>
      
      <h3 className="text-lg font-semibold mt-4 mb-2">{session.title}</h3>
      
      <div className="speaker-info mb-4">
        <p className="text-sm font-medium">{session.speaker}</p>
        <p className="text-xs text-secondary">{session.speakerRole}</p>
      </div>
      
      <div className="session-meta flex flex-col gap-2">
        <div className="meta-item">
          <Clock size={16} className="text-secondary" />
          <span className="text-sm text-secondary">{session.time}</span>
        </div>
        <div className="meta-item">
          <MapPin size={16} className="text-secondary" />
          <span className="text-sm text-secondary">{session.location}</span>
        </div>
      </div>
    </div>
  );
};

export default SessionCard;
