import { Fragment } from "react";
import ThreeDot from "../_styles/Icons/ThreeDot";
import TrashIcon from "../_styles/Icons/TrashIcon";
import Button from "./Button";
import FilterBadge from "./FilterBadge";
import AddIcon from "../_styles/Icons/AddIcon";

function StateProductFilters({
	states,
	onMouseEnter,
	onMouseLeave,
	hoveredRowIndex,
	onDeleteStateVariant,
	isStateDeleting,
}) {
	return (
		<>
			{states.map((item, index) => {
				return (
					<Fragment key={item.id}>
						<div
							onMouseEnter={() => onMouseEnter(index)}
							onMouseLeave={() => onMouseLeave()}
							className="border-r-2 flex flex-col justify-center items-center text-4xl text-black font-bold gap-1"
						>
							<div className="relative">
								<div className="absolute -top-9 left-[18%]">
									{hoveredRowIndex === index && (
										<Button
											type="danger"
											onClick={() =>
												onDeleteStateVariant(item.id)
											}
										>
											{isStateDeleting ? (
												<div className="animate-spin rounded-full h-6 w-6 border-b-2 border-gray-900" />
											) : (
												<TrashIcon />
											)}
										</Button>
									)}
								</div>
								<div className="flex items-center justify-center gap-1 ">
									<span>{index + 1}</span>
									<ThreeDot />
								</div>
							</div>
						</div>
						<div className=" mx-auto w-5/6 bg-[#ffffff] border-gray-400 rounded-lg border-dotted border-[3px] flex flex-col items-center justify-center self-center min-h-44 py-3 px-1 pl-0 text-sm ">
							<div className="px-2">
								{item?.filters.length > 0 ? (
									item.filters.map((filter) => {
										return (
											<Fragment key={filter.type}>
												<FilterBadge
													text={filter.type}
												/>
												<FilterBadge
													type="condition"
													text={filter.condition}
												/>
												<FilterBadge
													text={filter.value}
												/>
											</Fragment>
										);
									})
								) : (
									<Button>
										<span className="flex gap-2 text-gray-900 rounded-lg cursor-pointer border-[2px] px-3 py-1 items-center text-1xl ">
											<AddIcon size={5} />
											<span className="text-[0.9rem] -mb-1">
												Add Product Filters
											</span>
										</span>
									</Button>
								)}
							</div>
						</div>
					</Fragment>
				);
			})}
		</>
	);
}

export default StateProductFilters;
