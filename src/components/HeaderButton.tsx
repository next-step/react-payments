import React from 'react';
import IntrinsicElements = React.JSX.IntrinsicElements;

export interface HeaderButtonProps {
    tag: string
    className: string
    value?: string
    onClickHandler?: () => void
}

const HeaderButton: React.FC<HeaderButtonProps> = ({tag, className, value, onClickHandler}) => {
    const handleClickEvent = () => {
        onClickHandler?.()
    }

    const Tag = tag as keyof IntrinsicElements;

    return (
        <>
            <Tag
                className={className}
                onClick={handleClickEvent}>
                {value}
            </Tag>
        </>
    )
}


export default HeaderButton;