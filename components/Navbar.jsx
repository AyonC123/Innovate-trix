import { signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navbar({ session }) {
	const [open, setOpen] = useState(false);
	return (
		<nav className="flex justify-between p-10 items-center text-center sticky top-0 backdrop-blur-md text-primary">
			<Image src={"/logo.png"} alt="logo image" height={30} width={125} />
			<ul className="hidden sm:flex gap-10">
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
					className="hidden sm:block p-2 bg-primary text-white rounded-lg"
				>
					Log Out
				</button>
			) : (
				<button
					onClick={() => signIn()}
					className="hidden sm:block p-2 bg-primary text-white rounded-lg"
				>
					Log In
				</button>
			)}
			<div className="block sm:hidden">
				{!open ? (
					<FontAwesomeIcon
						icon={faBars}
						className="cursor-pointer z-10 text-2xl"
						onClick={() => setOpen(!open)}
					/>
				) : (
					<FontAwesomeIcon
						icon={faXmark}
						className="cursor-pointer z-10 text-2xl"
						onClick={() => setOpen(!open)}
					/>
				)}
				{open && (
					<ul className="flex flex-col justify-center items-center absolute top-28 right-0 left-0 gap-5 bg-background w-full py-8">
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
						<li>
							{" "}
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
						</li>
					</ul>
				)}
			</div>
		</nav>
	);
}
