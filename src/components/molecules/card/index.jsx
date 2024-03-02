import { useFormContext } from "react-hook-form";
import PropTypes from "prop-types";
import Box from "../../atoms/box";
import Text from "../../atoms/text";

// 이 부분을 커스텀 훅으로 빼면 좋을지?
const changeCardProps = (props, form) => {
  if (props.empty) {
    return { empty: true, type: props.type };
  } else {
    const nameValue = props.name || form.watch("name") || "NAME";
    const yearValue = props.year || form.watch("year") || "YY";
    const monthValue = props.month || form.watch("month") || "MM";
    const cardNumber1Value = props.cardNumber1 || form.watch("cardNumber1");
    const cardNumber2Value = props.cardNumber2 || form.watch("cardNumber2");
    const cardNumber3Value = props.cardNumber3 || form.watch("cardNumber3");
    const cardNumber4Value = props.cardNumber4 || form.watch("cardNumber4");
    const companyValue = props.cardCompany || form.watch("cardCompany");

    const cardNumberSplit = [
      cardNumber1Value,
      cardNumber2Value,
      cardNumber3Value.replace(/\d/g, "*"),
      cardNumber4Value.replace(/\d/g, "*"),
    ].filter((v) => v);

    return {
      type: props.type,
      name: nameValue,
      year: yearValue,
      month: monthValue,
      cardNumberSplit: cardNumberSplit,
      cardCompany: companyValue,
    };
  }
};

const Card = (props) => {
  const form = useFormContext();

  const { empty, type, name, year, month, cardNumberSplit, cardCompany } =
    changeCardProps(props, form);

  return (
    <Box className={"card-box"}>
      <Box
        className={[type === "big" ? "big-card" : "empty-card", cardCompany]}
      >
        {empty ? (
          "+"
        ) : (
          <>
            <Box className="card-top">
              <Text className={"card-text"}>{cardCompany}</Text>
            </Box>
            <Box className="card-middle">
              <Box className={"small-card__chip"} />
            </Box>
            <Box className={"card-bottom"}>
              <Box className={"card-bottom__number"}>
                <Text className={"card-text"}>
                  {cardNumberSplit.join(" - ")}
                </Text>
              </Box>
              <Box className={"card-bottom__info"}>
                <Text className={"card-text"}>{name}</Text>
                <Text className={"card-text"}>
                  {month}/{year}
                </Text>
              </Box>
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
};

Card.propTypes = {
  empty: PropTypes.bool,
  name: PropTypes.string,
  year: PropTypes.string,
  month: PropTypes.string,
  cardNumber1: PropTypes.string,
  cardNumber2: PropTypes.string,
  cardNumber3: PropTypes.string,
  cardNumber4: PropTypes.string,
  cardCompany: PropTypes.string,
};

export default Card;
