import { ReactNode } from 'react'

type ContainerPropsType = {
	title: string
	children: ReactNode
	titleRight?: ReactNode
	className?: string
	childClassName?: string
}

function Container(props: ContainerPropsType) {
	const { title, titleRight, children, className = '', childClassName } = props
	return (
		<div className={`input-container ${className}`}>
			<span className="title-align">
				<span className="input-title">{title}</span>
				{titleRight && <>{titleRight}</>}
			</span>
			<div className={`${childClassName}`}>{children}</div>
		</div>
	)
}

export default Container
