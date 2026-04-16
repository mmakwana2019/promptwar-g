import React, { useState } from 'react';
import Header from '../components/Header';
import SessionCard from '../components/SessionCard';
import { agendaItems } from '../data/sampleData';
import './Agenda.css';

const Agenda = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [sessions, setSessions] = useState(agendaItems);

  const toggleSave = (id) => {
    setSessions(sessions.map(s => s.id === id ? { ...s, saved: !s.saved } : s));
  };

  const displayedSessions = activeTab === 'all' ? sessions : sessions.filter(s => s.saved);

  return (
    <div className="page-container">
      <Header title="Agenda" />
      
      <main className="page-content">
        <div className="tabs mb-6">
          <button 
            className={`tab-btn ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            Full Schedule
          </button>
          <button 
            className={`tab-btn ${activeTab === 'saved' ? 'active' : ''}`}
            onClick={() => setActiveTab('saved')}
          >
            My Sessions
          </button>
        </div>

        <div className="sessions-list">
          {displayedSessions.length > 0 ? (
            displayedSessions.map(session => (
              <SessionCard 
                key={session.id} 
                session={session} 
                onToggleSave={toggleSave} 
              />
            ))
          ) : (
            <div className="empty-state">
              <p className="text-secondary text-center">No sessions found in this view.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Agenda;
