import { css } from 'styled-components'

const flexFullCenter = css`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`

const cardTopStyle = css`
  ${flexFullCenter}
`

const CardMiddleStyle = css`
  ${flexFullCenter}
  margin-left: 30px;
`

const cardBottomStyle = css`
  ${flexFullCenter}
  flex-direction: column;
`

const cardBottomNumberStyle = css`
  ${flexFullCenter}
  justify-content: center;
`

const cardBottomInfoStyle = css`
  margin: 0 16px;
  font-size: 18px;
  line-height: 20px;
  vertical-align: middle;
  font-weight: 400;
`

const CardStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`

const smallCardStyle = css`
  width: 208px;
  height: 130px;
`

const bigCardStyle = css`
  width: 290px;
  height: 180px;
`

const smallChipStyle = css`
  width: 40px;
  height: 26px;
  left: 95px;
  top: 122px;

  background: #cbba64;
  border-radius: 4px;
`

const bigChipStyle = css`
  width: 55.04px;
  height: 35.77px;

  background: #cbba64;
  border-radius: 4px;

  font-size: 24px;
`

const cardTextStyle = css`
  margin: 0 16px;
  font-size: 14px;
  line-height: 16px;
  vertical-align: middle;
  font-weight: 400;
`

const cardTextBigStyle = css`
  margin: 0 16px;
  font-size: 18px;
  line-height: 20px;
  vertical-align: middle;
  font-weight: 400;
`

export {
  CardStyle,
  smallCardStyle,
  bigCardStyle,
  smallChipStyle,
  bigChipStyle,
  cardTextStyle,
  cardBottomNumberStyle,
  cardTextBigStyle,
  cardTopStyle,
  CardMiddleStyle,
  cardBottomStyle,
  cardBottomInfoStyle,
}
