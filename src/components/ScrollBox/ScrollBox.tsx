import styled from "styled-components";
export interface ScrollBoxProps {
  color?: string;
  radius?: string;
  padding?: string;
  height?: string;
  thumbheight?: string;
}
export const ScrollBox = styled.div<ScrollBoxProps>(
  ({ color = "rgba(255,255,255,0.24)", radius = "7px", thumbheight = "5%", padding, height }) => `
  overflow-y: scroll;
  padding:${padding};
  height:${height};
  &::-webkit-scrollbar {
    width: 10px;
    opacity: 0;

  }
  &::-webkit-scrollbar-thumb {
    height:${thumbheight};
    background: ${color};
    border-radius: ${radius};
  }
  // 파이어폭스
  scrollbar-width:thin;
  scrollbar-color:${color};
`
);
export default ScrollBox;
