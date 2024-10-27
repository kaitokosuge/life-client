import type { Metadata } from "next";
import ".././globals.css";

export const metadata: Metadata = {
	title: "Login | Timeのログインページです",
	description: "Login | Timeのログインページです",
};

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="ja">
			<body>{children}</body>
		</html>
	);
}
