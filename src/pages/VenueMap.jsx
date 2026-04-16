import React, { useState } from 'react';
import Header from '../components/Header';
import { venueZones } from '../data/sampleData';
import { Map as MapIcon, Maximize, Mic, Monitor, Coffee, UserCheck } from 'lucide-react';
import './VenueMap.css';

const IconMap = {
  Mic, Monitor, Coffee, UserCheck
};

const VenueMap = () => {
  const [selectedZone, setSelectedZone] = useState(null);

  return (
    <div className="page-container">
      <Header title="Venue Map" />
      
      <main className="page-content">
        <div className="map-wrapper card mb-6 relative overflow-hidden">
           <div className="map-placeholder">
             <MapIcon size={80} className="text-tertiary opacity-20 mx-auto mt-12" />
             <p className="text-secondary text-center mt-4">Interactive Floor Plan Placeholder</p>
             
             {/* Simulated Map Markers */}
             <div className="marker marker-1" onClick={() => setSelectedZone(venueZones[0])}></div>
             <div className="marker marker-2" onClick={() => setSelectedZone(venueZones[1])}></div>
             <div className="marker marker-3" onClick={() => setSelectedZone(venueZones[2])}></div>
           </div>
           
           <button className="icon-btn zoom-btn">
             <Maximize size={20} />
           </button>
        </div>

        <h3 className="text-lg font-semibold mb-4">Key Locations</h3>
        <div className="zones-list flex flex-col gap-3">
          {venueZones.map(zone => {
            const Icon = IconMap[zone.icon] || MapIcon;
            const isSelected = selectedZone?.id === zone.id;
            return (
              <div 
                key={zone.id} 
                className={`zone-item card flex items-center justify-between ${isSelected ? 'border-brand' : ''}`}
                onClick={() => setSelectedZone(zone)}
              >
                <div className="flex items-center gap-3">
                  <div className="zone-icon bg-tertiary p-2 rounded-md">
                    <Icon size={20} className="text-brand" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold">{zone.name}</h4>
                    <p className="text-xs text-secondary">{zone.status}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default VenueMap;
