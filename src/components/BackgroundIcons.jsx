import { useState } from 'react';

const ICONS = [
  'bluetooth.svg', 'c.svg', 'casque.svg', 'clock.svg', 'code.svg',
  'connectivity.svg', 'cpu.svg', 'database.svg', 'drone.svg',
  'enceinte.svg', 'java.svg', 'lowpower.svg', 'pcb.svg',
  'python.svg', 'train.svg', 'voiture.svg', 'wearables.svg'
];

function generateScatteredIcons() {
  const generated = [];
  const cols = 10;
  const rows = 12; // Garder une bonne densité avec le décalage en quinconce

  const colStep = 100 / cols;
  const rowStep = 100 / rows;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const randomIcon = ICONS[Math.floor(Math.random() * ICONS.length)];
      // Décalage en quinconce : on décale les lignes impaires de la moitié d'une colonne
      const offsetX = (r % 2 === 1) ? (colStep / 2) : 0;

      generated.push({
        src: `${import.meta.env.BASE_URL}assets/svg/${randomIcon}`,
        id: `${r}-${c}`,
        top: `${(r + 0.5) * rowStep}%`,
        left: `${(c + 0.5) * colStep + offsetX}%`,
        transform: `translate(-50%, -50%) rotate(${Math.floor(Math.random() * 360)}deg)`,
        width: '35px'
      });
    }
  }

  return generated;
}

function BackgroundIcons() {
  const [scattered] = useState(generateScatteredIcons);

  return (
    <div className="bg-container" aria-hidden="true">
      {scattered.map((icon) => (
        <img
          key={icon.id}
          src={icon.src}
          alt=""
          className="bg-icon"
          loading="lazy"
          decoding="async"
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
