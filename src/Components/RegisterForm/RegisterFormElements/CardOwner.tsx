import useOwnerName from "../../../Hooks/Input/useOwnerName";

const CardOwner = () => {
  const { ownerName, handleNameChange } = useOwnerName();

  return (
    <div className="input-container">
      <div className="input-length">
        <span className="input-title">카드 소유자 이름(선택)</span>
        <span className="input-title">{ownerName?.length}/30</span>
      </div>
      <input
        type="text"
        className="input-basic"
        placeholder="카드에 표시된 이름과 동일하게 입력하세요."
        value={ownerName || ""}
        onChange={handleNameChange}
      />
    </div>
  );
};

export default CardOwner;
