import { useSession } from "next-auth/react";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
	const { data: session } = useSession();

	return (
		<>
			<Navbar session={session} />
			<main className="p-10">{children}</main>
			<Footer />
		</>
	);
}
