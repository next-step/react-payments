import { css } from '@emotion/css'
import { color } from '../theme/color'

export const modalCSS = css`
  .modal {
    width: 375px;
    height: 220px;

    border-radius: 5px 5px 15px 15px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    background: ${color.white};
    z-index: 10;
  }

  .modal-dimmed {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    position: absolute;
    top: 0;
    left: 0;

    background: ${color.dimOpacity50};

    border-radius: 15px;

    z-index: 5;
  }

  .modal-item-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .modal-item-dot {
    margin: 0.5rem 1rem;
    border-radius: 50%;
    width: 2.8rem;
    height: 2.8rem;
    background-color: ${color.bankSky};
  }

  .modal-item-name {
    font-size: 12px;
    letter-spacing: -0.085rem;
  }
`
