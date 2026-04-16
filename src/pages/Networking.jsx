import React from 'react';
import Header from '../components/Header';
import { currentUser } from '../data/sampleData';
import { Search, UserPlus, MessageSquare, Sparkles } from 'lucide-react';
import './Networking.css';

const Networking = () => {
  const suggestedMatches = [
    { id: 1, name: "Sarah Jenkins", role: "Performance Engineer", company: "FastWeb", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" },
    { id: 2, name: "Marcus Chen", role: "Lead Designer", company: "StudioX", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus" },
    { id: 3, name: "Elena Rodriguez", role: "VP Product", company: "Visionary Inc", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Elena" },
  ];

  return (
    <div className="page-container">
      <Header title="Networking" />
      
      <main className="page-content">
        <div className="search-bar card mb-6 flex items-center gap-3">
          <Search size={20} className="text-secondary" />
          <input type="text" placeholder="Search attendees, interests..." className="search-input" />
        </div>

        <section className="matchmaking-section mb-6">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles size={20} className="text-brand" />
            <h3 className="text-lg font-semibold">AI Matchmaking</h3>
          </div>
          
          <div className="matches-scroll flex gap-4 overflow-x-auto pb-4">
            {suggestedMatches.map(match => (
              <div key={match.id} className="match-card card flex-shrink-0">
                <div className="match-avatar mb-3">
                  <img src={match.avatar} alt={match.name} />
                </div>
                <h4 className="text-sm font-semibold">{match.name}</h4>
                <p className="text-xs text-secondary truncate mb-3">{match.role}</p>
                <div className="flex gap-2">
                  <button className="icon-btn-sm bg-tertiary rounded-full p-2">
                    <UserPlus size={16} />
                  </button>
                  <button className="icon-btn-sm bg-brand rounded-full p-2 text-white">
                    <MessageSquare size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="engagement-section">
          <h3 className="text-lg font-semibold mb-4">Event Challenges</h3>
          <div className="card challenge-card flex items-center gap-4">
            <div className="challenge-icon bg-accent-light p-3 rounded-lg">
              <Sparkles size={24} className="text-accent" />
            </div>
            <div>
              <h4 className="text-sm font-bold">Scavenger Hunt</h4>
              <p className="text-xs text-secondary">Find 3 booths to unlock a prize!</p>
              <div className="progress-bar mt-2">
                <div className="progress-fill" style={{ width: '66%' }}></div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Networking;
