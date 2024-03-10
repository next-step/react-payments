import { GoDotFill } from "react-icons/go";

interface DotProps {
  width: string;
  color: string;
  size?: number;
}
export default function Dot({ size = 8, width, color }: DotProps) {
  return (
    <div style={{ width, textAlign: "center" }}>
      <GoDotFill size={size} color={color} />
    </div>
  );
}
