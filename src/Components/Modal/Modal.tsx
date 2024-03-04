import ModalItem from "./ModalItem"; // 만약 ModalItem 컴포넌트가 다른 경로에 있다면, 해당 경로로 변경해주세요.

const cardName = [
  "클린 카드",
  "클겨 카드",
  "뽀뽀 카드",
  "뿌뿌 카드",
  "빠빠 카드",
  "삐삐 카드",
  "빡짝 카드",
  "뽀삐 카드",
];

const Modal = () => {
  return (
    <div className="modal-dimmed">
      <div className="modal">
        <div className="flex-center">
          {cardName.slice(0, 4).map((name, index) => (
            <ModalItem key={index} item={name} />
          ))}
        </div>
        <div className="flex-center">
          {cardName.slice(4).map((name, index) => (
            <ModalItem key={index + 4} item={name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;
