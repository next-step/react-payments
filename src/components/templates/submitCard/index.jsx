import PropTypes from "prop-types";
import Box from "../../atoms/box";
import Input from "../../atoms/input";
import Text from "../../atoms/text";
import Card from "../../molecules/card";
import { useFormContext } from "../../../hooks/useFormProvider";
import random from "../../../utils/func/random";

const SubmitCard = (props) => {
  const { setCardList, update } = props;
  const { handleSubmit, reset } = useFormContext();

  const handleAddCard = (data) => {
    update("list");

    if (data.id) {
      setCardList((prev) => ({ ...prev, [data.id]: data }));
    } else {
      const randomId = random(8);

      data.id = randomId;
      data.nickname = data.nickname || data.cardCompany;

      setCardList((prev) => ({ [randomId]: data, ...prev }));
    }

    reset();
  };

  return (
    <Box className={"app flex-column-center"}>
      <Box>
        <Text as="h2" className={["page-title", "mb-10"]}>
          카드등록이 완료되었습니다.
        </Text>
      </Box>

      <Box>
        <Card type="big" />
      </Box>

      <Box className={["input-container", "flex-center", "w-100"]}>
        <Input
          name="nickname"
          placeholder={"카드 별칭 (선택)"}
          className={["input-underline", "w-75"]}
          length={10}
        />
      </Box>

      <Box className={["button-box", "mt-50"]}>
        <button className={"button-text"} onClick={handleSubmit(handleAddCard)}>
          다음
        </button>
      </Box>
    </Box>
  );
};

SubmitCard.propTypes = {
  setCardList: PropTypes.func,
  update: PropTypes.func,
};

export default SubmitCard;
