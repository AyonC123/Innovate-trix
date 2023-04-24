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
			<main className="flex justify-evenly basis-40 pb-24">
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
			<div className="bg-secondary p-2 w-60"></div>
			<article className="flex justify-center pt-24 flex-col items-center">
				<h1 className="font-bold text-primary text-6xl pb-10">Features</h1>
				<div className="flex justify-evenly gap-20">
					<div className="p-10 rounded-lg shadow-lg text-center items-center flex flex-col">
						<Image
							src={
								"https://www.shutterstock.com/image-vector/vector-cartoon-aerosol-spray-red-600w-305970836.jpg"
							}
							alt="item image"
							width={136}
							height={136}
							className="rounded-lg pb-10"
						/>

						<p className="w-64">
							Copy Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem
							ipsum dolor sit amet Lorem ipsum dolor
						</p>
					</div>
					<div className="p-10 rounded-lg shadow-lg text-center items-center flex flex-col">
						<Image
							src={
								"https://www.shutterstock.com/image-vector/vector-cartoon-aerosol-spray-red-600w-305970836.jpg"
							}
							alt="item image"
							width={136}
							height={136}
							className="rounded-lg pb-10 pt-5"
						/>

						<p className="w-64">
							Copy Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem
							ipsum dolor sit amet Lorem ipsum dolor
						</p>
					</div>
					<div className="p-10 rounded-lg shadow-lg text-center items-center flex flex-col">
						<Image
							src={
								"https://www.shutterstock.com/image-vector/vector-cartoon-aerosol-spray-red-600w-305970836.jpg"
							}
							alt="item image"
							width={136}
							height={136}
							className="rounded-lg pb-10"
						/>

						<p className="w-64">
							Copy Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem
							ipsum dolor sit amet Lorem ipsum dolor
						</p>
					</div>
				</div>
			</article>
		</>
	);
}
