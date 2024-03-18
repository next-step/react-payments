import PropTypes from "prop-types";
import Box from "../../atoms/box";
import Text from "../../atoms/text";
import Card from "../../molecules/card";
import { useFormContext } from "../../../hooks/useFormProvider";

const CardList = (props) => {
  const { cardData, next } = props;
  const { reset } = useFormContext();
  const cardList = Object.values(cardData);

  const handleUpdateCard = (data) => {
    reset(data);
    next();
  };

  return (
    <Box className={["app", "flex-column-center"]}>
      <Box className={"flex-center"}>
        <Text className={["page-title", "mb-10"]}>보유 카드</Text>
      </Box>

      {cardList.map((data, idx) => (
        <button key={idx} onClick={() => handleUpdateCard(data)}>
          <Card {...data} />
          <Text as="span" className={"card-nickname"}>
            {data.nickname}
          </Text>
        </button>
      ))}

      <button onClick={next}>
        <Card empty />
      </button>
    </Box>
  );
};

CardList.propTypes = {
  cardData: PropTypes.object,
  next: PropTypes.func,
};

export default CardList;
