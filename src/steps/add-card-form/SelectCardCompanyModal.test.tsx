import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import AddCardStepper from 'src/steps/AddCardStepper.tsx';
import { CARD_COMPANY_LIST } from 'src/constants/card.ts';
import { renderWithAddCardMachineProvider } from 'src/utils/render.tsx';

describe('카드 회사 선택 모달 기능 테스트', () => {
	beforeEach(async () => {
		renderWithAddCardMachineProvider(<AddCardStepper />);

		const addCardButton = screen.getByTestId('add-card-button');

		await userEvent.click(addCardButton);
	});

	it('카드 추가 버튼 클릭 시 카드 회사 선택 모달이 노출된다.', async () => {
		expect(screen.queryByTestId('company-modal')).not.toBeNull();
	});

	it('모달의 dimmed 영역을 클릭하면 모달이 닫힌다.', async () => {
		const dimmed = screen.getByTestId('modal-dimmed');

		await userEvent.click(dimmed);

		expect(screen.queryByTestId('company-modal')).toBeNull();
	});

	it('카드 회사를 선택하면 카드 회사 선택 모달이 닫히며 상단 카드 이미지가 변경된다.', async () => {
		const firstCardCompanyInfo = CARD_COMPANY_LIST[0];
		const cardCompanyButtons = screen.getByTestId(`card-company-button-${firstCardCompanyInfo.code}`);

		await userEvent.click(cardCompanyButtons);

		expect(screen.queryByTestId('card-image')?.className.includes(firstCardCompanyInfo.className)).toBeTruthy();
	});
});
