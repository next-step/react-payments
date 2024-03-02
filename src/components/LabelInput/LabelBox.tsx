import { ReactNode } from "react";
import styles from "./LabelBox.module.css";
import Box from "../Box/Box";

interface LabelBox {
  description: string;
  children: ReactNode;
}

export default function LabelBox({
  description,
  children,
}: Readonly<LabelBox>) {
  return (
    <div>
      <div className={styles.description}>{description}</div>
      <div className={styles.labelBox}>
        <Box height="45px" backgroundColor="#ECEBF1">
          {children}
        </Box>
      </div>
    </div>
  );
}
