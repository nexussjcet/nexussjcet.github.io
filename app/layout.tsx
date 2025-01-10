import "@/styles/globals.css";

import type { Metadata } from "next";

import { Inter } from "next/font/google";

// import { TRPCReactProvider } from "@/trpc/react";
  
const inter = Inter({
	subsets: ["latin"],
	variable: "--font-sans",
});

export const metadata:Metadata = {
	title: "the nexus project",
	description: "We support free and open source software and hardware <3",
	icons: [{ rel: "icon", url: "/favicon.ico" }],
	publisher: "St. Joseph's College of Engineering and Technology, Palai",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			 <body className={`font-grotesk ${inter.variable} bg-black text-white`}>
				{/* <TRPCReactProvider> */}
				{children}
				{/* </TRPCReactProvider> */}
			</body>
		</html>
	);
}
