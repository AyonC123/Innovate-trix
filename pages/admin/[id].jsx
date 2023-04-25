import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

export const getServerSideProps = async (context) => {
	const id = context.params.id;
	const hostname = context.req.headers.host;
	let res = await fetch(`http://${hostname}/api/products/${id}`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	});
	let product = await res.json();
	return {
		props: { product, id, hostname },
	};
};

export default function Product({ product, id, hostname }) {
	const [Photo, setPhoto] = useState(product["image"]);
	const [Title, setTitle] = useState(product["title"]);
	const [Description, setDescription] = useState(product["description"]);
	const [Price, setPrice] = useState(product["price"]);
	const router = useRouter();

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (hostname === "localhost:3000") {
			let res = await fetch(`http://${hostname}/api/products/${id}`, {
				method: "POST",
				body: JSON.stringify({
					image: Photo,
					title: Title,
					description: Description,
					price: Price,
				}),
			});
		} else {
			let res = await fetch(`https://${hostname}/api/products/${id}`, {
				method: "POST",
				body: JSON.stringify({
					image: Photo,
					title: Title,
					description: Description,
					price: Price,
				}),
			});
		}
		router.push("/admin");
	};
	const handleDelete = async (e) => {
		if (hostname === "localhost:3000") {
			let res = await fetch(`http://${hostname}/api/products/${id}`, {
				method: "DELETE",
			});
		} else {
			let res = await fetch(`https://${hostname}/api/products/${id}`, {
				method: "DELETE",
			});
		}
		router.push("/admin");
	};
	return (
		<>
			<div className="flex justify-evenly flex-wrap gap-5">
				<div className="flex flex-col p-5 py-6 shadow-lg rounded-lg">
					<Image
						alt="product image"
						src="/images/candypink.png"
						width={250}
						height={250}
						className="rounded-lg pb-2"
					/>
					<div className="flex justify-between">
						{Title !== "" ? (
							<h1 className="text-xs">{Title}</h1>
						) : (
							<h1 className="text-xs">Enter Name</h1>
						)}
						{Price !== "" ? (
							<h1 className="text-xs">$ {Price}</h1>
						) : (
							<h1 className="text-xs">Enter Price</h1>
						)}
					</div>
				</div>
				<div>
					<form
						onSubmit={handleSubmit}
						method="post"
						className="flex flex-col gap-5"
					>
						<input
							type="text"
							name="image"
							id=""
							value={Photo}
							onChange={(e) => setPhoto(e.target.value)}
							placeholder="Image"
							className="rounded-lg p-2 outline-none w-60 sm:w-auto"
							required={true}
						/>
						<input
							type="text"
							name="name"
							id=""
							value={Title}
							onChange={(e) => setTitle(e.target.value)}
							placeholder="Name"
							className="rounded-lg p-2 outline-none w-60 sm:w-auto"
							required={true}
						/>
						<input
							type="number"
							name="price"
							value={Price}
							onChange={(e) => setPrice(e.target.value)}
							placeholder="Price"
							className="rounded-lg p-2 outline-none w-60 sm:w-auto"
							required={true}
						/>
						<textarea
							name="description"
							id=""
							cols="30"
							rows="4"
							value={Description}
							onChange={(e) => setDescription(e.target.value)}
							placeholder="Description"
							className="rounded-lg p-2 outline-none resize-none w-60 sm:w-auto"
							required={true}
						></textarea>
						<div className="flex justify-between flex-col sm:flex-row gap-5">
							<button
								type="submit"
								className="p-2 px-10 bg-primary rounded-lg text-white"
							>
								submit
							</button>
							<button
								onClick={handleDelete}
								className="p-2 px-10 bg-primary rounded-lg text-white"
							>
								Delete
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}
