import { css } from "@emotion/react";
import styled from "@emotion/styled";

const labelDefaultStyle = css`
  font-size: 12px;
  & + * {
    margin-top: 7px;
  }
`;

const Container = styled.div`
  & + & {
    margin-top: 10px;
  }
`;

const Label = styled.label`
  ${labelDefaultStyle}
`;

const LabelGroup = styled.div`
  display: flex;
  justify-content: space-between;
  ${labelDefaultStyle}
`;

const Group = styled.div`
  display: flex;
  background: #ecebf1;
  border-radius: 5px;
`;

export { Container, Label, LabelGroup, Group };
