import { Input } from "@/components/atom/Input";
import { TPinInputProps } from "@/types/pinInput";

export const PinInput = ({ mask, ...props }: TPinInputProps) => {
  return (
    <>
      <Input
        className="pin-input"
        maxLength={1}
        {...(mask && { type: "password" })}
        style={{
          width: "45px",
          height: "45px",
          padding: 0,
          textAlign: "center",
        }}
        {...props}
      />
    </>
  );
};
