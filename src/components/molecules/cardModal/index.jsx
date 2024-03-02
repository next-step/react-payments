import { Controller, useFormContext } from "react-hook-form";
import PropTypes from "prop-types";
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

const CardModal = (props) => {
  const { control } = useFormContext();
  const { toggleModal, submit } = props;

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
                  // 방식을 onChange 때문에 밖으로 뻇는데 이런 방식이 괜찮을까??
                  onClick={() => {
                    onChange(value);
                    toggleModal();
                    submit();
                  }}
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

CardModal.propTypes = {
  toggleModal: PropTypes.func,
  submit: PropTypes.func,
};

export default CardModal;
