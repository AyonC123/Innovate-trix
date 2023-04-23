import { signIn, signOut } from "next-auth/react";
import Link from "next/link";

export default function Navbar({ session }) {
	const handleSignOut = () => {
		signOut();
		if (typeof window !== "undefined") {
			window.localStorage.setItem("admin", false);
		}
	};
	return (
		<nav className="flex justify-between p-10 items-center text-center sticky top-0 backdrop-blur-md text-primary">
			<h1 className="text-xl font-bold">Sprayons</h1>
			<ul className="flex gap-10">
				<li className="hover:font-bold ease-linear duration-150">
					<Link href="/">Home</Link>
				</li>
				<li className="hover:font-bold ease-linear duration-150">
					<Link href="/shop">Shop</Link>
				</li>
				<li className="hover:font-bold ease-linear duration-150">
					<Link href="/contact">Contact</Link>
				</li>
				<li>
					<Link
						href="/cart"
						className="hover:font-bold ease-linear duration-150"
					>
						Cart
					</Link>
				</li>
			</ul>
			{session ? (
				<button
					onClick={() => handleSignOut()}
					className="p-2 bg-primary text-white rounded-lg"
				>
					Log Out
				</button>
			) : (
				<button
					onClick={() => signIn()}
					className="p-2 bg-primary text-white rounded-lg"
				>
					Log In
				</button>
			)}
		</nav>
	);
}
