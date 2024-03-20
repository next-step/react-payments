import React from 'react';

interface BackgroundProps {
  title?: string;
  config?: {
    display?: string;
    alignItems?: string;
    justifyContent?: string;
    width?: string;
    height?: string;
    backgroundColor?: string;
    padding?: string;
    borderRadius?: string;
  };
  children: React.ReactNode;
}

const DEFAULT_CONFIG = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 'auto',
  height: 'auto',
  backgroundColor: 'rgba(0, 0, 0, 0.1)',
  padding: '20px',
  borderRadius: '10px',
} as const;

export const Background = ({
  title,
  children,
  config: {
    display = DEFAULT_CONFIG.display,
    alignItems = DEFAULT_CONFIG.alignItems,
    justifyContent = DEFAULT_CONFIG.justifyContent,
    width = DEFAULT_CONFIG.width,
    height = DEFAULT_CONFIG.height,
    backgroundColor = DEFAULT_CONFIG.backgroundColor,
    padding = DEFAULT_CONFIG.padding,
    borderRadius = DEFAULT_CONFIG.borderRadius,
  } = DEFAULT_CONFIG,
}: BackgroundProps) => {
  return (
    <>
      {title && <h3>{title}</h3>}
      <div
        style={{
          display,
          alignItems,
          justifyContent,
          width,
          height,
          backgroundColor,
          padding,
          borderRadius,
        }}
      >
        {children}
      </div>
    </>
  );
};
