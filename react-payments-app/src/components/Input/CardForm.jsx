import CardNumbersInput from "./CardNumbers/input";
import CardExpirationDateInput from "./CardExpirationDate/input";
import CardOwnerInput from "./CardOwner/input";
import CardCVCInput from "./CardSecurityCode/input";
import CardPasswordInput from "./CardPassword/input";

const CardForm = ({ children }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    {
      /** TODO: create logic here */
    }
  };

  return (
    <>
      <div id="card-form" className="w-100">
        <form onSubmit={handleSubmit}>{children}</form>
      </div>
    </>
  );
};

export default CardForm;
