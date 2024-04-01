import { Validation } from '@/utils/validation';
import { InputBoxWithUseFormProps, Field } from '@/stories/types/input';

export const createFields = ({
  type,
  amount,
  maxLength,
}: InputBoxWithUseFormProps) => {
  const fields = {} as Record<string, Field>;

  for (let i = 0; i < amount; i++) {
    fields[`field${i}`] = {
      name: `field${i}`,
      type,
      maxLength,
      validate: (field: string) =>
        Validation.checkLength(field, maxLength)
          ? false
          : '카드 번호를 입력해주세요',
    };
  }

  return fields;
};
