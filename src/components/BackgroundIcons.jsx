import React, { useEffect, useState } from 'react';

function BackgroundIcons() {
  const icons = [
    'bluetooth.svg', 'c.svg','casque.svg', 'clock.svg', 'code.svg',
    'connectivity.svg', 'cpu.svg', 'database.svg', 'drone.svg',
    'enceinte.svg', 'java.svg', 'lowpower.svg', 'pcb.svg',
    'python.svg', 'train.svg', 'voiture.svg', 'wearables.svg'
  ];

  const [scattered, setScattered] = useState([]);

  useEffect(() => {
    const generated = [];
    const cols = 10;
    const rows = 12; // On augmente un peu les lignes pour garder une bonne densité avec le décalage

    const colStep = 100 / cols;
    const rowStep = 100 / rows;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const randomIcon = icons[Math.floor(Math.random() * icons.length)];
        
        // Décalage en quinconce : on décale les lignes impaires de la moitié d'une colonne
        const offsetX = (r % 2 === 1) ? (colStep / 2) : 0;
        
        generated.push({
          src: `/assets/svg/${randomIcon}`,
          id: `${r}-${c}`,
          top: `${(r + 0.5) * rowStep}%`,
          left: `${(c + 0.5) * colStep + offsetX}%`,
          // Le translate(-50%, -50%) permet de centrer parfaitement l'icône sur ses coordonnées
          transform: `translate(-50%, -50%) rotate(${Math.random() * 360}deg)`,
          width: '35px'
        });
      }
    }

    setScattered(generated);
  }, []);

  return (
    <div className="bg-container">
      {scattered.map((icon) => (
        <img
          key={icon.id}
          src={icon.src}
          alt=""
          className="bg-icon"
          style={{
            top: icon.top,
            left: icon.left,
            width: icon.width,
            transform: icon.transform
          }}
        />
      ))}
    </div>
  );
}

export default BackgroundIcons;
