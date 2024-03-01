import { useState } from "react";

import { CurrentPage } from "common/types/page.type";

import SuccessAddCard from "pages/SuccessAddCard";
import CardList from "pages/CardList";
import AddCard from "pages/AddCard";

export default function App() {
  const [currentPage, setCurrentPage] = useState<CurrentPage>("addCard");

  const handleChangeCurrentPage = (page: CurrentPage) => {
    setCurrentPage(page);
  };

  return (
    <>
      {currentPage === "addCard" && (
        <AddCard onChangePage={handleChangeCurrentPage} />
      )}
      {currentPage === "addCardSuccess" && <SuccessAddCard />}
      {currentPage === "cardList" && <CardList />}
    </>
  );
}
