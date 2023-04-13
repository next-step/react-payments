export type TCardAlias = {
  alias: string;
  setAlias: React.Dispatch<React.SetStateAction<string>>;
  aliasRef: React.RefObject<HTMLInputElement>;
  handleAliasChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export type THookCard = TCardAlias;
