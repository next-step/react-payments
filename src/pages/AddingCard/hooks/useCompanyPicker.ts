import { useState } from 'react';

import { CardCompany } from 'types/card';

const useCompanyPicker = () => {
  const [open, setOpen] = useState(true);
  const [company, setCompany] = useState<CardCompany>(CardCompany.Hana);

  const updateCompany = (company: CardCompany) => {
    setCompany(company);
    setOpen(false);
  };

  const openPicker = () => {
    setOpen(true);
  };

  return { open, company, updateCompany, openPicker };
};

export default useCompanyPicker;
