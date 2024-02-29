type NavigationPropsType = {
  currentStageName: string | any
}

function Navigation(props: NavigationPropsType) {
  return <div><h2 className="page-title"> {props.currentStageName}</h2></div>
}

export default Navigation
