import GobackIcon from "../../_styles/Icons/GobackIcon";
import PageTitle from "./PageTitle";

function PageHeader({ children, title }) {
	return (
		<div className="flex justify-between items-baseline py-4">
			<div className="flex items-center self-end gap-4">
				<GobackIcon size={24} />
				<PageTitle>{title}</PageTitle>
			</div>
			{children}
		</div>
	);
}

export default PageHeader;
