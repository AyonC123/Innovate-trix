import Image from "next/image";
import { Inter } from "next/font/google";
import { useSession } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	const { data: session } = useSession();
	return (
		<>
			<div className="flex justify-center font-bold text-9xl text-secondary py-20 sm:py-96 bg-[url('/background.jpg')] bg-contain bg-center bg-no-repeat"></div>
			<main className="flex flex-wrap justify-evenly basis-40 sm:pb-24 pt-5 sm:pt-20 gap-10">
				<Image
					src={
						"https://www.shutterstock.com/image-vector/vector-cartoon-aerosol-spray-red-600w-305970836.jpg"
					}
					alt="Product Image"
					width={306}
					height={306}
					className="rounded-lg"
				/>
				<div className="text-center sm:text-left">
					<h1 className="font-semibold text-primary text-5xl sm:text-6xl pb-5">
						About Us
					</h1>
					<p className="text-sm sm:text-xl w-60 sm:w-96">
						Have you ever spent hours looking for shoes and then when you
						finally find the perfect color, your size is not available? Well
						worry not, because Sprayons is a one of a kind product where you
						spray your shoes yourself on your own feet! Sprayons come in a wide
						ranging variety of colors and do not need any maintenance! Once done
						wearing, the shoes can be converted back to a spray for future use!
					</p>
				</div>
			</main>
			<div className="hidden sm:block bg-secondary p-2 w-60"></div>
			<article className="flex justify-center pt-24 flex-col items-center">
				<h1 className="font-bold text-primary text-5xl sm:text-6xl pb-10">
					Features
				</h1>
				<div className="flex  flex-wrap justify-evenly gap-20">
					<div className="p-1 sm:p-10 rounded-lg shadow-lg text-center items-center flex flex-col">
						<Image
							src={
								"https://www.shutterstock.com/image-vector/vector-cartoon-aerosol-spray-red-600w-305970836.jpg"
							}
							alt="item image"
							width={136}
							height={136}
							className="rounded-lg pb-10"
						/>

						<p className="text-xs sm:text-base w-64">
							Copy Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem
							ipsum dolor sit amet Lorem ipsum dolor
						</p>
					</div>
					<div className="p-1 sm:p-10 rounded-lg shadow-lg text-center items-center flex flex-col">
						<Image
							src={
								"https://www.shutterstock.com/image-vector/vector-cartoon-aerosol-spray-red-600w-305970836.jpg"
							}
							alt="item image"
							width={136}
							height={136}
							className="rounded-lg pb-10 pt-5"
						/>

						<p className="text-xs sm:text-base w-64">
							Copy Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem
							ipsum dolor sit amet Lorem ipsum dolor
						</p>
					</div>
					<div className="p-1 sm:p-10 rounded-lg shadow-lg text-center items-center flex flex-col">
						<Image
							src={
								"https://www.shutterstock.com/image-vector/vector-cartoon-aerosol-spray-red-600w-305970836.jpg"
							}
							alt="item image"
							width={136}
							height={136}
							className="rounded-lg pb-10"
						/>

						<p className="text-xs sm:text-base w-64">
							Copy Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem
							ipsum dolor sit amet Lorem ipsum dolor
						</p>
					</div>
				</div>
			</article>
		</>
	);
}
