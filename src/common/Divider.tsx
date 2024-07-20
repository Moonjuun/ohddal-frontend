import React from 'react';

interface DividerProps {
  direction?: 'horizontal' | 'vertical';
  thickness?: string;
  color?: string;
  length?: string;
  style?: React.CSSProperties;
}

const Divider: React.FC<DividerProps> = ({
  direction = 'horizontal',
  thickness = '1px',
  color = '#000',
  length = '100%',
  style,
}) => {
  const dividerStyle: React.CSSProperties = {
    backgroundColor: color,
    ...(direction === 'horizontal'
      ? { height: thickness, width: length }
      : { width: thickness, height: length }),
    ...style,
  };

  return <div style={dividerStyle} />;
};

export default Divider;
