import { useFormContext } from "react-hook-form";
import Box from "../../atoms/box";
import Input from "../../atoms/input";
import Text from "../../atoms/text";
import Card from "../../molecules/card";
import InputForm from "../../molecules/inputForm";
import InputLength from "../../molecules/inputLength";

const CardForm = () => {
  const {
    formState: { isValid },
  } = useFormContext();

  return (
    <>
      <button className="page-title">&lt; 카드 추가</button>

      <Card />

      <InputForm label="카드 번호">
        <Box className={"input-box"}>
          <Input
            required
            className={"input-basic"}
            type="number"
            length={4}
            name="cardNumber1"
          />
          <Input
            required
            className={"input-basic"}
            type="number"
            length={4}
            name="cardNumber2"
          />
          <Input
            required
            className={"input-basic"}
            type="number"
            length={4}
            secret
            name="cardNumber3"
          />
          <Input
            required
            className={"input-basic"}
            type="number"
            length={4}
            secret
            name="cardNumber4"
          />
        </Box>
      </InputForm>

      <InputForm label="만료일">
        <Box className={["input-box", "w-50"]}>
          <Input
            required
            name="month"
            className={["input-basic"]}
            type="number"
            length={2}
            max={"12"}
          />
          <Input
            required
            name="year"
            className={"input-basic"}
            type="number"
            length={2}
          />
        </Box>
      </InputForm>

      <InputForm
        label="카드 소유자 이름"
        option={<InputLength name={"name"} maxLength={"30"} />}
      >
        <Input required name="name" className={"input-basic"} maxLength={30} />
      </InputForm>

      <InputForm label="보안코드(CVC/CVV)">
        <Input
          required
          name="secretCode"
          className={["input-basic", "w-25"]}
          maxLength={3}
          type="number"
          secret
        />
      </InputForm>

      <InputForm label="카드 비밀번호">
        <Box className={"input-gap"}>
          <Input
            required
            name="cardPassword1"
            className={["input-basic", "w-15"]}
            maxLength={1}
            type="number"
            secret
          />
          <Input
            required
            name="cardPassword2"
            className={["input-basic", "w-15"]}
            maxLength={1}
            type="number"
            secret
          />

          <Text
            className={["input-basic", "w-15", "input-text", "input-password"]}
          >
            *
          </Text>

          <Text
            className={["input-basic", "w-15", "input-text", "input-password"]}
          >
            *
          </Text>
        </Box>

        <Box className={"button-box"}>
          <button className={"button-text"}>다음</button>
        </Box>
      </InputForm>
    </>
  );
};

export default CardForm;
