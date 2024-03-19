export const Validation = {
  NumberVal: (input: number) => (input.toString().length > 4 ? false : true),
  ExpireDate: {
    monthCheck: (input: number) => (input > 12 ? false : true),
    dayCheck: (input: number) => (input.toString().length > 2 ? false : true),
  },
  OwnerName: (input: string) => (input.length > 30 ? false : true),
  PassWord: (input: string) => (isNaN(Number(input)) ? false : true),
  CvcCcv: {
    NumberCheck: (input: string) => (isNaN(Number(input)) ? false : true),
    lengthCheck: (input: string) => (input.length > 2 ? false : true),
  },
  CardNickName: {
    lengthCheck: (input: string) => (input.length > 10 ? false : true),
  },
};
