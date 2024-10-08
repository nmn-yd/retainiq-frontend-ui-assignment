function AddIcon({ size }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={2}
			stroke="black"
			className={`size-${size ? size : 6}`}
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M12 4.5v15m7.5-7.5h-15"
				strokeWidth={2}
				stroke="black"
			/>
		</svg>
	);
}

export default AddIcon;
