// Define the shape of a single variant
const VariantStructure = {
	id: "",
	name: "",
	design: {
		// image: "",
		// title: "",
		// type: "",
	},
};

// Define the shape of a single state
const ProductStructure = {
	id: "",
	filters: [],
	variants: [VariantStructure],
};

// Function to create a new empty state
export const createNewState = (id, variantCount) => ({
	...ProductStructure,
	id,
	variants: Array.from({ length: variantCount }, (_, index) => ({
		...VariantStructure,
		id: `${id}_variant_${index + 1}`,
		name: `${variantCount === 1 ? "Primary" : ""} Variant ${
			variantCount > 1 ? index + 1 : ""
		}`,
	})),
});

// Function to add a new variant to a state
export const addVariantToState = (product) => {
	const newVariantId = `${product.id}_variant_${product.variants.length + 1}`;
	return {
		...product,
		variants: [
			...product.variants,
			{
				...VariantStructure,
				id: newVariantId,
				name: `Variant ${product.variants.length + 1}`,
			},
		],
	};
};
