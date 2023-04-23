import Image from "next/image";
import { Inter } from "next/font/google";
import { useSession } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	const { data: session } = useSession();
	return (
		<>
			<div className="flex justify-center text-center font-bold text-9xl text-secondary py-40">
				<h1>Lorem Ipsum</h1>
			</div>
			<main className="flex justify-evenly basis-40">
				<Image
					src={
						"https://www.shutterstock.com/image-vector/vector-cartoon-aerosol-spray-red-600w-305970836.jpg"
					}
					alt="Product Image"
					width={306}
					height={306}
					className="rounded-lg"
				/>
				<div>
					<h1 className="font-semibold text-primary text-6xl pb-5">About Us</h1>
					<p className="text-2xl w-80">
						Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum
						dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
						Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum
					</p>
				</div>
			</main>
		</>
	);
}
