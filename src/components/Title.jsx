import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

export const Title = ({ title, bottom, onClick }) => {
    bottom ? (bottom = `mb-${bottom}`) : (bottom = undefined);

    return (
        <h2 className={[`page-title`, bottom].join(' ')} onClick={onClick}>
            {title}
        </h2>
    );
};

Title.propTypes = {
    /**
     * title
     */
    title: PropTypes.string,
    /**
     * margin bottom 값
     */
    bottom: PropTypes.number,
    /**
     * 클릭 이벤트
     */
    onClick: PropTypes.func,
};

Title.defaultProps = {
    title: undefined,
    bottom: undefined,
};
