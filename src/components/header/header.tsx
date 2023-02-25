import { useRouter } from "hooks/useRouter";

type Props = {
  title: string;
};

const Header = ({ title }: Props) => {
  const { back } = useRouter();

  return (
    <h2 className="page-title" onClick={back}>
      <span>&lt; {title}</span>
    </h2>
  );
};

export default Header;
