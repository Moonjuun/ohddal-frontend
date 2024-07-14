import React from 'react';
import { scaleLinear } from 'd3-scale';
import ReactTooltip from 'react-tooltip';

interface ScoreItem {
  entityId: string;
  score: number;
  description: string;
}

interface BubbleComponentProps {
  data: ScoreItem[];
}

const BubbleComponent: React.FC<BubbleComponentProps> = ({ data }) => {
  const maxScore = Math.max(...data.map((item) => item.score));
  const scale = scaleLinear().domain([0, maxScore]).range([80, 300]); // Increase bubble size range

  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
      {data.map((item, index) => (
        <div
          key={index}
          className="bubble"
          style={{
            width: `${scale(item.score)}px`,
            height: `${scale(item.score)}px`,
            lineHeight: `${scale(item.score)}px`,
            borderRadius: '50%',
            backgroundColor: 'rgba(0, 150, 255, 0.7)',
            textAlign: 'center',
            position: 'absolute',
            top: `${Math.random() * 70}vh`, // Adjusted to reduce spacing
            left: `${Math.random() * 70}vw`, // Adjusted to reduce spacing
            fontSize: '16px',
            color: '#fff',
            transition: 'transform 0.3s',
          }}
          data-tip={item.description}
        >
          {item.description}
        </div>
      ))}
      {/* <ReactTooltip effect="solid" /> */}
      <style>{`
        .bubble:hover {
          transform: scale(1.5);
          z-index: 1000;
        }
      `}</style>
    </div>
  );
};

export default BubbleComponent;
