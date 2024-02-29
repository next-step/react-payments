import {Link} from 'react-router-dom';

export default function Header() {
	return (
		<h2 className='page-title'>
			<Link to='/' className='button-basic'>{'<'}</Link>
			<span className='ml-10'>카드 추가</span>
		</h2>
	);
}
