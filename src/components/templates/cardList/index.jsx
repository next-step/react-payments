import PropTypes from "prop-types";
import Box from "../../atoms/box";
import Text from "../../atoms/text";
import Card from "../../molecules/card";
import { Fragment } from "react";

const CardList = (props) => {
  const { cardList, next } = props;

  console.log(cardList);
  return (
    <Box className={["app", "flex-column-center"]}>
      <Box className={"flex-center"}>
        <Text className={["page-title", "mb-10"]}>보유 카드</Text>
      </Box>

      {cardList.map(
        (
          { name, year, month, cardNumberSplit, cardCompany, nickname },
          idx
        ) => (
          <Fragment key={idx}>
            <Card
              name={name}
              year={year}
              month={month}
              cardNumberSplit={cardNumberSplit}
              cardCompany={cardCompany}
            />
            <Text as="span" className={"card-nickname"}>
              {nickname}
            </Text>
          </Fragment>
        )
      )}

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
