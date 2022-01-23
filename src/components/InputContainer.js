import PropTypes from 'prop-types';
import './input.css';

export const InputContainer = ({
    title,
    size,
    errorMsg,
    children,
    hasBGColor = true,
    limitCharacter = 0,
    character = '',
}) => {
    size ? (size = `w-${size}`) : (size = undefined);

    return (
        <div className={['input-container', size].join(' ')}>
            {!!limitCharacter && (
                <span
                    className={'input_limit_message '}
                >{`${character.length} / ${limitCharacter}`}</span>
            )}
            <span className={'input-title'}>{title}</span>
            {hasBGColor ? <div className={'input-box'}>{children}</div> : { children }}
            {errorMsg && <span className={'input_error_message'}>{errorMsg}</span>}
        </div>
    );
};

InputContainer.propTypes = {
    /**
     * 타이틀
     */
    title: PropTypes.string,
    /**
     * 에러메세지
     */
    errorMsg: PropTypes.string,
    /**
     * 크기
     */
    size: PropTypes.number,
    /**
     * 배경색 여부
     */
    hasBGColor: PropTypes.bool,
    /**
     * 제한이 필요한 글자
     */
    character: PropTypes.string,
    /**
     * 제한수 표시에 필요한 글자
     */
    limitCharacter: PropTypes.number,
};

InputContainer.defaultProps = {
    title: undefined,
    errorMsg: undefined,
    size: undefined,
};
