function Resume(props) {
	return (
		<svg className={` h-6 w-6 stroke-primary ${props.className ?? ""}`} viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M2 3a1 1 0 011-1h9a1 1 0 011 1v9a1 1 0 01-1 1H3a1 1 0 01-1-1V3zm10 0H3v9h9V3z'
				fill='currentColor'
				fillRule='evenodd'
				clipRule='evenodd'
			/>
		</svg>
	);
}

export default Resume;
