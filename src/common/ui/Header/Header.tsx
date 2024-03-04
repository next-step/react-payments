import { HEADER_Z_INDEX } from "@/common/constants/zIndex";
import { theme } from "@/common/utils/theme";
import styled from "@emotion/styled";
import { ReactNode } from "react";
import IconButton from "../Button/IconButton";
import Text from "../Text/Text";

export interface HeaderProps {
	showBackButton?: boolean;
	title?: string;
	leftButton?: ReactNode;
	rightButton?: ReactNode;
	backButtonCallback?: () => void;
}

const Header = ({
	showBackButton = false,
	title,
	leftButton,
	rightButton,
	backButtonCallback
}: HeaderProps) => {
	const onClickBackButton = () => {
		window.history.back();
		backButtonCallback && backButtonCallback();
	};
	return (
		<HeaderContainer>
			<BackButtonAndTitleWrapper>
				{showBackButton && (
					<IconButton name='arrow-left' size='xs' onClick={onClickBackButton} />
				)}
				{leftButton && leftButton}
				{title && <HeaderTitle level='h1'>{title}</HeaderTitle>}
			</BackButtonAndTitleWrapper>
			<RightButtonWrapper>{rightButton}</RightButtonWrapper>
		</HeaderContainer>
	);
};

export default Header;

const HeaderContainer = styled.div`
	position: sticky;
	top: 0;
	left: 0;
	background-color: ${theme.colors.white};

	height: 56px;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	z-index: ${HEADER_Z_INDEX};
`;

const BackButtonAndTitleWrapper = styled.div`
	display: flex;
	column-gap: 16px;
	align-items: center;
`;

const RightButtonWrapper = styled.div`
	height: 100%;
	display: flex;
	align-items: center;
`;

const HeaderTitle = styled(Text.Header)`
	font-weight: 500;
	font-size: 20px;
	line-height: 22px;
	display: flex;
	align-items: center;

	color: ${theme.colors.black};
`;
