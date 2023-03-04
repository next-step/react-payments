import { Link } from "react-router-dom";

export default function Header({ className, linkToPath, linkText, children }) {
  return (
    <h2 className={className}>
      {linkToPath ? (
        <>
          <Link className="button-text" to={linkToPath}>
            {linkText}
          </Link>
          {children}
        </>
      ) : (
        <div className="page-title">{children}</div>
      )}
    </h2>
  );
}
