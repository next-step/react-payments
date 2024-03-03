import React, { PropsWithChildren } from 'react';

const Form = ({ children }: PropsWithChildren) => {
  return <form>{children}</form>;
};

export default Form;
