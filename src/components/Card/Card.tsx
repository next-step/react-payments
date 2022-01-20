import React from "react";

interface Props {
  title: string;
  name: string;
  cardNumber: string;
  expirationDate: string;
  size: "md" | "lg";
}

function Card(props: Props) {
  const { size = "md" } = props;

  return (
    <dl className="relative flex flex-col max-w-[220px] aspect-[1.58/1] p-[14px] bg-[#d2d2d2] text-xs font-semibold rounded-md shadow-md text-[#525252]">
      <div className="flex-1">
        <dt className="sr-only" aria-hidden>
          별칭
        </dt>
        <dd className="text-[#000000]">로이드카드</dd>
      </div>

      <div className="absolute mt-[14%]">
        <span className="block bg-[#cbba64] rounded w-[40px] h-[26px]"></span>
      </div>

      <dt className="sr-only" aria-hidden>
        번호
      </dt>
      <dd className="tabular-nums text-center text-sm">1111 2222 1111 2222</dd>

      <div className="mt-2 justify-self-end flex justify-between">
        <dt className="sr-only" aria-hidden>
          이름
        </dt>
        <dd className="uppercase">name</dd>

        <dt className="sr-only" aria-hidden>
          유효기간
        </dt>
        <dd className="justify-self-end flex justify-between">MM/YY</dd>
      </div>
    </dl>
  );
}

export default Card;
