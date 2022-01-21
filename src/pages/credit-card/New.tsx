import cx from "classnames";
import SingleLayout, { TitleBar } from "../../layotus/Single";
import Card from "../../components/Card";
import Input from "../../components/Input";

function NewCreditCard() {
  const renderHeader = (
    <TitleBar
      title="카드 추가"
      renderLeft={{ linkUrl: "/credit-card", title: "뒤로" }}
      renderRight={{ linkUrl: "/credit-card/registered", title: "다음" }}
    />
  );

  return (
    <SingleLayout renderHeader={renderHeader}>
      <form>
        <div className="my-10 text-center">
          <Card />
          <div className="block mt-3">
            <button type="button">카드 선택</button>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
          <fieldset>
            <legend className="mb-2 text-xs text-[#525252]">카드 번호</legend>
            <Input type="text" className="text-center" isFullWidth />
          </fieldset>

          <fieldset>
            <legend className="w-full flex justify-between mb-2 text-xs text-[#525252]">
              <span>카드 소유자 이름 (선택)</span>
              <span className="font-bold">0/30</span>
            </legend>
            <Input
              type="text"
              placeholder="카드에 표시된 이름과 동일하게 입력하세요."
              isFullWidth
              maxLength={30}
            />
          </fieldset>

          <fieldset>
            <legend className="mb-2 text-xs text-[#525252]">만료일</legend>
            <Input
              type="text"
              placeholder="MM/YY"
              className="w-28 tabular-nums text-center"
            />
          </fieldset>

          <fieldset>
            <legend className="mb-2 text-xs text-[#525252]">
              보안 코드 (CVC/CVV)
            </legend>
            <Input type="text" className="w-20 text-center" maxLength={3} />
            <span
              className={cx(
                "ml-2",
                "inline-flex",
                "items-center",
                "justify-center",
                "w-7",
                "h-7",
                "rounded-full",
                "border",
                "border-[#bababa]",
                "text-[#969696]",
                "bg-white font-bold"
              )}
            >
              ?
            </span>
          </fieldset>

          <fieldset>
            <legend className="mb-2 text-xs text-[#525252]">
              카드 비밀번호
            </legend>
            <div className="flex gap-2">
              <Input type="text" className="w-12 text-center" maxLength={1} />
              <Input type="text" className="w-12 text-center" maxLength={1} />
              <Input
                type="text"
                className="w-12 text-center bg-white"
                value="•"
                readOnly
              />
              <Input
                type="text"
                className="w-12 text-center bg-white"
                value="•"
                readOnly
              />
            </div>
          </fieldset>
        </div>
      </form>
    </SingleLayout>
  );
}

export default NewCreditCard;
