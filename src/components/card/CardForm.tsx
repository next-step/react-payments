import classNames from 'classnames';
import React, { ReactNode } from 'react';

const CardForm = ({ status, children }: { status: string; children: ReactNode }) => {
  return <div className={classNames(`${status}-card`)}>{children}</div>;
};

export default CardForm;
