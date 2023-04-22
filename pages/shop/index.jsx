import ProductCard from "@/components/ProductCard";
import { useState } from "react";

export async function getServerSideProps(context) {
	const hostname = context.req.headers.host;
	let res = await fetch(`http://${hostname}/api/products`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	});
	let products = await res.json();
	return {
		props: { products },
	};
}

export default function Products({ products }) {
	const [Search, setSearch] = useState("");

	const data = products.filter((item) => {
		return item.title.toLowerCase().includes(Search.toLowerCase()) == true;
	});

	return (
		<>
			<div className="flex justify-center text-center items-center flex-col pb-10 text-secondary">
				<h1 className="text-4xl font-bold">Shop Our Products!</h1>
				<p className="text-xl">{products.length} No. of Products</p>
				<input
					type="text"
					name="search"
					value={Search}
					onChange={(e) => setSearch(e.target.value)}
					className="rounded-lg p-2 my-5 outline-none text-secondary"
					placeholder="Search"
				/>
			</div>
			<ProductCard data={data} />
		</>
	);
}
