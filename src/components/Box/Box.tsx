import { ReactNode } from "react";

interface BoxProps {
  /**
   * @description 숫자가 아닌 원하는 단위의 사이즈를 입력 가능합니다.
   */
  width: string;

  /**
   * @description 숫자가 아닌 원하는 단위의 사이즈를 입력 가능합니다.
   */
  height: string;

  /**
   * @description 박스의 컬러를 지정할 수 있습니다.
   */
  backgroundColor?: string;
  children: ReactNode;
  contentPosition?: "center" | "middle" | "centerMiddle" | "none";
}

const position = {
  center: {
    display: "flex",
    justifyContent: "center",
  },
  middle: {
    display: "flex",
    alignItems: "center",
  },
  centerMiddle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  none: {},
};

export default function Box({
  width,
  height,
  contentPosition = "none",
  backgroundColor,
  children,
}: Readonly<BoxProps>) {
  const style = {
    ...{ width },
    ...{ height },
    backgroundColor,
    borderRadius: "7px",
    ...position[contentPosition],
  };

  return <div style={style}>{children}</div>;
}
