function Play(props) {
	return (
		<svg className={` h-6 w-6 stroke-primary ${props.className ?? ""}`} viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M3.242 2.322a.5.5 0 01.491-.014l9 4.75a.5.5 0 010 .884l-9 4.75A.5.5 0 013 12.25v-9.5a.5.5 0 01.242-.428zM4 3.579v7.842L11.429 7.5 4 3.58z'
				fill='currentColor'
				fillRule='evenodd'
				clipRule='evenodd'
			/>
		</svg>
	);
}

export default Play;
