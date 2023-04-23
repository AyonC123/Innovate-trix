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
			<div className="flex justify-between">
				<div>
					{Photo !== "" ? (
						<Image alt="product image" src={Photo} width={250} height={250} />
					) : (
						<h1>Pls give a valid link</h1>
					)}
					<h1>{Title}</h1>
					<p>{Description}</p>
					<h1>{Price}</h1>
				</div>
				<form onSubmit={handleSubmit} method="post">
					<input
						type="text"
						name="image"
						id=""
						value={Photo}
						onChange={(e) => setPhoto(e.target.value)}
						placeholder="Image"
					/>
					<input
						type="text"
						name="name"
						id=""
						value={Title}
						onChange={(e) => setTitle(e.target.value)}
						placeholder="Name"
					/>
					<textarea
						name="description"
						id=""
						cols="30"
						rows="10"
						value={Description}
						onChange={(e) => setDescription(e.target.value)}
						placeholder="Description"
					></textarea>
					<input
						type="text"
						name="price"
						value={Price}
						onChange={(e) => setPrice(e.target.value)}
						placeholder="Price"
					/>

					<button type="submit">submit</button>
				</form>
			</div>
		</>
	);
}
