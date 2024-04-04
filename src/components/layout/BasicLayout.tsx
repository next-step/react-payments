import { PropsWithChildren } from 'react'

type MainProps = {
	className?: string
}

type FooterProps = {
	className?: string
}

export const Header = ({ children }: PropsWithChildren) => {
	return <header>{children}</header>
}

export const Main = ({ className, children }: PropsWithChildren<MainProps>) => {
	return <main className={className}>{children}</main>
}

export const Footer = ({ className, children }: PropsWithChildren<FooterProps>) => {
	return <footer className={className}>{children}</footer>
}

const BasicLayout = ({ children }: PropsWithChildren) => {
	return <div className="layout">{children}</div>
}

BasicLayout.Header = Header
BasicLayout.Main = Main
BasicLayout.Footer = Footer

export default BasicLayout
