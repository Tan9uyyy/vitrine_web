import { useMemo } from 'react';

const ICON_NAMES = [
  'bluetooth.svg',
  'c.svg',
  'casque.svg',
  'clock.svg',
  'code.svg',
  'connectivity.svg',
  'cpu.svg',
  'database.svg',
  'drone.svg',
  'enceinte.svg',
  'java.svg',
  'lowpower.svg',
  'pcb.svg',
  'python.svg',
  'train.svg',
  'voiture.svg',
  'wearables.svg'
];

// Pre-calculated deterministic placements for smooth performance without SSR/HMR jitter
function generateDeterministicIcons() {
  const icons = [];
  const rows = 6;
  const cols = 5;

  const rowStep = 100 / rows;
  const colStep = 100 / cols;

  let iconIdx = 0;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const iconName = ICON_NAMES[iconIdx % ICON_NAMES.length];
      iconIdx++;

      // Alternating offset for staggered honeycomb effect
      const offsetX = (r % 2 === 1) ? colStep * 0.45 : colStep * 0.1;
      const offsetY = ((c * 7 + r * 13) % 15) - 7; // subtle deterministic vertical jitter
      const rotation = ((r * 37 + c * 59) % 90) - 45; // subtle rotation between -45 and +45 deg

      icons.push({
        id: `bg-${r}-${c}`,
        src: `${import.meta.env.BASE_URL}assets/svg/${iconName}`,
        top: `${Math.max(4, Math.min(94, (r + 0.5) * rowStep + offsetY))}%`,
        left: `${Math.max(4, Math.min(94, (c + 0.5) * colStep + offsetX))}%`,
        transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
        width: 32
      });
    }
  }

  return icons;
}

function BackgroundIcons() {
  const icons = useMemo(() => generateDeterministicIcons(), []);

  return (
    <div className="bg-container" aria-hidden="true">
      {icons.map((icon) => (
        <img
          key={icon.id}
          src={icon.src}
          alt=""
          className="bg-icon"
          loading="lazy"
          decoding="async"
          width={icon.width}
          height={icon.width}
          style={{
            top: icon.top,
            left: icon.left,
            transform: icon.transform
          }}
        />
      ))}
    </div>
  );
}

export default BackgroundIcons;
