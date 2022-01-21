import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface LayoutProps {
  renderHeader: ReactNode;
  children: ReactNode;
}

interface TitleBarProps {
  title: string | ReactNode;
  renderLeft?: {
    title?: string | ReactNode;
    linkUrl?: string;
  };
  renderRight?: {
    title?: string | ReactNode;
    linkUrl?: string;
  };
}

function SingleLayout({ renderHeader, children }: LayoutProps) {
  return (
    <div className="mx-auto max-w-3xl">
      {renderHeader && <header>{renderHeader}</header>}
      <main className="px-4">{children}</main>
    </div>
  );
}

function TitleBar({ title, renderLeft, renderRight }: TitleBarProps) {
  return (
    <div className="flex justify-between p-4">
      {title && renderLeft && (
        <div>
          {renderLeft && (
            <span className="font-bold">
              {renderLeft.linkUrl ? (
                <Link to={renderLeft.linkUrl || ""}>{renderLeft.title}</Link>
              ) : (
                renderLeft.title
              )}
            </span>
          )}
          {title && <span className="ml-2">{title}</span>}
        </div>
      )}

      {renderRight && (
        <div className="font-bold">
          {renderRight.linkUrl ? (
            <Link to={renderRight.linkUrl || ""}>{renderRight.title}</Link>
          ) : (
            renderRight.title
          )}
        </div>
      )}
    </div>
  );
}

export default SingleLayout;
export { TitleBar };
