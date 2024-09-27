import { useState } from "react";
import { Dialog } from "@headlessui/react";

function Modal({ children, isOpen, onClose }) {
	return (
		<Dialog
			open={isOpen}
			onClose={onClose}
			className="fixed inset-0 z-50 flex items-center justify-center"
		>
			<div className="fixed inset-0 bg-black/50" aria-hidden="true"></div>

			<div className="relative bg-white rounded-lg shadow-lg p-6 w-full max-w-3xl mx-auto">
				<Dialog.Title className="text-xl font-semibold flex justify-between border-b-2 pb-2 px-2">
					<span>Select a design to link</span>
					<button onClick={onClose}>X</button>
				</Dialog.Title>
				<div className="mt-4 ">{children}</div>
			</div>
		</Dialog>
	);
}

export default Modal;
