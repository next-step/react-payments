import React from 'react';
import IntrinsicElements = React.JSX.IntrinsicElements;

export interface HeaderButtonProps {
    tag: string
    className: string
    value?: string
    event?: () => void
}

const HeaderButton: React.FC<HeaderButtonProps> = ({tag, className, value, event}) => {
    const handleClickEvent = () => {
        event?.()
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