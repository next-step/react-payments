import { CardInput } from '@/features/card/components/CardInput';

export const CardInputContainer = () => {
  return (
    <>
      <CardInput.Display cardName={''} companyName={''} MM={12} YY={23} />
      <CardInput.Number />
      <CardInput.ExpirationDate />
      <CardInput.Owner />
      <CardInput.SecurityCode />
      <CardInput.Password />
    </>
  );
};
