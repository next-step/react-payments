import React from 'react';
import { Root, PageTitle, App, InputTitle } from 'components/UI';
import Input from 'components/Input';
import { InputBox, InputContainer } from 'components/Input/input.style';
import { ButtonBox, ButtonText } from 'components/Button/button.style';
import {
  CardBottom,
  CardBottomInfo,
  CardBottomNumber,
  CardBox,
  CardMiddle,
  CardText,
  CardTop,
  EmptyCard,
  SmallCard,
  SmallCardChip,
} from 'components/Card/card.style';

const CardAddContainer: React.VFC = () => {
  return (
    <>
      {/* PAGE 01 */}

      <h2>1️⃣ 카드 추가</h2>
      <Root>
        <App>
          <PageTitle> 카드 추가</PageTitle>
          <CardBox>
            <EmptyCard>
              <CardTop />
              <CardMiddle>
                <SmallCardChip />
              </CardMiddle>
              <CardBottom>
                <CardBottomInfo>
                  <CardText>NAME</CardText>
                  <CardText>MM / YY</CardText>
                </CardBottomInfo>
              </CardBottom>
            </EmptyCard>
          </CardBox>
          <InputContainer>
            <InputTitle>카드 번호</InputTitle>
            <InputBox>
              <Input type="text" />
              <Input type="text" />
              <Input type="password" />
              <Input type="password" />
            </InputBox>
          </InputContainer>
          <InputContainer>
            <InputTitle>만료일</InputTitle>
            <InputBox width={50}>
              <Input type="text" placeholder="MM" />
              <Input type="text" placeholder="YY" />
            </InputBox>
          </InputContainer>
          <InputContainer>
            <InputTitle>카드 소유자 이름(선택)</InputTitle>
            <Input
              type="text"
              placeholder="카드에 표시된 이름과 동일하게 입력하세요."
            />
          </InputContainer>
          <InputContainer>
            <InputTitle>보안코드(CVC/CVV)</InputTitle>
            <Input width={25} type="password" />
          </InputContainer>
          <InputContainer>
            <InputTitle>카드 비밀번호</InputTitle>
            <Input width={15} type="password" />
            <Input width={15} type="password" />
            <Input width={15} type="password" />
            <Input width={15} type="password" />
          </InputContainer>
          <ButtonBox>
            <ButtonText>다음</ButtonText>
          </ButtonBox>
        </App>
      </Root>

      {/* PAGE 02 */}

      <h2>2️⃣ 카드 추가 - 카드사 선택</h2>
      <Root>
        <App>
          <PageTitle>카드 추가</PageTitle>
          <CardBox>
            <SmallCard>
              <CardTop>
                <CardText>클린카드</CardText>
              </CardTop>
              <CardMiddle>
                <SmallCardChip />
              </CardMiddle>
              <CardBottom>
                <CardBottomNumber>
                  <CardText>1111 - 2222 - oooo - oooo</CardText>
                </CardBottomNumber>
                <CardBottomInfo>
                  <CardText>NAME</CardText>
                  <CardText>MM / YY</CardText>
                </CardBottomInfo>
              </CardBottom>
            </SmallCard>
          </CardBox>
          <InputContainer>
            <InputTitle>카드 번호</InputTitle>
            <InputBox>
              <Input type="text" value="1111" />
              <Input type="text" value="2222" />
              <Input type="password" value="1111" />
              <Input type="password" value="1111" />
            </InputBox>
          </InputContainer>
          <InputContainer>
            <InputTitle>만료일</InputTitle>
            <InputBox width={50}>
              <Input type="text" placeholder="MM" />
              <Input type="text" placeholder="YY" />
            </InputBox>
          </InputContainer>
          <InputContainer>
            <InputTitle>카드 소유자 이름(선택)</InputTitle>
            <Input
              type="text"
              placeholder="카드에 표시된 이름과 동일하게 입력하세요."
            />
          </InputContainer>
          <InputContainer>
            <InputTitle>보안코드(CVC/CVV)</InputTitle>
            <Input width={25} type="password" />
          </InputContainer>
          <InputContainer>
            <InputTitle>카드 비밀번호</InputTitle>
            <Input width={15} type="password" />
            <Input width={15} type="password" />
            <Input width={15} type="password" />
            <Input width={15} type="password" />
          </InputContainer>
          <ButtonBox>
            <ButtonText>다음</ButtonText>
          </ButtonBox>
        </App>
      </Root>

      {/* PAGE 03 */}

      <h2>3️⃣ 카드 추가 - 입력 완료</h2>
      <Root>
        <App>
          <PageTitle>카드 추가</PageTitle>
          <CardBox>
            <SmallCard>
              <CardTop>
                <CardText>클린카드</CardText>
              </CardTop>
              <CardMiddle>
                <SmallCardChip />
              </CardMiddle>
              <CardBottom>
                <CardBottomNumber>
                  <CardText>1111 - 2222 - oooo - oooo</CardText>
                </CardBottomNumber>
                <CardBottomInfo>
                  <CardText>YUJO</CardText>
                  <CardText>12 / 23</CardText>
                </CardBottomInfo>
              </CardBottom>
            </SmallCard>
          </CardBox>
          <InputContainer>
            <InputTitle>카드 번호</InputTitle>
            <InputBox>
              <Input type="text" value="1111" />
              <Input type="text" value="2222" />
              <Input type="password" value="1111" />
              <Input type="password" value="1111" />
            </InputBox>
          </InputContainer>
          <InputContainer>
            <InputTitle>만료일</InputTitle>
            <InputBox width={50}>
              <Input type="text" placeholder="MM" value="12" />
              <Input type="text" placeholder="YY" value="23" />
            </InputBox>
          </InputContainer>
          <InputContainer>
            <InputTitle>카드 소유자 이름(선택)</InputTitle>
            <Input type="text" value="YUJO" />
          </InputContainer>
          <InputContainer>
            <InputTitle>보안코드(CVC/CVV)</InputTitle>
            <Input width={25} type="password" value="111" />
          </InputContainer>
          <InputContainer>
            <InputTitle>카드 비밀번호</InputTitle>
            <Input width={15} type="password" value="1" />
            <Input width={15} type="password" value="1" />
            <Input width={15} type="password" value="1" />
            <Input width={15} type="password" value="1" />
          </InputContainer>
          <ButtonBox>
            <ButtonText>다음</ButtonText>
          </ButtonBox>
        </App>
      </Root>
    </>
  );
};

export default CardAddContainer;
