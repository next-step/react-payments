import { css } from 'styled-components';

export default css`
  .flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .flex-column-center {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .flex-column {
    display: flex;
    flex-direction: column;
  }

  .mt-10 {
    margin-top: 2.5rem;
  }

  .mt-20 {
    margin-top: 5rem;
  }

  .mt-30 {
    margin-top: 7.5rem;
  }

  .mt-40 {
    margin-top: 9rem;
  }

  .mt-50 {
    margin-top: 11.5rem;
  }

  .mt-auto {
    margin-top: auto;
  }

  .mb-10 {
    margin-bottom: 2.5rem;
  }

  .pr-5 {
    padding-right: 1.25rem;
  }

  .w-100 {
    width: 100%;
  }

  .w-75 {
    width: 75%;
  }

  .w-50 {
    width: 50%;
  }

  .w-25 {
    width: 25%;
  }

  .w-15 {
    width: 15%;
  }
`;
