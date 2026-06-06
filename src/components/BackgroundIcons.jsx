import React, { useEffect, useState } from 'react';

function BackgroundIcons() {
  const icons = [
    'bluetooth.svg', 'c.svg', 'casque.svg', 'clock.svg', 'code.svg',
    'connectivity.svg', 'cpu.svg', 'database.svg', 'drone.svg', 'enceinte.svg',
    'java.svg', 'lowpower.svg', 'newDrone.svg', 'newcasque.svg', 'newenceinte.svg',
    'newvoiture.svg', 'node.svg', 'pcb.svg', 'python.svg', 'train.svg', 'wearables.svg'
  ];

  const [scattered, setScattered] = useState([]);

  useEffect(() => {
    const generated = [];
    const minDistance = 12; // Distance minimale en pourcentage d'écran

    icons.forEach((icon, i) => {
      let x, y;
      let valid = false;
      let attempts = 0;

      // Boucle pour trouver une position qui ne touche pas les autres
      while (!valid && attempts < 50) {
        // On génère entre 5% et 95% pour éviter de coller parfaitement aux bords
        x = Math.random() * 90 + 5;
        y = Math.random() * 90 + 5;
        valid = true;

        for (let j = 0; j < generated.length; j++) {
          const other = generated[j];
          const dx = x - other.numLeft;
          const dy = y - other.numTop;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < minDistance) {
            valid = false;
            break; // La position est invalide, on retente
          }
        }
        attempts++;
      }

      generated.push({
        src: `/assets/svg/${icon}`,
        id: i,
        numTop: y,
        numLeft: x,
        top: `${y}%`,
        left: `${x}%`,
        width: `${Math.random() * 40 + 20}px`,
        transform: `rotate(${Math.random() * 360}deg)`
      });
    });

    setScattered(generated);
  }, []);

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', overflow: 'hidden', zIndex: -1, pointerEvents: 'none' }}>
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
            transform: icon.transform,
            position: 'absolute'
          }}
        />
      ))}
    </div>
  );
}

export default BackgroundIcons;
