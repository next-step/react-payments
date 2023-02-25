import { useRouter } from "hooks/useRouter";

type NextButtonProps = {
  path: string;
};

const NextButton = ({ path }: NextButtonProps) => {
  const { go } = useRouter();
  return (
    <div className="button-box">
      <span className="button-text" onClick={() => go(path)}>
        다음
      </span>
    </div>
  );
};

export default NextButton;
