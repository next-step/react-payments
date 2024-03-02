import { Controller, useFormContext } from "react-hook-form";
import Box from "../../atoms/box";
import Text from "../../atoms/text";

const CARD_CATEGORY = [
  {
    name: "농협 카드",
    className: "nonghyup",
    value: "nonghyup",
  },
  {
    name: "신한 카드",
    className: "shinhan",
    value: "shinhan",
  },
  {
    name: "국민 카드",
    className: "kb",
    value: "kb",
  },
  {
    name: "우리 카드",
    className: "woori",
    value: "woori",
  },
  {
    name: "하나 카드",
    className: "hana",
    value: "hana",
  },
  {
    name: "롯데 카드",
    className: "lotte",
    value: "lotte",
  },
  {
    name: "삼성 카드",
    className: "samsung",
    value: "samsung",
  },
  {
    name: "현대 카드",
    className: "hyundai",
    value: "hyundai",
  },
];

const CardModal = () => {
  const { control } = useFormContext();

  return (
    <Box className="modal-dimmed">
      <Box className="modal">
        <Box className={"flex-center"}>
          {CARD_CATEGORY.map(({ name, className, value }) => (
            <Controller
              key={name}
              control={control}
              name="cardCompany"
              render={({ field: { onChange } }) => (
                <button
                  className="modal-item-container"
                  onClick={() => onChange(value)}
                >
                  <Box as="span" className={["modal-item-dot", className]} />
                  <Text as="span" className={"modal-item-name"}>
                    {name}
                  </Text>
                </button>
              )}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default CardModal;
