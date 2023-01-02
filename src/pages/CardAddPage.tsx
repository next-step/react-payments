import { Button, Input } from '@/components';
import { InputCardNumbers } from '@/templates/CardAddPage';

export default function CardAddPage() {
  return (
    <div className="app">
      <h2 className="page-title">{'< 카드 추가'}</h2>
      <div className="card-box">
        <div className="empty-card">
          <div className="card-top"></div>
          <div className="card-middle">
            <div className="small-card__chip"></div>
          </div>
          <div className="card-bottom">
            <div className="card-bottom__info">
              <span className="card-text">NAME</span>
              <span className="card-text">MM / YY</span>
            </div>
          </div>
        </div>
      </div>
      <InputCardNumbers />
      <Input title="만료일">
        <Input.Box className="w-50">
          <Input.Base type="text" placeholder="MM" />
          <Input.Base type="text" placeholder="YY" />
        </Input.Box>
      </Input>
      <Input title="카드 소유자 이름(선택)">
        <Input.Box>
          <Input.Base
            type="text"
            className="input-basic"
            placeholder="카드에 표시된 이름과 동일하게 입력하세요."
          />
        </Input.Box>
      </Input>
      <Input title="보안코드(CVC/CVV)">
        <Input.Box>
          <Input.Base className="w-25" type="password" />
        </Input.Box>
      </Input>
      <Input title="카드 비밀번호">
        <Input.Box>
          <Input.Base className="w-15" type="password" />
          <Input.Base className="w-15" type="password" />
          <Input.Base className="w-15" type="password" />
          <Input.Base className="w-15" type="password" />
        </Input.Box>
      </Input>
      <div className="button-box">
        <Button disabled={true}>다음</Button>
      </div>
    </div>
  );
}
