import React from 'react'
interface DisplayProps {
    className?: string
    value?: string
    defaultValue?: string
}

const Display: React.FC<DisplayProps> = ({className, value, defaultValue}) => {
    return (
        <span className={className}>{value || defaultValue}</span>
    )
}

export default Display

