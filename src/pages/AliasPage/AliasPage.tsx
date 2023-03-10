import styled from 'styled-components';
import Card from 'components/common/Card/Card';
import Text from 'components/common/Text/Text';
import Input from 'components/common/Input/Input';
import Button from 'components/common/Button/Button';
import useAliasPage from 'hooks/useAliasPage';
import { getCardColor } from 'utils/Card';

const AliasPage = () => {
  const { handleSubmit, handleInput, currentCard, inputRef, inputLength } = useAliasPage();

  if (!currentCard) {
    return <div>존재하지 않은 카드입니다.</div>;
  }

  return (
    <Layout>
      <TextWrapper>
        {!currentCard.alias.length ? (
          <Text fontSize="lg" weight="bold" label="카드 등록이 완료되었습니다."></Text>
        ) : (
          <Text fontSize="lg" weight="bold" label="카드 별칭 수정"></Text>
        )}
      </TextWrapper>
      <CardWrapper>
        <Card
          type="primary"
          size="big"
          color={getCardColor(currentCard.company)}
          company={currentCard.company}
          number={currentCard.cardNumbers}
          expireMonth={currentCard.expireDate.month}
          expireYear={currentCard.expireDate.year}
          ownerName={currentCard.ownerName}
        />
      </CardWrapper>
      <Box>
        <Input
          type="text"
          placeholder="카드의 별칭 (선택) "
          theme="underline"
          active={true}
          ref={inputRef}
          onChange={handleInput}
        />
        <Text fontSize="s" weight="normal" label={`${inputLength}/10`} />
      </Box>
      <ButtonWrapper>
        <Button fontSize="lg" label="Next" onClick={handleSubmit} />
      </ButtonWrapper>
    </Layout>
  );
};

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CardWrapper = styled.div`
  margin-top: 100px;
`;

const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  color: #383838;
  margin: 40px 0px;
`;
const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  padding: 20px;
  margin-top: 30px;
  width: 100%;
`;

const ButtonWrapper = styled.div`
  width: 90%;
  text-align: right;
  margin: 30px;
`;

export default AliasPage;
