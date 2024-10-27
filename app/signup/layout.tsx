import type { Metadata } from "next";
import ".././globals.css";

export const metadata: Metadata = {
	title: "SignUp | Timeの新規登録ページです",
	description: "SignUp | Timeの新規登録ページです",
};

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="ja">
			<body>{children}</body>
		</html>
	);
}
