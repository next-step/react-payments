import "../../styles/index.css";
import {
  FIRST_NUMBER,
  FOURTH_NUMBER,
  SECOND_NUMBER,
  THIRD_NUMBER,
} from "../constants/cardNumber";
import { MONTH, YEAR } from "../constants/expirationDate";
import Card from "./Card";

export default {
  title: "/Card",
  component: Card,
};

export const Basic = {
  args: {
    cardNumber: {
      [FIRST_NUMBER]: "",
      [SECOND_NUMBER]: "",
      [THIRD_NUMBER]: "",
      [FOURTH_NUMBER]: "",
    },
    alias: "별칭",
    expirationDateMM: "",
    expirationDateYY: "",
    cardOwnerName: "",
  },
};
