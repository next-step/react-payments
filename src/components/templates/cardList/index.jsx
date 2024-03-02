import PropTypes from "prop-types";
import Box from "../../atoms/box";
import Text from "../../atoms/text";
import Card from "../../molecules/card";

const CardList = (props) => {
  const { cardList, next } = props;

  return (
    <Box className={["app", "flex-column-center"]}>
      <Box className={"flex-center"}>
        <Text className={["page-title", "mb-10"]}>보유 카드</Text>
      </Box>

      {cardList.map(({ name, year, month, cardNumberSplit, cardCompany }) => {
        <Card
          name={name}
          year={year}
          month={month}
          cardNumberSplit={cardNumberSplit}
          cardCompany={cardCompany}
        />;
      })}

      <button onClick={next}>
        <Card empty />
      </button>
    </Box>
  );
};

CardList.propTypes = {
  cardList: PropTypes.array,
  next: PropTypes.func,
};

export default CardList;
