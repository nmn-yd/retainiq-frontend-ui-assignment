"use client";
import AddIcon from "../_styles/Icons/AddIcon";
import Button from "./Button";
import { useState } from "react";
import {
	addVariantToState,
	createNewState,
} from "../_helpers/productVariantManager";
import toast from "react-hot-toast";
import Modal from "./Modal";
import VariantsGallery from "./VariantsGallery";
import StateProductFilters from "./StateProductFilters";
import StateVariants from "./StateVariants";

function StatesList({ statesData, designData }) {
	const [items, setItems] = useState(statesData);
	const [hoveredRowIndex, setHoveredRowIndex] = useState(null);
	const [isStateAdding, setIsStateAdding] = useState(false);
	const [isStateDeleting, setIsStateDeleting] = useState(false);
	const [loadingVariantId, setLoadingVariantId] = useState(null);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedState, setSelectedState] = useState({});

	// function used to show the edit delete icons when we hover on row
	function handleMouseEnter(index) {
		setHoveredRowIndex(index);
	}

	// function used to hide the edit delete icons when we hover on row
	function handleMouseLeave() {
		setHoveredRowIndex(null);
	}

	// function to store the stateid id and its varientd in a state
	function handleStateSelect(variantId, itemId) {
		if (!variantId || !itemId) return;
		console.log(variantId, itemId);
		setSelectedState({ itemId, variantId });
	}

	function handleAddImage(design) {
		if (!selectedState) {
			alert("Please select a variant first");
			return;
		}

		// Find the item and variant
		const itemIndex = items.findIndex(
			(item) => item.id === selectedState.itemId
		);
		if (itemIndex === -1) return;

		const variantIndex = items[itemIndex].variants.findIndex(
			(variant) => variant.id === selectedState.variantId
		);
		if (variantIndex === -1) return;

		// Create a new items array with the updated design
		const updatedItems = [...items];
		updatedItems[itemIndex].variants[variantIndex].design = design;

		// Update the state with the new items array
		setItems(updatedItems);
		console.log(updatedItems);
		toast.success("Variant template updated");
	}

	const openModal = (variant) => {
		setIsModalOpen(true); // Open the modal
	};

	const closeModal = () => {
		setIsModalOpen(false); // Close the modal
	};

	function handleAddState() {
		setIsStateAdding(true);
		setTimeout(() => {
			const newStateId = `${items.length + 1}`;
			const variantsCount =
				items.length > 0 ? items[0].variants.length : 1;
			const newState = createNewState(newStateId, variantsCount);
			setItems([...items, newState]);
			setIsStateAdding(false);
			toast.success("State added");
		}, 500); // Simulating API delay of 0.5 second
	}

	function handleVariantAdd(stateId) {
		setLoadingVariantId(stateId);
		setTimeout(() => {
			setItems((prev) => {
				const updateItems = prev.map((state) =>
					addVariantToState(state)
				);
				return updateItems;
			});
			setLoadingVariantId(null);
			toast.success("Variant added");
		}, 500); // Simulating API delay of 0.5 second
	}

	function handleDeleteStateVariant(stateId) {
		setIsStateDeleting(true);
		setTimeout(() => {
			setItems((prev) => {
				const updateItems = prev.filter(
					(state) => state.id !== stateId
				);
				return updateItems;
			});
			setIsStateDeleting(false);
			toast.success("State Removed!");
		}, 500); // Simulating API delay of 0.5 second
	}

	const dynamicGridRows = `60px repeat(${items.length}, minmax(180px, 210px))`;

	return (
		<>
			<div className="text-[1.1rem] text-gray-600 rounded-md border-2 bg-gray-100 border-gray-200 py-8 px-6 ">
				{items.length > 0 ? (
					<div
						className="grid gap-y-6 grid-cols-[120px_380px_1fr] "
						style={{
							gridTemplateRows: dynamicGridRows,
						}}
					>
						<div className="flex items-center col-start-2 justify-center ">
							Product Filter
						</div>

						<StateVariants
							hoveredRowIndex={hoveredRowIndex}
							onMouseEnter={handleMouseEnter}
							onMouseLeave={handleMouseLeave}
							states={items}
							onAddVariant={handleVariantAdd}
							loadingVariantId={loadingVariantId}
							handleOpenModal={openModal}
							handleStateSelect={handleStateSelect}
						/>
						<StateProductFilters
							onMouseEnter={handleMouseEnter}
							onMouseLeave={handleMouseLeave}
							hoveredRowIndex={hoveredRowIndex}
							states={items}
							onDeleteStateVariant={handleDeleteStateVariant}
							isStateDeleting={isStateDeleting}
						/>
					</div>
				) : (
					<div className="text-center p-6 bg-white border border-gray-300 rounded-lg">
						<p className="text-lg font-semibold text-gray-700 mb-4">
							No states available
						</p>
						<p className="text-gray-500">
							Please add a state to configure filters and design
							options.
						</p>
					</div>
				)}
				<div className="w-[120px] mt-4 flex justify-center">
					<Button onClick={handleAddState} disabled={isStateAdding}>
						{isStateAdding ? (
							<div className="animate-spin rounded-full h-6 w-6 border-b-2 border-gray-900" />
						) : (
							<AddIcon />
						)}
					</Button>
				</div>
			</div>

			{isModalOpen && (
				<Modal isOpen={isModalOpen} onClose={closeModal}>
					<VariantsGallery
						onImageClick={handleAddImage}
						onClose={closeModal}
						designData={designData}
					/>
				</Modal>
			)}
		</>
	);
}

export default StatesList;
