import { SvgType } from '../../type/svg';

const CloseIcon = ({ color }: SvgType) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={25} width={25}>
      <g transform="translate(3.966 3.568)">
        <path
          d="m0-.001 17.435 18.213M0 18.212 17.435 0"
          style={{
            opacity: 1,
            fill: color,
            stroke: color,
            strokeWidth: 2,
            strokeLinecap: 'round',
            strokeMiterlimit: 4,
            fillOpacity: 1,
            strokeOpacity: 1,
          }}
        />
      </g>
    </svg>
  );
};

export default CloseIcon;
