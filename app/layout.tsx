import "@/styles/globals.css";

import type { Metadata } from "next";

import { Inter } from "next/font/google";

import Script from "next/script";

// import { TRPCReactProvider } from "@/trpc/react";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-sans",
});

export const metadata: Metadata = {
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
			<head>
				<Script async src="https://www.googletagmanager.com/gtag/js?id=G-ZES115JGTB"></Script>
				<Script>
					{`
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						gtag('config', 'G-ZES115JGTB');
					`}
				</Script>
			</head>
			<body className={`font-grotesk ${inter.variable} bg-black text-white`}>
				{/* <TRPCReactProvider> */}
				{children}
				{/* </TRPCReactProvider> */}
			</body>
		</html>
	);
}
