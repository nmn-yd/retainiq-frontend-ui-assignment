import { useState } from "react";
import Image from "next/image";
import Button from "./Button";

function VariantsGallery({ onImageClick, onClose, designData }) {
	const [searchTerm, setSearchTerm] = useState("");

	const filteredDesigns = designData.filter((design) =>
		design.title.toLowerCase().includes(searchTerm.toLowerCase())
	);

	const handleSearchChange = (e) => {
		setSearchTerm(e.target.value);
	};

	return (
		<>
			<div className="mt-4">
				<input
					type="text"
					placeholder="Search"
					value={searchTerm}
					onChange={handleSearchChange}
					className="border px-4 py-2 rounded w-full"
				/>
			</div>

			<div className="mt-6 grid grid-cols-3 gap-4 max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
				{filteredDesigns.map((design) => (
					<div
						key={design.id}
						className="group relative border rounded-lg p-2 cursor-pointer hover:shadow-lg"
					>
						<Image
							src={design.image}
							alt={design.title}
							width={120}
							height={120}
							className="w-full h-36 object-cover object-left-top rounded"
							loading="lazy"
							quality={90}
						/>
						<span className="block text-center mt-2 text-sm font-semibold">
							{design.title}
						</span>
						<div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity">
							<Button
								onClick={() => {
									onImageClick(design);
									onClose();
								}}
								type="insert"
							>
								Insert
							</Button>
						</div>
					</div>
				))}
			</div>
		</>
	);
}

export default VariantsGallery;
