import { styled } from "lib/stitches.config";

export const Wrapper = styled("div", {
  backgroundColor: "#fff",
  width: "375px",
  minWidth: "375px",
  height: "700px",
  position: "relative",
  borderRadius: "15px",
});

export const SubWrapper = styled("div", {
  height: "100%",
  padding: "16px 24px",
  variants: {
    flex: {
      no: {},
      yes: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      },
    },
  },
});