import React from 'react';
import { ChevronRight } from 'lucide-react';
import './Index.css';

function Index() {
  const sports = [
    "Fútbol",
    "Baloncesto",
    "Tenis",
    "Voleibol",
    "Natación",
  ];

  return (
    <div className="index-main-container">
      {/* Main Content */}
      <main className="index-main-content">
        <section className="index-sport-selection">
          <h2 className="index-section-title">Selecciona un Deporte</h2>
          <div className="index-sports-grid">
            {sports.map((sport) => (
              <div key={sport} className="index-card">
                <div className="index-card-content">
                  <button className="index-btn-sport">
                    {sport}
                    <ChevronRight className="index-icon-chevron" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Index;
