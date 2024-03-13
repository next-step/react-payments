import React from 'react';

interface BackgroundProps {
  config?: {
    width?: string;
    height?: string;
    backgroundColor?: string;
    padding?: string;
    borderRadius?: string;
  };
  children: React.ReactNode;
}

const DEFAULT_CONFIG = {
  width: '300px',
  height: '100px',
  backgroundColor: 'rgba(0, 0, 0, 0.1)',
  padding: '5px 20px',
  borderRadius: '10px',
} as const;

export const Background = ({
  children,
  config: {
    width = DEFAULT_CONFIG.width,
    height = DEFAULT_CONFIG.height,
    backgroundColor = DEFAULT_CONFIG.backgroundColor,
    padding = DEFAULT_CONFIG.padding,
    borderRadius = DEFAULT_CONFIG.borderRadius,
  } = DEFAULT_CONFIG,
}: BackgroundProps) => {
  return (
    <div style={{ width, height, backgroundColor, padding, borderRadius }}>
      {children}
    </div>
  );
};
