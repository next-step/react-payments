import { Input } from "@/components/atom/Input";
import { TPinInputProps } from "@/types/pinInput";

export const PinInput = ({ mask, ...props }: TPinInputProps) => {
  return (
    <>
      <Input
        className="pin-input"
        {...props}
        maxLength={1}
        {...(mask && { type: "password" })}
        style={{
          width: "2.5rem",
          height: "2.5rem",
          padding: 0,
          textAlign: "center",
        }}
      />
    </>
  );
};
