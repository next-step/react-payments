import styled from '@emotion/styled';

export const CardContainer = styled.div<{
  size: 'small' | 'big';
  cardColor: string;
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: ${({ size }) => (size === 'big' ? '290px' : '208px')};
  height: ${({ size }) => (size === 'big' ? '180px' : '130px')};

  background: ${({ cardColor }) => cardColor};
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  padding-bottom: 10px;

  .big-card__chip {
    width: 55.04px;
    height: 35.77px;

    background: #cbba64;
    border-radius: 4px;

    font-size: 24px;
  }

  .card-top {
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
  }

  .card-middle {
    width: 100%;
    height: 100%;
    margin-left: 30px;

    display: flex;
    align-items: center;
  }

  .card-bottom {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .card-bottom__number {
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .card-bottom__info {
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .card-text {
    margin: 0 16px;

    font-size: 14px;
    line-height: 16px;
    vertical-align: middle;
    font-weight: 400;
  }

  .card-text__big {
    margin: 0 16px;

    font-size: 18px;
    line-height: 20px;
    vertical-align: middle;
    font-weight: 400;
  }

  .small-card__chip {
    width: 40px;
    height: 26px;
    left: 95px;
    top: 122px;

    background: #cbba64;
    border-radius: 4px;
  }
`;
