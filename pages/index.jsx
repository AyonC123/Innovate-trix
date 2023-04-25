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
					src={"/images/shoe.png"}
					alt="Product Image"
					width={406}
					height={406}
					className="rounded-lg"
				/>
				<div className="text-center">
					<h1 className="font-semibold text-primary text-5xl sm:text-6xl pb-5">
						About Us
					</h1>
					<p className="text-sm sm:text-xl w-60 sm:w-96 sm:text-left">
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
				<div className="flex flex-wrap justify-evenly gap-20">
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
							Sprayons are quite easy to use. All you need to do is wear some
							socks and aim the spray can at them. Now you can start spraying!
							One thin layer of the polymer should be enough to work in your day
							to day needs. You have a wide variety of colors to choose from, so
							there is something for everyone!
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
							The sprays contain two polymers along with a separator. On
							spraying in the atmosphere, the separator evaporates, almost
							instantly letting the two polymers react with each other and form
							the fabric that makes our shoes. All ingredients in the spray are
							non-toxic for humans along with being biodegradable. The separator
							released in the air does not cause harm to the ozone layer.
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
							Along with the spray, we also provide the separator in liquid
							form. Once done wearing, the shoes can be dipped in a solution
							containing the separator. This converts the product back to liquid
							form and now can be sprayed on your shoe (or someone else’s) at a
							later time! 1st feature ko thoda badhana hai
						</p>
					</div>
				</div>
			</article>
		</>
	);
}
