import Image from "next/image";

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
		props: { product },
	};
}

export default function Product({ product }) {
	return (
		<>
			<div className="flex justify-around items-center text-center">
				<Image
					src={product.image}
					alt="product image"
					height={409}
					width={428}
					className="rounded-lg"
				/>
				<div className="w-96 h-96 flex flex-col justify-between">
					<div>
						<div className="flex justify-between flex-grow text-4xl font-semibold text-secondary pb-10">
							<h1>{product.title}</h1>
							<h1>₹ {product.price}</h1>
						</div>
						<p className="text-tertiary text-base font-normal">
							{product.description}
						</p>
					</div>
					<div className="flex justify-start gap-10">
						<button className="bg-secondary text-white p-2 px-4 rounded-lg">
							Add to Cart
						</button>
						<button className="text-secondary border-2 border-secondary p-2 px-4 rounded-lg">
							Buy Now
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
