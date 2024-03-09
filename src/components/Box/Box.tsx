import { CSSProperties, HTMLAttributes, ReactNode, forwardRef } from "react";

interface BoxProps
  extends Pick<CSSProperties, "width" | "height" | "backgroundColor">,
    HTMLAttributes<HTMLDivElement> {
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

const Box = forwardRef<HTMLDivElement, Readonly<BoxProps>>(function Box(
  {
    width = "fit-content",
    height,
    contentPosition = "none",
    backgroundColor,
    children,
    ...props
  },
  ref
) {
  const style = {
    width,
    height,
    backgroundColor,
    borderRadius: "7px",
    ...position[contentPosition],
  };

  return (
    <div {...props} ref={ref} style={style}>
      {children}
    </div>
  );
});

export default Box;
