import Image from "next/image";
import EllipsisVerticalIcon from "../_styles/Icons/EllipsisVerticalIcon";
import Button from "./Button";
import AddIcon from "../_styles/Icons/AddIcon";
import EditIcon from "../_styles/Icons/EditIcon";

function StateVariants({
	hoveredRowIndex,
	onMouseEnter,
	onMouseLeave,
	states,
	onAddVariant,
	loadingVariantId,
	handleOpenModal,
	handleStateSelect,
}) {
	const columnCount = states[0]?.variants?.length || 1;
	return (
		<div
			className="col-start-3 row-span-full overflow-x-auto grid grid-rows-subgrid "
			style={{
				gridTemplateColumns: `repeat(${columnCount}, 210px) 60px`,
			}}
		>
			{states[0]?.variants?.map((variant, index) => {
				const isLastItem = index === states[0]?.variants?.length - 1;
				return (
					<div
						className={`border-l-2 pl-7 pr-2 flex justify-between items-center ${
							isLastItem ? "border-r-2" : ""
						}`}
						key={variant.id}
					>
						<span>{variant.name}</span>
						<EllipsisVerticalIcon />
					</div>
				);
			})}
			<span aria-hidden="true"></span>
			{states.map((item, index) => {
				const itemIndex = index;
				return (
					<>
						{item?.variants?.map((variant, index) => {
							const isLastItem =
								index === states[0]?.variants?.length - 1;

							return (
								<div
									className={`border-l-2 pl-6 pr-4 flex flex-col py-4
                        ${isLastItem ? "border-r-2" : ""}`}
									key={variant.id}
									onMouseEnter={() => onMouseEnter(itemIndex)}
									onMouseLeave={() => onMouseLeave()}
								>
									<div className="flex-1 flex flex-col gap-3 justify-center items-center px-4 py-3 pb-2 border-gray-400 rounded-lg border-dotted border-[3px] bg-white ">
										{Object.keys(variant.design).length !==
										0 ? (
											<>
												<div className="relative">
													<Image
														src={
															variant.design.image
														}
														height={0}
														width={120}
														style={{
															objectFit: "cover",
														}}
														alt="Product Image"
														className="rounded-lg"
														loading="lazy"
														quality={90}
													/>
													{hoveredRowIndex ===
														itemIndex && (
														<div className="absolute top-[2.8rem] left-[2.6rem]">
															<Button
																type="accent"
																onClick={() => {
																	handleOpenModal();
																	handleStateSelect(
																		variant?.id,
																		item.id
																	);
																}}
															>
																<EditIcon />
															</Button>
														</div>
													)}
												</div>
												<span className="truncate text-sm text-center font-bold max-w-full">
													{variant.design.title}
												</span>
											</>
										) : (
											<Button
												type="accent"
												onClick={() => {
													handleOpenModal();
													handleStateSelect(
														variant?.id,
														item.id
													);
												}}
											>
												<span className="flex  gap-1 py-1 px-2">
													<AddIcon size={5} />
													<span className="text-[0.9rem] translate-y-[1px] font-semibold">
														Add Design
													</span>
												</span>
											</Button>
										)}
									</div>
								</div>
							);
						})}
						<div key={item} className="self-center mx-auto">
							<Button
								onClick={() => onAddVariant(item.id)}
								disabled={loadingVariantId === item.id}
							>
								{loadingVariantId === item.id ? (
									<div className="animate-spin rounded-full h-6 w-6 border-b-2 border-gray-900" />
								) : (
									<AddIcon />
								)}
							</Button>
						</div>
					</>
				);
			})}
		</div>
	);
}

export default StateVariants;
