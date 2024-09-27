import Image from "next/image";
import Link from "next/link";
import retainiq_logo from "@/public/retainiq_logo.png";

function Logo() {
	return (
		<Link href="/" className="flex items-center gap-4 z-10">
			<Image
				src={retainiq_logo}
				height="50"
				quality={100}
				width="50"
				alt="ReatinIQ"
			/>
		</Link>
	);
}

export default Logo;
