import { ButtonText } from 'components/Button/button.style';
import { PageTitle } from './Typography';

export default {
  title: 'Components/Typography',
};

export const Title = () => <PageTitle>페이지 타이틀</PageTitle>;

export const WarnButtonText = () => <ButtonText warn>삭제</ButtonText>;
