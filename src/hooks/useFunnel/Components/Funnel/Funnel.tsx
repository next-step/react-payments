import { Children, ReactElement, ReactNode } from "react";
import styles from "./Funnel.module.css";

export default function Funnel({
  children,
}: {
  children: ReactElement<typeof FunnelPage>[];
}) {
  function getCurrentComponent(child: ReactElement<typeof FunnelPage>) {
    const keyValue = getQueryParamValue("step");
    return (child as { props: Record<string, any> }).props["step"] === keyValue;
  }

  const filteredComponent = (
    Children.toArray(children) as ReactElement<typeof FunnelPage>[]
  ).filter(getCurrentComponent);

  return <div className={styles.step_container}>{filteredComponent}</div>;
}

const getQueryParamValue = (key: string) => {
  const queryParams = new URLSearchParams(window.location.search);
  return queryParams.get(key);
};

function FunnelPage({ children, step }: { children: ReactNode; step: string }) {
  return <>{children}</>;
}

Funnel.Page = FunnelPage;
