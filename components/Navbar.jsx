import { signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar({ session }) {
	return (
		<nav className="flex justify-between p-10 items-center text-center sticky top-0 backdrop-blur-md text-primary">
			<Image src={"/logo.png"} alt="logo image" height={30} width={125} />
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
					{session && (
						<Link
							// href="/cart"
							href={`/cart/${session.user.name}`}
							className="hover:font-bold ease-linear duration-150"
						>
							Cart
						</Link>
					)}
				</li>
			</ul>
			{session ? (
				<button
					onClick={() => signOut()}
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
