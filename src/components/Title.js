import PropTypes from 'prop-types';
import './index.css';

export const Title = ({ title, marginBottom, onClick }) => {
    if (marginBottom) marginBottom = `mb-${marginBottom}`;

    return (
        <h2 className={[`page-title`, marginBottom].join(' ')} onClick={onClick}>
            {title}
        </h2>
    );
};

Title.propTypes = {
    title: PropTypes.string,
    /**
     * margin marginBottom 값
     */
    marginBottom: PropTypes.number,
    onClick: PropTypes.func,
};
