import { Josefin_Sans } from "next/font/google";
import "@/app/_styles/globals.css";
import SideNavigation from "@/app/_components/SideNavigation";
import { Toaster } from "react-hot-toast";

const josefin = Josefin_Sans({
	subsets: ["latin"],
	display: "swap",
});

export const metadata = {
	// title: {
	// 	template: "%s / RetainIQ",
	// 	default: "Welcome / RetainIQ",
	// },
	title: "RetainIQ",
	description:
		"RetainIQ Enabling brands to create delightful personalized experiences for their customers by personalize their Email & MMS creatives based on customers' actions, location, weather, and loyalty information. These delightful personalised communication improves customer engagement by at least 30% vs. their existing emails and SMS.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={`${josefin.className} antialiased bg-primary-950 text-primary-100 min-h-screen flex `}
			>
				<Toaster position="top-center" />
				<SideNavigation />
				<div className="flex-1 py-4">
					<main className="max-w-[1400px] px-8 mx-auto w-full">
						{children}
					</main>
				</div>
			</body>
		</html>
	);
}
