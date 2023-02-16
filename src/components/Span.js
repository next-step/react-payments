export default function Span({ className, handlePrevButtonClick, children }) {
  // function handlePrevButtonClick() {
  //   console.log("prevButton clicked");
  // }
  return (
    <span className={className} onClick={handlePrevButtonClick}>
      {children}
    </span>
  );
}
