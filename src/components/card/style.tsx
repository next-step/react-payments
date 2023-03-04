import { styled } from "lib/stitches.config";

export const CardWrapper = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "10px 0",
});

export const VariableWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "3px 3px 5px rgba(0, 0, 0, 0.25)",
  borderRadius: "5px",

  variants: {
    size: {
      big: {
        width: "290px",
        height: "180px",
        background: "#94dacd",
      },
      small: {
        width: "208px",
        height: "130px",
        userSelect: "none",
        background: "#e5e5e5",
      },
    },
  },
});

export const CardTopBox = styled("div", {
  width: "100%",
  height: "100%",

  display: "flex",
  alignItems: "center",
});

export const CardCompanyText = styled("span", {
  margin: "0 16px",
  verticalAlign: "middle",
  fontWeight: "400",

  variants: {
    size: {
      small: {
        fontSize: "14px",
        lineHeight: "16px",
      },
      big: {
        fontSize: "18px",
        lineHeight: "20px",
      },
    },
  },
});

export const CardMiddleBox = styled("div", {
  width: "100%",
  height: "100%",
  marginLeft: "30px",

  display: "flex",
  alignItems: "center",
});

export const CardChip = styled("div", {
  background: "#cbba64",
  borderRadius: "4px",
  variants: {
    size: {
      big: {
        width: "55.04px",
        height: "35.77px",
        fontSize: "24px",
      },
      small: {
        width: "40px",
        height: "26px",
        left: "95px",
        top: "122px",
      },
    },
  },
});

export const CardBottomBox = styled("div", {
  width: "100%",
  height: "100%",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const CardNumberBox = styled("div", {
  width: "100%",
  height: "100%",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const CardText = styled("span", {
  margin: "0 16px",
  verticalAlign: "middle",
  fontWeight: "400",

  variants: {
    size: {
      small: {
        fontSize: "14px",
        lineHeight: "16px",
      },
      big: {
        fontSize: "18px",
        lineHeight: "20px",
      },
    },
    elipsis: {
      yes: {
        width: "72px",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
      },
    },
  },
});

export const CardBottomBoxInfo = styled("div", {
  width: "100%",
  height: "100%",

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});