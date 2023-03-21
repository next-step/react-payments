import { SVGProps } from 'react';

function Circle({ fill = 'black', width, height, viewBox }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={width || '37'}
      height={height || '37'}
      viewBox={viewBox || '0 0 37 37'}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M37 18.5001C37 28.7173 28.7173 37.0001 18.5 37.0001C8.28273 37.0001 0 28.7173 0 18.5001C0 8.2828 8.28273 6.4622e-05 18.5 6.4622e-05C28.7173 6.4622e-05 37 8.2828 37 18.5001Z"
        fill={fill}
      />
    </svg>
  );
}

export default Circle;
