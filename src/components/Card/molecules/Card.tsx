import CardBottom from '../atoms/CardBottom';
import CardBox from '../atoms/CardBox';
import CardMiddle from '../atoms/CardMiddle';
import CardSize from '../atoms/CardSize';
import CardText from '../atoms/CardText';
import CardTop from '../atoms/CardTop';

export default function Card() {
  return (
    <CardBox>
      <CardSize size='small'>
        <CardTop>
          <CardText>클린카드</CardText>
        </CardTop>

        <CardMiddle>
          <CardSize size='small' chip></CardSize>
        </CardMiddle>

        <CardBottom>
          <CardBottom as='number'>
            <CardText>1111 - 2222 - oooo - oooo</CardText>
          </CardBottom>
          <CardBottom as='info'>
            <CardText>NAME</CardText>
            <CardText>MM / YY</CardText>
          </CardBottom>
        </CardBottom>
      </CardSize>
    </CardBox>
  );
}
