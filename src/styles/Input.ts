import styled from '@emotion/styled';

export const S = {
  InputContainer: styled.div`
    margin: 20px 0;
  `,
  InputTitle: styled.label`
    display: flex;
    align-items: center;
    font-size: 13px;
    line-height: 14px;
    margin-bottom: 4px;
    color: #525252;
  `,
  InputBox: styled.div`
    display: flex;
    align-items: center;
    margin-top: 0.375rem;
    color: #d3d3d3;
    border-radius: 0.25rem;
    background-color: #ecebf1;
    &.w-50 {
      width: 50%;
    }
  `,
  Hyphen: styled.span`
    color: #000;
  `,
  TitleWrap: styled.div`
    display: flex;
    justify-content: space-between;
  `,
};
