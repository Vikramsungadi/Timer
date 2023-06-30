function Skip(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			className={`stroke-primary h-6 w-6 ${props.className ?? ""}`}
			viewBox='0 0 24 24'
			strokeWidth={1.5}
			stroke='evenodd'
			fill='none'
			strokeLinecap='round'
			strokeLinejoin='round'>
			<path d='M0 0h24v24H0z' stroke='none' />
			<path d='M4 5v14l12-7zM20 5v14' />
		</svg>
	);
}

export default Skip;
