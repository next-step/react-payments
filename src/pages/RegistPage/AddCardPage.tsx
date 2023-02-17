import Card from "../../components/input/card/input";
import CardExpirationDateInput from "../../components/input/cardExpireDate/input";
import CardNumbersInput from "../../components/input/cardNumbers/input";
import CardOwnerInput from "../../components/input/cardOwner/input";
import CardPasswordInput from "../../components/input/cardPassword/input";
import CardCVCInput from "../../components/input/cardSecurityNumber/input";

const AddCardPage = () => {
  return (
    <div className="root">
      <div className="app">
        <h2 className="page-title"> &lt; 카드 추가 </h2>
        <Card />
        <CardNumbersInput />
        <CardExpirationDateInput />
        <CardOwnerInput />
        <CardCVCInput />
        <CardPasswordInput />
        <div className="button-box">
          <span className="button-text">다음</span>
        </div>
      </div>
    </div>
  );
};
export default AddCardPage;
