import type { PropsWithChildren } from 'react';
import { Tooltip } from 'components/@common';
import { ReactComponent as HelpIcon } from 'assets/HelpIcon.svg';

const Help = ({ children }: PropsWithChildren) => {
  return (
    <Tooltip content={children}>
      <HelpIcon className="mr-5 ml-5" />
    </Tooltip>
  );
};

export default Help;
