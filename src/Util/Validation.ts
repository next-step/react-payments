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
  OwnerName: (input: string) => {
    if (input.length > 30) {
      return false;
    } else {
      return true;
    }
  },
  PassWord: (input: string) => {
    console.log("input check", input);
    if (isNaN(Number(input))) {
      return false;
    } else {
      return true;
    }
  },
};
