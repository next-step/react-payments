import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
//
import { 라우터_프로퍼티 } from '@/constants';

type 라우터_키 = typeof 라우터_프로퍼티[keyof typeof 라우터_프로퍼티];

export default function useRouter() {
  const navigate = useNavigate();
  return useMemo(
    () => ({
      push: (경로: 라우터_키) => {
        navigate({ pathname: 경로 });
      },
    }),
    [navigate],
  );
}
