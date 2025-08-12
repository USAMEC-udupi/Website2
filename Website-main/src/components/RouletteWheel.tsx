import React, { useState } from 'react';

interface Institution {
  id: number;
  name: string;
  website: string;
  available: boolean;
}

interface RouletteWheelProps {
  institutions: Institution[];
  onInstitutionSelect: (institution: Institution) => void;
}

const RouletteWheel: React.FC<RouletteWheelProps> = ({ institutions, onInstitutionSelect }) => {
  const [hoveredSegment, setHoveredSegment] = useState<number | null>(null);
  const [selectedSegment, setSelectedSegment] = useState<number | null>(null);

  const segmentAngle = 360 / institutions.length;
  const radius = 180;
  const centerX = 200;
  const centerY = 200;

  const createSegmentPath = (index: number) => {
    const startAngle = index * segmentAngle - 90;
    const endAngle = (index + 1) * segmentAngle - 90;
    
    const startAngleRad = (startAngle * Math.PI) / 180;
    const endAngleRad = (endAngle * Math.PI) / 180;
    
    const x1 = centerX + radius * Math.cos(startAngleRad);
    const y1 = centerY + radius * Math.sin(startAngleRad);
    const x2 = centerX + radius * Math.cos(endAngleRad);
    const y2 = centerY + radius * Math.sin(endAngleRad);
    
    const largeArcFlag = segmentAngle > 180 ? 1 : 0;
    
    return `M ${centerX} ${centerY} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;
  };

  const getTextPosition = (index: number) => {
    const angle = (index * segmentAngle + segmentAngle / 2 - 90) * Math.PI / 180;
    const textRadius = radius * 0.7;
    const x = centerX + textRadius * Math.cos(angle);
    const y = centerY + textRadius * Math.sin(angle);
    return { x, y, angle: angle * 180 / Math.PI };
  };

  const handleSegmentClick = (institution: Institution, index: number) => {
    setSelectedSegment(index);
    onInstitutionSelect(institution);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="mb-6 text-center">
        <p className="text-gray-600 mb-2">
          {hoveredSegment !== null ? 'Hover to preview' : 'Click on any segment to explore'}
        </p>
        {hoveredSegment !== null && (
          <p className="text-orange-500 font-medium">
            {institutions[hoveredSegment].name}
          </p>
        )}
      </div>
      
      <svg width="400" height="400" className="drop-shadow-lg">
        {institutions.map((institution, index) => {
          const textPos = getTextPosition(index);
          const isHovered = hoveredSegment === index;
          const isSelected = selectedSegment === index;
          
          return (
            <g key={institution.id}>
              <path
                d={createSegmentPath(index)}
                fill={
                  isSelected ? '#FF8C42' : 
                  isHovered ? '#F36E21' : 
                  index % 2 === 0 ? '#660033' : '#F36E21'
                }
                stroke="#FFFFFF"
                strokeWidth={isSelected ? "3" : "2"}
                className="cursor-pointer transition-all duration-300 hover:brightness-110 hover:scale-105"
                style={{ transformOrigin: `${centerX}px ${centerY}px` }}
                onMouseEnter={() => setHoveredSegment(index)}
                onMouseLeave={() => setHoveredSegment(null)}
                onClick={() => handleSegmentClick(institution, index)}
              />
              <text
                x={textPos.x}
                y={textPos.y}
                fill="white"
                fontSize={isSelected ? "11" : "10"}
                fontWeight="bold"
                textAnchor="middle"
                dominantBaseline="middle"
                transform={`rotate(${textPos.angle > 90 && textPos.angle < 270 ? textPos.angle + 180 : textPos.angle}, ${textPos.x}, ${textPos.y})`}
                className="pointer-events-none select-none"
              >
                {institution.name.length > 12 
                  ? institution.name.substring(0, 12) + '...' 
                  : institution.name
                }
              </text>
            </g>
          );
        })}
        <circle
          cx={centerX}
          cy={centerY}
          r="30"
          fill="#FFFFFF"
          stroke="#660033"
          strokeWidth="4"
          className="drop-shadow-md"
        />
        <text
          x={centerX}
          y={centerY}
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="12"
          fontWeight="bold"
          fill="#660033"
        >
          USAMEC
        </text>
      </svg>
      
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-500 mb-2">
          Available: <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-1"></span>
          Coming Soon: <span className="inline-block w-3 h-3 bg-red-900 rounded-full mr-1"></span>
        </p>
        <p className="text-xs text-gray-400">
          {institutions.filter(i => i.available).length} of {institutions.length} institutions have websites available
        </p>
      </div>
    </div>
  );
};

export default RouletteWheel;