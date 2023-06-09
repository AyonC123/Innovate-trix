import React from "react";
import { useSession } from "next-auth/react";
import CartCard from "@/components/CartCard";

export async function getServerSideProps(context) {
	const hostname = context.req.headers.host;
	const username = context.params.username;
	let res = await fetch(`http://${hostname}/api/cart/${username}`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	});
	let products = await res.json();
	return {
		props: { products, username, hostname },
	};
}

export default function Cart({ products, username, hostname }) {
	const { data: session } = useSession();
	const price = () => {
		let finalPrice = 0;
		for (let i = 0; i < products.length; i++) {
			finalPrice += parseInt(products[i]["price"]);
		}
		return finalPrice;
	};
	return (
		<>
			{products !== [] ? (
				<div>
					{session ? (
						<>
							{session.user.name === username ? (
								<>
									<div className="flex flex-col justify-center items-center">
										<h1 className="font-bold text-secondary text-2xl sm:text-4xl pb-10">
											Your Cart
										</h1>
										<div className="flex  flex-col-reverse sm:flex-row justify-between items-center gap-20">
											<CartCard
												data={products.sort()}
												host={hostname}
												username={username}
											/>
											<div className="p-5 bg-white rounded-lg">
												<h1 className="pb-2 font-semibold text-secondary text-2xl">
													Summary
												</h1>
												<p className="border-b-2 border-lightgrey py-4 flex justify-between">
													<p>Price of {products.length} items</p>
													<p>₹ {price()}</p>
												</p>
												<p className="border-b-2 border-lightgrey py-4 flex justify-between">
													<p>Dilevary Charges</p>
													<p>₹ 50</p>
												</p>
												<p className="border-b-2 border-lightgrey py-4 flex justify-between">
													<p>Total Price</p>
													<p>₹ {price() + 50}</p>
												</p>
												<div className="pt-5"></div>
												<div className="p-2 border-2 border-secondary rounded-lg text-secondary">
													Proceed to Checkout
												</div>
											</div>
										</div>
									</div>
								</>
							) : (
								<h1>Pls use correct url</h1>
							)}
						</>
					) : (
						<h1>Pls login in to use cart</h1>
					)}
				</div>
			) : (
				<h1>Add to a item to cart to create your user</h1>
			)}
		</>
	);
}
