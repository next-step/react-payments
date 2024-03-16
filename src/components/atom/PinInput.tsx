import { Input } from "@/components/atom/Input";
import { TPinInputProps } from "@/types/pinInput";
import { forwardRef } from "react";

export const PinInput = forwardRef<HTMLInputElement, TPinInputProps>(
  ({ mask, ...props }, ref) => {
    return (
      <>
        <Input
          className="pin-input"
          maxLength={1}
          {...(mask && { type: "password" })}
          {...props}
          ref={ref}
          style={{
            width: "45px",
            height: "45px",
            padding: 0,
            textAlign: "center",
            ...props.style,
          }}
        />
      </>
    );
  }
);
