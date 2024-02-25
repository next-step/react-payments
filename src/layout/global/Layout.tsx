import style from './layout.module.css';
import { LayoutType, GlobalLayoutProps } from './layout.type';
import { LAYOUT } from './layout.constant';

export const GlobalLayout = ({ type, children }: GlobalLayoutProps) => {
  /**
   * @param layoutType LayoutType(MOBLIE | DESKTOP)을 받아 해당하는 스타일을 반환합니다.
   * @returns
   */
  const getLayoutStyle = (layoutType: LayoutType) => {
    switch (layoutType) {
      case LAYOUT.TYPE.MOBILE: {
        return {
          rootStyle: style.rootMobile,
          appStyle: style.appMobile,
        };
      }

      case LAYOUT.TYPE.DESKTOP: {
        return {
          rootStyle: style.rootDesktop,
          appStyle: style.appDesktop,
        };
      }

      default:
        throw new Error(LAYOUT.MESSAGE.ERROR.INVALID_LAYOUT_TYPE);
    }
  };

  const { rootStyle, appStyle } = getLayoutStyle(type);

  return (
    <main className={rootStyle}>
      <div className={appStyle}>{children}</div>
    </main>
  );
};
