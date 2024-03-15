import { ArgTypes, Meta, StoryObj } from '@storybook/react';
import { useForm } from '@/hooks/useForm/useForm';
import { useAutoFocus } from '@/hooks/useAutoFocus/useAutoFocus';
import { createFields } from '@/stories/utils/createFields';
import { INPUT } from '../input.constant';
import { DefaultInput, InputBox } from '.';
import { Background } from '@/stories/components/Background';
import { InputType } from '../input.type';

const meta = {
  title: 'Input/Atom/InputBox',
  component: InputBox,
  tags: ['autodocs'],
  argTypes: {
    maxLength: { control: 'number' },
    amount: { control: 'number' },
  },
} as Meta<typeof InputBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const TextInputs: Story = (args: ArgTypes) => {
  const textInputs = createFields({
    type: INPUT.TYPE.TEXT,
    // 사용처에서 동적으로 Input의 개수를 컨트롤 할 수 있도록 구현해봤는데, 타입에서 에러가 발생하는 것을 보니 좋은 방식인지는 잘 모르겠습니다.
    // 다른 좋은 방법이 있을까요? :)
    amount: args.amount as unknown as number,
    maxLength: args.maxLength as unknown as number,
  });

  const { register, errors } = useForm();
  const { autoFocusRefs, handleAutoFocus } = useAutoFocus({
    amount: Object.values(textInputs).length,
  });

  const fieldKeys = Object.values(textInputs).map(({ name }) => name);
  const fieldsFulfilled = Object.values(fieldKeys).map((key) => !errors[key]);
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

TextInputs.args = {};
