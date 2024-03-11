import { Card } from '../atoms/Card';

export default function CardDisplay() {
  return (
    <Card.Box>
      <Card.Size size='small'>
        <Card.Top>
          <Card.Text>클린카드</Card.Text>
        </Card.Top>

        <Card.Middle>
          <Card.Size size='small' hasChip />
        </Card.Middle>

        <Card.Bottom>
          <Card.Bottom as='number'>
            <Card.Text>1111 - 2222 - oooo - oooo</Card.Text>
          </Card.Bottom>
          <Card.Bottom as='info'>
            <Card.Text>NAME</Card.Text>
            <Card.Text>MM / YY</Card.Text>
          </Card.Bottom>
        </Card.Bottom>
      </Card.Size>
    </Card.Box>
  );
}
