import styled from '@emotion/styled';

export const S = {
  CardBox: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px 0;
  `,
  EmptyCard: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 208px;
    height: 130px;

    font-size: 30px;
    color: #575757;

    background: #e5e5e5;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
    border-radius: 5px;

    user-select: none;
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
    height: 100%;

    display: flex;
    align-items: center;
  `,
  CardMiddle: styled.div`
    width: 100%;
    height: 100%;
    margin-left: 30px;

    display: flex;
    align-items: center;
  `,
  CardBottom: styled.div`
    width: 100%;
    height: 100%;=
    display: flex;
    flex-direction: column;
    align-items: center;
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
    margin: 0 16px;
    font-size: 14px;
    line-height: 16px;
    vertical-align: middle;
    font-weight: 400;
  `,
  CardBottomInfo: styled.div`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
};
