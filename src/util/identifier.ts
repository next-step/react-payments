import { leaveOnlyNumbers } from './number';

// id값 식별을 위한 로직 고도화는 생략하고 간단히만 사용하겠습니다.
export const generateId = () => Date.now() + leaveOnlyNumbers(Math.random().toString());
