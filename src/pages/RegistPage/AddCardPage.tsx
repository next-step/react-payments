import NextButton from "../../components/button/nextButton";
import Card from "../../components/card/input";
import Header from "../../components/header/header";
import CardForm from "../../components/input/CardForm";

const AddCardPage = () => {
  return (
    <div className="root">
      <div className="app">
        <Header title="카드추가" />
        <Card />
        <CardForm />
        <NextButton />
      </div>
    </div>
  );
};
export default AddCardPage;
