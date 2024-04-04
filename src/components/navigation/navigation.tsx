type NavigationPropsType = {
	currentStageName: string
}

function Navigation(props: NavigationPropsType) {
	return (
		<div>
			<h2 className="page-title"> {props.currentStageName}</h2>
		</div>
	)
}

export default Navigation
