import AdminCard from "@/components/AdminCard";
import Sidebar from "@/components/Sidebar";
import Link from "next/link";
import { useState } from "react";

export async function getServerSideProps(context) {
	let res = await fetch("http://localhost:3000/api/products", {
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

export default function Admin({ products }) {
	const [Search, setSearch] = useState("");
	const data = products.filter((item) => {
		return item.title.toLowerCase().includes(Search.toLowerCase()) == true;
	});
	return (
		<>
			<div
				className="grid justify-between"
				style={{ gridTemplateColumns: "30px 1fr" }}
			>
				<Sidebar />
				<div className="flex flex-col px-10 gap-5">
					<div className="flex justify-between">
						<Link
							href="/admin/create"
							className="p-2 rounded-lg text-secondary border-secondary border-2"
						>
							Create
						</Link>
						<form onSubmit={(e) => e.preventDefault()}>
							<input
								type="text"
								name="search"
								value={Search}
								onChange={(e) => setSearch(e.target.value)}
								className="rounded-lg p-2 outline-none"
								placeholder="Search"
							/>
						</form>
					</div>
					<div className="flex justify-between text-secondary font-bold">
						<h1>Name</h1>
						<h1>Price</h1>
					</div>
					<AdminCard data={data} />
				</div>
			</div>
		</>
	);
}
