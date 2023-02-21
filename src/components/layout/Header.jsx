import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const currentPage = useLocation().pathname;
  const pageTitle = currentPage === "/" ? "보유카드" : "카드등록";

  return (
    <div className="flex-center">
      {currentPage !== "/" && (
        <div className="page-navigator mb-10" onClick={() => navigate(-1)}>
          &lt;
        </div>
      )}
      <h2 className="page-title mb-10">{pageTitle}</h2>
    </div>
  );
};

export default Header;
