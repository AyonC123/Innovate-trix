import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ data }) {
	return (
		<>
			<div className="flex flex-wrap justify-evenly gap-5">
				{data.map((item) => (
					<div
						key={item._id}
						className="flex flex-col p-5 py-6 shadow-lg rounded-lg"
					>
						<Image
							src={item.image}
							alt="product image"
							height={257}
							width={229}
							className="rounded-lg pb-2"
						/>
						<div className="flex justify-between">
							<Link href={`/shop/${item._id}`}>
								<h1 className="text-xs">{item.title}</h1>
							</Link>
							<h1 className="text-xs">₹ {item.price}</h1>
						</div>
					</div>
				))}
			</div>
		</>
	);
}
