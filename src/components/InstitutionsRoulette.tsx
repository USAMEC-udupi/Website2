import React, { useMemo, useState } from 'react';

type Institution = {
  id: string;
  name: string;
  location: string;
  established?: string;
  website?: string;
  phone?: string;
  email?: string;
  programs?: string[];
};

type Props = {
  institutions: Institution[];
};

function polarToCartesian(centerX: number, centerY: number, radius: number, angleInDegrees: number) {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  };
}

function describeArc(x: number, y: number, radius: number, startAngle: number, endAngle: number) {
  const start = polarToCartesian(x, y, radius, endAngle);
  const end = polarToCartesian(x, y, radius, startAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';
  return ['M', start.x, start.y, 'A', radius, radius, 0, largeArcFlag, 0, end.x, end.y].join(' ');
}

export const InstitutionsRoulette: React.FC<Props> = ({ institutions }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const num = institutions.length;
  const center = 160;
  const radius = 140;

  const segments = useMemo(() => {
    const anglePer = 360 / num;
    return institutions.map((inst, index) => {
      const start = index * anglePer;
      const end = start + anglePer;
      const path = describeArc(center, center, radius, start, end);
      return { path, inst, index };
    });
  }, [institutions, num]);

  const active = institutions[activeIndex];

  return (
    <div className="flex flex-col lg:flex-row gap-10 items-center">
      <svg width={320} height={320} viewBox={`0 0 ${center * 2} ${center * 2}`}>
        <defs>
          <linearGradient id="segOrange" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF7A00" />
            <stop offset="100%" stopColor="#800000" />
          </linearGradient>
        </defs>
        <circle cx={center} cy={center} r={radius + 8} fill="#1f2937" />
        {segments.map(({ path, index }) => (
          <path
            key={index}
            d={path}
            stroke={index === activeIndex ? 'url(#segOrange)' : '#3f3f46'}
            strokeWidth={28}
            fill="none"
            onMouseEnter={() => setActiveIndex(index)}
            onClick={() => setActiveIndex(index)}
            style={{ cursor: 'pointer' }}
          />
        ))}
        <circle cx={center} cy={center} r={70} fill="#0b0b0b" stroke="#FF7A00" strokeWidth={3} />
        <text x={center} y={center} textAnchor="middle" dominantBaseline="middle" fill="#fff" fontSize={18} fontWeight={700}>
          USAMEC
        </text>
      </svg>

      <div className="glass-card p-6 rounded-xl w-full max-w-xl">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-2xl font-bold" style={{ fontFamily: 'Orbitron, monospace' }}>{active.name}</h3>
          {active.website && (
            <a
              href={active.website}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-md bg-orange-500 text-white text-sm font-semibold"
            >
              Visit Website
            </a>
          )}
        </div>
        <p className="text-gray-300 mb-4">{active.location}</p>
        <div className="grid grid-cols-2 gap-4 text-sm">
          {active.established && (
            <div>
              <div className="text-gray-400">Established</div>
              <div className="text-white font-semibold">{active.established}</div>
            </div>
          )}
          {(active.phone || active.email) && (
            <div>
              <div className="text-gray-400">Contact</div>
              <div className="text-white font-semibold">{active.phone || ''}</div>
              {active.email && (
                <a className="text-orange-400" href={`mailto:${active.email}`}>Mail</a>
              )}
            </div>
          )}
        </div>
        {active.programs && active.programs.length > 0 && (
          <div className="mt-4">
            <div className="text-gray-400 text-sm mb-1">Programs</div>
            <ul className="list-disc list-inside text-gray-200 text-sm">
              {active.programs.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

// Expose globally for in-browser Babel usage with UMD React/ReactDOM
// @ts-ignore
if (typeof window !== 'undefined') {
  // @ts-ignore
  window.InstitutionsRoulette = InstitutionsRoulette;
}

export default InstitutionsRoulette;

