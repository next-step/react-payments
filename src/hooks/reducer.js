// TODO : 검증을 통과하지못하면 검증함수에서 받아온 메시지를 setState를 통해 리렌더링을 트리거
export default function reducer(state, action) {
  switch (action.type) {
    case "cardNumber": {
      const { name, value } = action.target;
      return {
        ...state,
        [action.type]: { ...state[action.type], [name]: value },
      };
    }
    case "cardExpiration": {
      const { name, value } = action.target;
      return {
        ...state,
        [action.type]: { ...state[action.type], [name]: value },
      };
    }
    case "cardOwnerName": {
      const { value } = action.target;
      return { ...state, [action.type]: value };
    }
    case "cardSecurityCode": {
      const { value } = action.target;
      return { ...state, [action.type]: value };
    }
    case "cardPassword": {
      const { name, value } = action.target;
      return {
        ...state,
        [action.type]: { ...state[action.type], [name]: value },
      };
    }
    case "cardCompanyName": {
      const { value } = action.target;
      return { ...state, [action.type]: value };
    }
    case "cardColor": {
      const { value } = action.target;
      return { ...state, [action.type]: value };
    }
    default:
      throw new Error();
  }
}
