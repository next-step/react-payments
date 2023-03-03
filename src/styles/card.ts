import styled from '@emotion/styled';

export const S = {
  CardBox: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px 0;
  `,
  EmptyCard: styled.div`
    width: 208px;
    padding: 10px 14px;
    color: #575757;
    background: #e5e5e5;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    user-select: none;
    box-sizing: border-box;
  `,
  SmallCard: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 208px;
    height: 130px;
    background: #94dacd;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
  `,
  CardTop: styled.div`
    width: 100%;
    font-size: 10px;
    margin-bottom: 20px;
  `,
  CardMiddle: styled.div`
    width: 100%;
    margin-bottom: 13px;
  `,
  CardBottom: styled.div`
    width: 100%;
  `,
  SmallCardChip: styled.div`
    width: 40px;
    height: 26px;
    left: 95px;
    top: 122px;

    background: #cbba64;
    border-radius: 4px;
  `,
  CardText: styled.span`
    font-size: 13px;
    line-height: 16px;
    vertical-align: middle;
    font-weight: 400;
  `,
  CardNumber: styled.span`
    font-size: 13px;
    line-height: 16px;
    vertical-align: middle;
    font-weight: 400;
    width: 25%;
    min-height: 16px;
  `,
  CardNumInfo: styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 5px;
    padding: 0 4px;
    box-sizing: border-box;
  `,
  CardBottomInfo: styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
};
