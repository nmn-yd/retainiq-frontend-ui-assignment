export default Button;
function Button({ children, type, onClick, ...props }) {
	return (
		<button
			className={`font-medium inline-block rounded-md cursor-pointer ${
				type === "primary"
					? "bg-green-600 text-white px-4 py-3 pb-2 "
					: type === "danger"
					? "border-red-700 border-2 text-red-600 p-0.5 "
					: type === "accent"
					? "bg-white p-1 border-2 border-gray-300"
					: "bg-white p-1 "
			}`}
			onClick={onClick}
			{...props}
		>
			{children}
		</button>
	);
}

// export default Button;
