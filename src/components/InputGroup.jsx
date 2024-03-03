import { useRef } from "react";
import { Fragment } from "react";
import NumberInput from "./NumberInput";

export default function InputGroup({ inputGroupInfoList, dividerText }) {
  const inputGroupRef = useRef([]);
  console.log(inputGroupInfoList);

  return (
    <div className="input-box">
      {inputGroupInfoList.map((inputGroupInfo, i) => {
        return (
          <Fragment key={i}>
            <NumberInput
              myref={(el) => (inputGroupRef.current[i] = el)}
              nextRef={
                i !== inputGroupInfoList.length
                  ? inputGroupRef.current[i + 1]
                  : undefined
              }
              value={inputGroupInfo.value}
              setValue={inputGroupInfo.setValue}
              type={inputGroupInfo.type}
              maxLength={inputGroupInfo.maxLength}
            />

            {i !== inputGroupInfoList.length - 1 ? (
              <input
                defaultValue={dividerText}
                className="input-basic"
                style={{
                  visibility:
                    inputGroupInfo.value.length === inputGroupInfo.maxLength
                      ? "visible"
                      : "hidden",
                }}
                disabled
              />
            ) : (
              ""
            )}
          </Fragment>
        );
      })}
    </div>
  );
}
