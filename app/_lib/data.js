export const states = [
	{
		id: "1",
		filters: [
			{
				type: "Product Collection",
				condition: "contains",
				value: "Anarkali",
			},
			{
				type: "tags",
				condition: "contains",
				value: "onsale",
			},
		],
		variants: [
			{
				id: "1_variant_1",
				name: "Primary Variant",
				design: {
					image: "/AnniversarySale.png",
					title: "Anniversary Sale",
				},
			},

			{
				id: "1_variant_2",
				name: "Variant 2",
				design: {
					image: "/2_image.png",
					title: "2 image - zero discount",
				},
			},
			{
				id: "1_variant_3",
				name: "Variant 3",
				design: {
					image: "/multi_image.png",
					title: "Multi Image - fallback",
				},
			},
		],
	},
	{
		id: "2",
		filters: [
			{
				type: "Product Collection",
				condition: "contains",
				value: "Anarkali",
			},
			{
				type: "discount",
				condition: "is",
				value: "zero",
			},
		],
		variants: [
			{
				id: "2_variant_1",
				name: "Primary Variant",
				design: {
					image: "/single_img.png",
					title: "Single image product",
				},
			},
			{
				id: "2_variant_2",
				name: "Variant 2",
				design: {
					image: "/4_image.png",
					title: "4 image - zero discount",
				},
			},

			{
				id: "2_variant_3",
				name: "Variant 3",
				design: {
					image: "/multi_image.png",
					title: "Multi Image - No Tag",
				},
			},
		],
	},
];

export const designData = [
	{ image: "/2_image.png", title: "2 image - zero discount" },
	{ image: "/4_image.png", title: "4 image - zero discount" },
	{ image: "/AnniversarySale.png", title: "Anniversary Sale" },
	{ image: "/multi_image.png", title: "Multi Image - fallback" },
	{ image: "/single_img.png", title: "Single image product" },
];
