const FilterBadge = ({ type, text }) => {
	let styles = "";
	switch (type) {
		case "condition":
			styles = "bg-green-100 text-green-600 border-green-300";
			break;
		default:
			styles = "border-gray-300 text-black";
			break;
	}
	return (
		<span
			className={`inline-block text-[0.8rem] ml-1.5 mb-1 px-2  py-[.1675rem] font-semibold rounded-lg cursor-pointer border-[2px] ${styles}`}
		>
			{text}
		</span>
	);
};

export default FilterBadge;
