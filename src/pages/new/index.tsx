import formMachine from './context';
import { createActorContext } from '@xstate/react';
import { Stepper } from './steps';

export const FormMachineContext = createActorContext(formMachine);

const New = () => {
  return (
    <FormMachineContext.Provider>
      <Stepper />
    </FormMachineContext.Provider>
  );
};

export default New;
