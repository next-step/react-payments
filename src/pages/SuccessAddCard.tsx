import Button from "common/components/button/Button";
import Title from "common/components/title/Title";
import Layout from "common/components/layout";
import { CurrentPage } from "common/types/page.type";
import Card from "common/components/card/Card";

import useCardInput from "features/card/hooks/useCardInput";

interface SuccessAddCardProps {
  onChangePage: (page: CurrentPage) => void;
}

export default function SuccessAddCard({ onChangePage }: SuccessAddCardProps) {
  const { cardInfo } = useCardInput();

  return (
    <Layout.Success>
      <Title className="page-title mb-10">카드등록이 완료되었습니다.</Title>
      <Card mode="complete" {...cardInfo} />
      <Button onClick={() => onChangePage("cardList")}>확인</Button>
    </Layout.Success>
  );
}
