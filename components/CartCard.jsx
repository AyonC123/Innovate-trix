import Image from "next/image";

export default function CartCard({ data, host, username }) {
	const handleSubmit = async (e, id) => {
		if (host === "localhost:3000") {
			let res = await fetch(`http://${host}/api/cart/${username}/${id}`, {
				method: "POST",
			});
		} else {
			let res = await fetch(`https://${host}/api/${username}/${id}`, {
				method: "POST",
			});
		}
	};
	return (
		<>
			<div className="flex flex-col flex-wrap justify-evenly gap-5">
				{data.map((item) => (
					<div
						key={item._id}
						className="flex gap-16 items-center p-5 py-6 border-b-2 border-lightgrey"
					>
						<Image
							src={item.image}
							alt="product image"
							height={109}
							width={109}
							className="rounded-lg pb-2"
						/>
						<div className="flex flex-col justify-between font-semibold text-secondary">
							<h1 className="text-xl">{item.title}</h1>
							<h1 className="text-base">$ {item.price}</h1>
						</div>
						<button
							className="border-2 border-secondary p-2 rounded-lg"
							onClick={(e) => handleSubmit(e, item)}
						>
							Remove
						</button>
					</div>
				))}
			</div>
		</>
	);
}
