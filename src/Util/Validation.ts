export const Validaton = {
  NumberVal: (input: number) => {
    if (input.toString().length > 4) {
      return false;
    } else {
      return true;
    }
  },
  ExpireDateVal: (input: number) => {
    if (input.toString().length > 1) {
      return false;
    } else {
      return true;
    }
  },
};
