import { ArgTypes, Meta, StoryObj } from '@storybook/react';
import { useForm } from '@/hooks/useForm/useForm';
import { useAutoFocus } from '@/hooks/useAutoFocus/useAutoFocus';
import { createFields } from '@/stories/utils/createFields';
import { INPUT } from '../../input.constant';
import { DefaultInput, InputBox } from '../../atom';
import { Background } from '@/stories/components/Background';
import { InputType } from '../../input.type';
import { CardForm } from '@/pages/Payments/payments.type';

const meta = {
  title: 'Input/Molecule/InputGroup',
  component: InputBox,
  tags: ['autodocs'],
  argTypes: {
    maxLength: { control: 'number' },
    amount: { control: 'number' },
  },
} as Meta<typeof InputBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const InputGroup: Story = (args: ArgTypes) => {
  const textInputs = createFields({
    type: INPUT.TYPE.TEXT,
    amount: args.amount as unknown as number,
    maxLength: args.maxLength as unknown as number,
  });

  const { register, errors } = useForm<CardForm>();
  const { autoFocusRefs, handleAutoFocus } = useAutoFocus({
    amount: Object.values(textInputs).length,
  });

  const fieldKeys = Object.values(textInputs).map(({ name }) => name);
  const fieldsFulfilled = Object.values(fieldKeys).map(
    (key) => !errors[key as keyof CardForm]
  );
  const optionalClass = fieldsFulfilled.every((field) => field)
    ? 'text-fulfilled'
    : '';

  return (
    <Background
      title={`
    maxLength가 ${args.maxLength}이고, Input(Text)가 ${args.amount}개 들어있는 경우`}
    >
      <InputBox
        separator={{
          symbol: INPUT.BOX.SEPARATOR.HYPHEN,
          fieldsFulfilled,
        }}
        {...args}
      >
        {Object.values(textInputs).map(
          ({ name, type, validate, maxLength }, fieldIndex) => (
            <DefaultInput
              className={optionalClass}
              key={name}
              type={type as InputType}
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

InputGroup.args = {};
