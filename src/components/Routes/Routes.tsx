export { default as Routes } from './Routes';
import React, { isValidElement, useContext } from 'react';
import routerContext from '../../context/routerContext';

function Routes({ children }: { children: React.ReactNode[] }) {
  const { path, changePath } = useContext(routerContext);

  // TODO:로직 리팩터링은 다음 이슈에서 하자. 라우팅 설계 이슈에서 다룰 게 너무 많기 때문

  let element = null;

  children?.forEach((child) => {
    // 리액트 엘리먼트인지 검사한다
    if (!isValidElement(child)) {
      return;
    }
    // 프레그먼트인지 검사한다
    if (child.type === React.Fragment) {
      return;
    }
    // Route 컴포넌트인지 검사한다.
    if (!child.props.path || !child.props.element) {
      return;
    }
    // Route에 등록된 컴포넌트가 요청한 경로에 해당하는 건지 검사한다.
    if (child.props.path !== path) {
      return;
    }
    // 엘리먼트를 찾았다
    element = child.props.element;
  });

  return element;
}

export default Routes;
