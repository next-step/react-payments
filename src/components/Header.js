import { Link } from "react-router-dom";

export default function Header({ className, routerPath, children }) {
  return (
    <h2 className={className}>
      {routerPath ? (
        <Link className="button-text" to={routerPath}>
          <div className="button-box">
            <span className="button-text">{children}</span>
          </div>
        </Link>
      ) : (
        <span>{children}</span>
      )}
    </h2>
  );
}
