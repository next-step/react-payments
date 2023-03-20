import useCard from 'hooks/useCard';
import type { CardProps } from './Card.types';
import * as Styled from './Card.styles';

const Card = ({
  type,
  color,
  company,
  size,
  number,
  expireMonth,
  expireYear,
  ownerName,
  id,
  className,
  onClick,
}: CardProps) => {
  const { remove, modify } = useCard(id);

  return (
    <Styled.Layout onClick={onClick} id={id} className={className}>
      {type === 'primary' ? (
        <Styled.Container color={color} size={size}>
          <Styled.Top>
            {company && <Styled.CardText fontSize="s" weight="normal" label={company} />}
            {id && (
              <div>
                <Styled.CardButton onClick={modify} name="modify" size="1x" color="black" />
                <Styled.CardButton onClick={remove} name="remove" size="1x" color="black" />
              </div>
            )}
          </Styled.Top>
          <Styled.Middle>
            <Styled.Chip />
          </Styled.Middle>
          <Styled.Bottom>
            {number && <Styled.CardText fontSize="m" weight="normal" label={number} />}
            <Styled.InfoContainer>
              {!ownerName ? (
                <Styled.CardText fontSize="s" weight="bold" label={'Empty'} />
              ) : (
                <Styled.CardText fontSize="s" weight="bold" label={ownerName} />
              )}

              <Styled.CardText fontSize="s" weight="bold" label={`${expireMonth}/${expireYear}`} />
            </Styled.InfoContainer>
          </Styled.Bottom>
        </Styled.Container>
      ) : (
        <Styled.Container color={color} size={size}>
          +
        </Styled.Container>
      )}
    </Styled.Layout>
  );
};

export default Card;
