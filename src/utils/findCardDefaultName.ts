import { ThemeKeys } from 'styles/theme';
import { CardCompanies } from 'constants/Card';

export const findCardDefaultName = (color: ThemeKeys) => {
  const result = Object.entries(CardCompanies).find(
    ([_, value]) => value === color
  );
  return result && result[0];
};
