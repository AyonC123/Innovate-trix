import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

export async function getServerSideProps(context) {
	const hostname = context.req.headers.host;
	return {
		props: {
			hostname,
		},
	};
}

export default function Create({ hostname }) {
	const [Photo, setPhoto] = useState("");
	const [Title, setTitle] = useState("");
	const [Description, setDescription] = useState("");
	const [Price, setPrice] = useState("");
	const router = useRouter();

	const handleSubmit = async (e) => {
		e.preventDefault();
		let res = await fetch(`http://${hostname}/api/products`, {
			method: "POST",
			body: JSON.stringify({
				image: Photo,
				title: Title,
				description: Description,
				price: Price,
			}),
		});
		res = await res.json();
		router.push("/admin");
	};
	return (
		<>
			<div className="flex justify-evenly flex-wrap">
				<div className="flex flex-col p-5 py-6 shadow-lg rounded-lg">
					{Photo !== "" ? (
						<Image
							alt="product image"
							src={Photo}
							width={250}
							height={250}
							className="rounded-lg pb-2"
						/>
					) : (
						<Image
							alt="product image"
							src="https://www.shutterstock.com/image-vector/vector-cartoon-aerosol-spray-red-600w-305970836.jpg"
							width={250}
							height={250}
							className="rounded-lg pb-2"
						/>
					)}
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
						className="rounded-lg p-2 outline-none"
						required={true}
					/>
					<input
						type="text"
						name="name"
						id=""
						value={Title}
						onChange={(e) => setTitle(e.target.value)}
						placeholder="Name"
						className="rounded-lg p-2 outline-none"
						required={true}
					/>
					<input
						type="text"
						name="price"
						value={Price}
						onChange={(e) => setPrice(e.target.value)}
						placeholder="Price"
						className="rounded-lg p-2 outline-none"
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
						className="rounded-lg p-2 outline-none resize-none"
						required={true}
					></textarea>
					<button
						type="submit"
						className="p-2 px-10 bg-primary rounded-lg text-white"
					>
						submit
					</button>
				</form>
			</div>
		</>
	);
}
