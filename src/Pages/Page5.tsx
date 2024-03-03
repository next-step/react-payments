import CardBottom from "../Components/Cards/CardElements/Bottom/CardBottom";
import CardBottomNumber from "../Components/Cards/CardElements/Bottom/CardBottomNumber";
import CardChip from "../Components/Cards/CardElements/CardChip";
import CardInfo from "../Components/Cards/CardElements/CardInfo";
import CardLayout from "../Components/Cards/CardElements/Layout/CardLayout";
import EmptyCardLayout from "../Components/Cards/CardElements/Layout/EmptyCardLayout";
import SmallCardLayout from "../Components/Cards/CardElements/Layout/SmallCardLayout";
import CardMiddle from "../Components/Cards/CardElements/Middle/CardMiddle";
import CardTop from "../Components/Cards/CardElements/Top/CardTop";
import H2Text from "../Components/Text/H2Text";
import SpanText from "../Components/Text/SpanText";

const Page5 = () => {
  return (
    <>
      <H2Text>5️⃣ 카드 목록</H2Text>
      <div className="root">
        <div className="app flex-column-center">
          <div className="flex-center">
            <H2Text className="page-title mb-10">보유 카드</H2Text>
          </div>
          <CardLayout>
            <SmallCardLayout>
              <CardTop>
                <SpanText className="card-text">클린카드</SpanText>
              </CardTop>
              <CardMiddle>
                <CardChip />
              </CardMiddle>
              <CardBottom>
                <CardBottomNumber />
                <CardInfo />
              </CardBottom>
            </SmallCardLayout>
          </CardLayout>
          <SpanText className="card-nickname">법인카드</SpanText>
          <CardLayout>
            <EmptyCardLayout>+</EmptyCardLayout>
          </CardLayout>
        </div>
      </div>
    </>
  );
};

export default Page5;
