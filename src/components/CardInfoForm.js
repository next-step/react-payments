import Input from "./Input";
import Span from "./Span";

export default function CardInfoForm() {
  return (
    <>
      <div class="input-container">
        <Span className="input-title">카드 번호</Span>
        <div class="input-box">
          <Input className="input-basic" type="text"></Input>
          <Input className="input-basic" type="text"></Input>
          <Input className="input-basic" type="password"></Input>
          <Input className="input-basic" type="password"></Input>
        </div>
      </div>
      <div class="input-container">
        <Span className="input-title">만료일</Span>
        <div class="input-box w-50">
          <Input className="input-basic" type="text" placeholder="MM"></Input>
          <Input className="input-basic" type="text" placeholder="YY"></Input>
        </div>
      </div>
      <div class="input-container">
        <Span className="input-title">카드 소유자 이름(선택)</Span>
        <Input
          className="input-basic"
          type="text"
          placeholder="카드에 표시된 이름과 동일하게 입력하세요."
        ></Input>
      </div>
      <div class="input-container">
        <Span className="input-title">보안코드(CVC/CVV)</Span>
        <Input className="input-basic w-25" type="password"></Input>
      </div>
      <div class="input-container">
        <Span className="input-title">카드 비밀번호</Span>
        <Input className="input-basic w-15" type="password"></Input>
        <Input className="input-basic w-15" type="password"></Input>
        <Input className="input-basic w-15" type="password"></Input>
        <Input className="input-basic w-15" type="password"></Input>
      </div>
      <div class="button-box">
        <Span className="button-text">다음</Span>
      </div>
      {/* <AddedCard></AddedCard> */}
      {/* <CardList></CardList> */}
    </>
  );
}
