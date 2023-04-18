import { signIn, signOut } from "next-auth/react";
import Link from "next/link";

export default function Navbar({ session }) {
	return (
		<nav className="flex justify-between p-10 item-center sticky top-0 backdrop-blur-md">
			<h1 className="text-xl font-bold bg-gradient-to-r from-red-500 to-blue-500 text-transparent bg-clip-text">
				NuxeWear
			</h1>
			<ul className="flex gap-10">
				<li className="hover:font-bold ease-linear duration-150">
					<Link href="/">Home</Link>
				</li>
				<li className="hover:font-bold ease-linear duration-150">
					<Link href="/products">Products</Link>
				</li>
				<li className="hover:font-bold ease-linear duration-150">
					<Link href="/contact">Contact</Link>
				</li>
			</ul>
			{session ? (
				<button onClick={() => signOut()}>SignOut</button>
			) : (
				<button onClick={() => signIn()}>SignIn</button>
			)}
		</nav>
	);
}
