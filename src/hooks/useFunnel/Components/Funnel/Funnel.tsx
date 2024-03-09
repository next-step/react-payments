/* eslint-disable @typescript-eslint/no-unused-vars */
import { Children, ReactElement, ReactNode, useEffect, useState } from "react";
import styles from "./Funnel.module.css";

const getQueryParamValue = (key: string) => {
  const queryParams = new URLSearchParams(window.location.search);
  return queryParams.get(key);
};
export default function Funnel({
  children,
}: {
  children: ReactElement<typeof FunnelPage>[];
}) {
  const [currentComponent, setCurrentComponent] =
    useState<ReactElement<typeof FunnelPage>>();

  function getCurrentComponent(child: ReactElement<typeof FunnelPage>) {
    const keyValue = getQueryParamValue("step");
    return (
      (child as unknown as { props: Record<string, unknown> }).props["step"] ===
      keyValue
    );
  }

  useEffect(() => {
    const filteredComponent = (
      Children.toArray(children) as ReactElement<typeof FunnelPage>[]
    ).find(getCurrentComponent);
    setCurrentComponent(filteredComponent);
  }, [children]);

  return <div className={styles.step_container}>{currentComponent}</div>;
}

function FunnelPage({ children, step }: { children: ReactNode; step: string }) {
  return <>{children}</>;
}

Funnel.Page = FunnelPage;
