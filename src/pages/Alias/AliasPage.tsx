import * as Styled from './AliasPage.styles';
import useAliasPage from 'hooks/useAliasPage';
import { getCardCompnayColor } from 'utils/Card';

const AliasPage = () => {
  const { handleSubmit, handleInput, currentCard, inputRef, inputLength } = useAliasPage();

  if (!currentCard) {
    return <div>존재하지 않은 카드입니다.</div>;
  }

  return (
    <Styled.Layout>
      <Styled.TextWrapper>
        {!currentCard.alias.length ? (
          <Styled.AliasText fontSize="lg" weight="bold" label="카드 등록이 완료되었습니다."></Styled.AliasText>
        ) : (
          <Styled.AliasText fontSize="lg" weight="bold" label="카드 별칭 수정"></Styled.AliasText>
        )}
      </Styled.TextWrapper>
      <Styled.CardWrapper>
        <Styled.AliasCard
          type="primary"
          size="big"
          color={getCardCompnayColor(currentCard.company)}
          company={currentCard.company}
          number={currentCard.cardNumbers}
          expireMonth={currentCard.expireDate.month}
          expireYear={currentCard.expireDate.year}
          ownerName={currentCard.ownerName}
        />
      </Styled.CardWrapper>
      <Styled.Box>
        <Styled.AliasInput
          type="text"
          placeholder="카드의 별칭 (선택) "
          theme="underline"
          active={true}
          ref={inputRef}
          onChange={handleInput}
        />
        <Styled.AliasText fontSize="s" weight="normal" label={`${inputLength}/10`} />
      </Styled.Box>
      <Styled.ButtonWrapper>
        <Styled.NextButton fontSize="lg" label="Next" onClick={handleSubmit} />
      </Styled.ButtonWrapper>
    </Styled.Layout>
  );
};

export default AliasPage;
