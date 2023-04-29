import React from 'react';
import { TColorCode } from '../../domain/payments/types';

type TPaletteProps = {
  color: TColorCode;
  label: string;
};

function Palette({ color, label }: TPaletteProps) {
  return (
    <div>
      <p className="palette-color" style={{ backgroundColor: color }}></p>
      <p className="palette-label">{label}</p>
    </div>
  );
}

export default Palette;
