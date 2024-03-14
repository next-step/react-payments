import { ArgTypes, Meta, StoryObj } from '@storybook/react';
import { useForm } from '@/hooks/useForm/useForm';
import { useAutoFocus } from '@/hooks/useAutoFocus/useAutoFocus';
import { createFields } from '@/stories/utils/createFields';
import { INPUT } from '../input.constant';
import { DefaultInput, InputBox } from '.';
import { Background } from '@/stories/components/Background';

const meta = {
  title: 'Input/Atom/InputBox',
  component: InputBox,
  argTypes: {
    maxLength: { control: 'number' },
    amount: { control: 'number' },
  },
} as Meta<typeof InputBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const InputBoxWithUseForm: Story = (args: ArgTypes) => {
  const inputBoxWithUseFormFields = createFields({
    type: INPUT.TYPE.TEXT,
    amount: 3,
    maxLength: 4,
  });

  const { register, errors } = useForm();
  const { autoFocusRefs, handleAutoFocus } = useAutoFocus({
    amount: Object.values(inputBoxWithUseFormFields).length,
  });

  const fieldKeys = Object.values(inputBoxWithUseFormFields).map(
    ({ name }) => name
  );
  const fieldsFulfilled = Object.values(fieldKeys).map((key) => !errors[key]);

  return (
    <Background>
      <InputBox
        separator={{
          symbol: INPUT.BOX.SEPARATOR.HYPHEN,
          fieldsFulfilled,
        }}
        {...args}
      >
        {Object.values(inputBoxWithUseFormFields).map(
          ({ name, type, validate, maxLength }, fieldIndex) => (
            <DefaultInput
              key={name}
              type={type}
              ref={autoFocusRefs[fieldIndex]}
              {...register(name, {
                maxLength,
                validate,
                onChange: (value: string) => {
                  const parsedValue = value.replace(/\D/g, '');

                  if (maxLength) {
                    handleAutoFocus({
                      value: parsedValue,
                      index: fieldIndex,
                      maxLength,
                    });
                  }

                  return parsedValue;
                },
              })}
            />
          )
        )}
      </InputBox>
    </Background>
  );
};

InputBoxWithUseForm.args = {};
