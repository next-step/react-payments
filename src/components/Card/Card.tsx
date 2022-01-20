import { useMemo } from "react";
import cx from "classnames";

interface Props {
  nickname?: string;
  name?: string;
  number?: string;
  expirationDate?: string;
  size?: "sm" | "md";
  bgColor?: string;
  textColor?: string;
}

/**
 * @todo 유틸리티 함수로 재사용 시 공통 분리
 * @see 배열을 n의 배수로 나눠 반환
 * @returns ['1111', '2222', '3333', '4444']
 */
function divide(items: string[], n: number) {
  const length = items.length;
  const count = Math.ceil(length / n);
  const result = new Array(count)
    .fill("")
    .map(() => items.splice(0, n).join(""));
  return result;
}

function Card(props: Props) {
  const {
    nickname,
    name = "name",
    number,
    expirationDate = "MM/YY",
    size = "sm",
    bgColor = "#d2d2d2",
    textColor = "#525252",
  } = props;

  const memoizeNumbers = useMemo(() => {
    if (!number) return;
    const SPLIT_COUNT = 4;
    const numbers = number.split("").fill("•", 8);
    return divide(numbers, SPLIT_COUNT);
  }, [number]);

  const classes = {
    container: {
      size: {
        sm: ["max-w-[220px]", "p-[14px]", "text-xs"],
        md: ["max-w-[290px]", "p-5", "text-sm"],
      },
    },
    number: {
      size: {
        sm: ["text-sm"],
        md: ["text-base"],
      },
    },
  };

  return (
    <dl
      className={cx(
        "relative",
        "flex",
        "flex-col",
        "aspect-[1.58/1]",
        "font-semibold",
        "rounded-md",
        "shadow-md",
        classes.container.size[size]
      )}
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <div className="flex-1">
        {nickname && (
          <>
            <dt className="sr-only" aria-hidden>
              별칭
            </dt>
            <dd className="line-clamp-1">{nickname}</dd>
          </>
        )}
      </div>

      {memoizeNumbers && (
        <>
          <dt className="sr-only" aria-hidden>
            번호
          </dt>
          <dd
            className={cx(
              "tabular-nums",
              "text-center",
              "line-clamp-1",
              classes.number.size[size]
            )}
          >
            {memoizeNumbers.map((numbers, index) => (
              <span
                key={index}
                className={cx("mx-1", index >= 2 && "tracking-widest")}
              >
                {numbers}
              </span>
            ))}
          </dd>
        </>
      )}

      <div className="mt-2 justify-self-end flex justify-between">
        <dt className="sr-only" aria-hidden>
          이름
        </dt>
        <dd className="uppercase">{name}</dd>

        <dt className="sr-only" aria-hidden>
          유효기간
        </dt>
        <dd className="justify-self-end flex justify-between">
          {expirationDate}
        </dd>
      </div>

      {/* Chip */}
      <div className="absolute mt-[14%]">
        <span className="block bg-[#cbba64] rounded w-[40px] h-[26px]"></span>
      </div>
    </dl>
  );
}

export default Card;
