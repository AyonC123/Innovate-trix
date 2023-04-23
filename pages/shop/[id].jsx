import Image from "next/image";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export async function getServerSideProps(context) {
	let id = context.params.id;
	const hostname = context.req.headers.host;
	let res = await fetch(`http://${hostname}/api/products/${id}`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	});
	let product = await res.json();
	return {
		props: { product, hostname },
	};
}

export default function Product({ product, hostname }) {
	const { data: session } = useSession();
	const router = useRouter();
	const handleClick = async (e) => {
		if (hostname === "localhost:3000") {
			let res = await fetch(`http://${hostname}/api/cart`, {
				method: "POST",
				body: JSON.stringify({
					username: session.user.name,
					item: product._id,
				}),
			});
		} else {
			let res = await fetch(`https://${hostname}/api/cart`, {
				method: "POST",
				body: JSON.stringify({
					username: session.user.name,
					item: product._id,
				}),
			});
		}
		router.push("/shop");
	};
	return (
		<>
			<div className="flex flex-wrap justify-around items-center text-center">
				<Image
					src={product.image}
					alt="product image"
					height={409}
					width={428}
					className="rounded-lg pb-10"
				/>
				<div className="w-96 h-96 flex flex-col justify-between">
					<div>
						<div className="flex justify-between flex-grow text-4xl font-semibold text-secondary pb-10">
							<h1>{product.title}</h1>
							<h1>$ {product.price}</h1>
						</div>
						<p className="text-secondary text-base font-normal">
							{product.description}
						</p>
					</div>
					{session ? (
						<div className="flex justify-start gap-10">
							<button
								className="bg-secondary text-white p-2 px-4 rounded-lg"
								onClick={(e) => handleClick(e)}
							>
								Add to Cart
							</button>
							<button className="text-secondary border-2 border-secondary p-2 px-4 rounded-lg">
								Buy Now
							</button>
						</div>
					) : (
						<div className="flex justify-center text-secondary font-bold text-2xl">
							<h1>Log in to Buy</h1>
						</div>
					)}
				</div>
			</div>
		</>
	);
}
