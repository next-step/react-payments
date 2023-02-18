import { css } from '@emotion/css';

interface DashProps {
  visible?: boolean;
  width?: number;
  height?: number;
}

function Dash({ visible = false, width = 6, height = 3 }: DashProps) {
  return (
    <span
      className={css`
        padding: 0 ${width / 2}px;
        height: ${height}px;
        background-color: ${visible ? '#000' : 'transparent'};
      `}
    ></span>
  );
}

export default Dash;
