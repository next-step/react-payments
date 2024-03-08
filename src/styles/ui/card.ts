import { css } from '@emotion/css'
import { color } from '../theme/color'

export const cardCSS = css`
  .card-box {
    display: flex;
    align-items: center;
    justify-content: center;

    margin: 10px 0;
  }

  .empty-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 208px;
    height: 130px;

    font-size: 30px;
    color: ${color.grayscale02};

    background: ${color.bgGray03};
    box-shadow: 3px 3px 5px ${color.dimOpacity25};
    border-radius: 5px;

    user-select: none;
  }

  .small-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 208px;
    height: 130px;

    background: ${color.bankSky};
    box-shadow: 3px 3px 5px ${color.dimOpacity25};
    border-radius: 5px;
  }

  .small-card__chip {
    width: 40px;
    height: 26px;
    left: 95px;
    top: 122px;

    background: ${color.cardChip};
    border-radius: 4px;
  }

  .big-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 290px;
    height: 180px;

    background: ${color.bankSky};
    box-shadow: 3px 3px 5px ${color.dimOpacity25};
    border-radius: 5px;
  }

  .big-card__chip {
    width: 55.04px;
    height: 35.77px;

    background: ${color.cardChip};
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
`
