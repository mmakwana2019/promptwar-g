import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { currentUser } from '../data/sampleData';
import { QrCode, CheckCircle } from 'lucide-react';
import './CheckIn.css';

const CheckIn = () => {
  const [status, setStatus] = useState('idle'); // idle, scanning, success

  const simulateScan = () => {
    setStatus('scanning');
    setTimeout(() => {
      setStatus('success');
    }, 2000);
  };

  useEffect(() => {
    if (status === 'success') {
      const timer = setTimeout(() => {
        setStatus('idle');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <div className="page-container">
      <Header title="Event Access" />
      
      <main className="page-content flex flex-col items-center">
        <div className="text-center mt-4 mb-8">
          <h2 className="text-2xl font-bold mb-2">Your Ticket</h2>
          <p className="text-secondary text-sm">Present this code at any access point.</p>
        </div>

        <div className={`qr-container card ${status}`}>
          {status === 'success' ? (
            <div className="success-state flex flex-col items-center justify-center fade-in">
              <CheckCircle size={64} className="text-accent mb-4" />
              <h3 className="text-xl font-bold text-accent">Access Granted</h3>
              <p className="text-sm mt-2">{currentUser.ticketType}</p>
            </div>
          ) : (
            <div className="qr-wrapper relative">
              {/* Using a placeholder SVG or just a large icon for QR code visually */}
              <div className="qr-box">
                 <QrCode size={180} className="text-primary qr-icon" />
                 {status === 'scanning' && <div className="scanner-line"></div>}
              </div>
            </div>
          )}
        </div>

        <div className="mt-8 text-center ticket-details">
          <h3 className="text-lg font-bold">{currentUser.name}</h3>
          <p className="text-secondary">{currentUser.company}</p>
          <div className="mt-4">
             <span className="badge badge-brand text-sm">{currentUser.ticketType}</span>
          </div>
        </div>

        <button 
           className="btn btn-primary mt-8 w-4/5" 
           onClick={simulateScan}
           disabled={status !== 'idle'}
        >
          {status === 'idle' ? 'Simulate Scan' : status === 'scanning' ? 'Verifying...' : 'Verified'}
        </button>
      </main>
    </div>
  );
};

export default CheckIn;
