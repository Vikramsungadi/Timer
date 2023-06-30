const Button = (props) => {
	return (
		<button
			onClick={props.onClick ?? ""}
			className={`flex shrink-0 items-center justify-center gap-2.5 rounded-full bg-white px-3   py-1 text-primary   shadow-lg transition-colors hover:bg-primary hover:text-white  focus-visible:outline focus-visible:outline-white/50 active:scale-[0.98] active:duration-500 ${
				props.className ?? ""
			}`}>
			{props.children}
		</button>
	);
};

export default Button;
