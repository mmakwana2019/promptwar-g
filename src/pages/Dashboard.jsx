import React from 'react';
import Header from '../components/Header';
import SessionCard from '../components/SessionCard';
import { currentUser, announcements, agendaItems } from '../data/sampleData';
import { AlertTriangle, Info, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const upcomingSession = agendaItems[0]; // Just showing the first one as upcoming

  return (
    <div className="page-container">
      <Header title="Lumiere Events" />
      
      <main className="page-content">
        <section className="welcome-section mb-6">
          <h2 className="text-2xl font-bold mb-2">Welcome back, {currentUser.name.split(' ')[0]}</h2>
          <p className="text-secondary text-sm">Here's what is happening right now.</p>
        </section>

        {/* Live Announcements Area */}
        <section className="announcements-section mb-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Live Updates</h3>
            <span className="badge badge-brand flex items-center gap-2">Live <span className="live-dot"></span></span>
          </div>
          
          <div className="flex flex-col gap-3">
            {announcements.map((ann, idx) => (
              <div key={idx} className={`announcement-card card ${ann.urgent ? 'urgent' : ''}`}>
                <div className="ann-icon">
                  {ann.urgent ? <AlertTriangle size={20} className="text-alert" /> : <Info size={20} className="text-brand" />}
                </div>
                <div className="ann-content">
                  <h4 className="text-sm font-semibold">{ann.title}</h4>
                  <p className="text-xs text-secondary mt-1">{ann.time}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="upcoming-section mb-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Up Next for You</h3>
            <Link to="/agenda" className="text-brand text-sm flex items-center gap-2">
              View All <ArrowRight size={16} />
            </Link>
          </div>
          <SessionCard session={upcomingSession} />
        </section>

        {/* Quick actions can go here */}
        <section className="quick-action mb-6">
          <Link to="/checkin" className="btn btn-primary btn-full quick-action-btn">
             Show QR for Next Session
          </Link>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
