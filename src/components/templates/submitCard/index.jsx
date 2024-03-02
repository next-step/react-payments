import PropTypes from "prop-types";
import Box from "../../atoms/box";
import Input from "../../atoms/input";
import Text from "../../atoms/text";
import Card from "../../molecules/card";

const SubmitCard = (props) => {
  const { setCardList, update } = props;

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
        <Input name="nickname" className={["input-underline", "w-75"]} />
      </Box>

      <Box className={["button-box", "mt-50"]}>
        <button className={"button-text"} onClick={() => update("list")}>
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
