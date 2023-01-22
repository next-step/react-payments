import { ICard } from "../domain";
import BaseStorage from "./BaseStorage";

const myCardsStorage = new BaseStorage<ICard[]>("myCards");

export default myCardsStorage;
