import { useState } from "react";
import { CARD_OWNER_NAME } from "../constants/card";

export default function useCardOwnerName() {
  const [ownerName, setOwnerName] = useState("");

  function isValidOwnerName(value) {
    if (value.length <= CARD_OWNER_NAME.MAX_LENGTH) return true;
    return false;
  }

  function handleOwnerName(event) {
    const { value } = event.target;
    if (isValidOwnerName(value)) setOwnerName(value);
    //console.log("handleOwnerName -value : ", value);
    //console.log("handleOwnerName - ownerName : ", ownerName);
  }

  return [ownerName, handleOwnerName];
}
